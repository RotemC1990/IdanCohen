import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() videoFile: File;
  videoDownloadURL: string;
  posterDownloadURL : string;
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  tempPath : string;
  firstUploadFile : boolean = false;
  uploadStatus : boolean = false;
  constructor(private storage: AngularFireStorage, private db: AngularFirestore,private data: DataService) { }

  ngOnInit() {
    this.data.currentVideoDownloadUrl.subscribe(videoDownloadURL => this.videoDownloadURL = videoDownloadURL);
    this.data.currentPosterDownloadUrl.subscribe(posterDownloadURL => this.posterDownloadURL = posterDownloadURL);
    this.data.currentCanUploadStatus.subscribe(status => this.uploadStatus = status);
    this.data.currentFirstUploadFileStatus.subscribe(status => this.firstUploadFile = status);
    this.uploadVideo();
  }

  uploadVideo() {

    // The storage path\
    if(this.firstUploadFile){
      this.tempPath = `videos/${this.videoFile.name}`;
    }
    else {
      this.tempPath = `posters/${this.videoFile.name}`;
    }
    const path = this.tempPath;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.videoFile);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        if(!this.firstUploadFile) {
          this.posterDownloadURL = await ref.getDownloadURL().toPromise();
          this.data.changePostsUrl(this.posterDownloadURL);
         this.firstUploadFile = true;
         this.data.changeFirstUploadFileStatus(this.firstUploadFile);
        }
        else {
          this.videoDownloadURL = await ref.getDownloadURL().toPromise();
          this.data.changeVideoUrl(this.videoDownloadURL);
         this.firstUploadFile = false;
         this.data.changeFirstUploadFileStatus(this.firstUploadFile);
         this.data.changeCanUploadStatus(true);
        }
        
      }),
    );
  }


  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
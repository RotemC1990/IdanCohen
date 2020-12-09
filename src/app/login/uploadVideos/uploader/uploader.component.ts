import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { FilesUploadMetadata } from 'src/app/models/FilesUploadMetadata';
import { Video } from 'src/app/models/video.model';
import { DataService } from 'src/app/services/data.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit{
  public videoFile: any = {};
  public posterFile: any = {};
  video : Video;
  title = "";
  description = "";
  category = "";


  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;
  uploadBoolean: boolean = false;
  


  videoDownloadURL:string;
  posterDownloadURL : string;
  constructor(
    private firebaseService: FirebaseService,
    private data: DataService,
    private storage: AngularFireStorage,
    ) 
    {}
    ngOnInit() {
      this.data.currentVideoDownloadUrl.subscribe(videoDownloadURL => this.videoDownloadURL = videoDownloadURL);
      this.data.currentPosterDownloadUrl.subscribe(posterDownloadURL => this.posterDownloadURL = posterDownloadURL);
      this.data.currentCanUploadStatus.subscribe(status => this.uploadBoolean = status);
      
    }
 

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
 
  startUpload() {
    this.data.currentVideoDownloadUrl.subscribe(videoDownloadURL => this.videoDownloadURL = videoDownloadURL);
    this.data.currentPosterDownloadUrl.subscribe(posterDownloadURL => this.posterDownloadURL = posterDownloadURL);
    this.video = new Video(this.videoDownloadURL,this.posterDownloadURL,this.title,this.description,this.category,false);
   

     
      
      this.uploadBoolean = false;
      this.data.changeCanUploadStatus(this.uploadBoolean);
      this.firebaseService.create(this.video);
      
  }
  


  
  
}
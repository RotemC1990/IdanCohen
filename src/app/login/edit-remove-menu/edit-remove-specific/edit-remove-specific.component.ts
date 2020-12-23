import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Video } from 'src/app/models/video.model';
import { DataService } from 'src/app/services/data.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit-remove-specific',
  templateUrl: './edit-remove-specific.component.html',
  styleUrls: ['./edit-remove-specific.component.css']
})
export class EditRemoveSpecificComponent implements OnInit {

  constructor(private firebaseService : FirebaseService,
              private data: DataService
              ) { }

  video : Video;
  private videoId : string;
  title : string;
  description : string;
  posterURL : string;
  videoURL : string;
  category : string;
  credits : string;
  private newPosterUrl : string;
  private newVideoUrl : string;
  private updatedVideo : Video;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;
  files: File[] = [];
  videosSortList: any[];


  ngOnInit(): void {
    const {data} = window.history.state;
    const {id} = window.history.state;
    this.video  = data.video;
    this.videoId = data.videoId;
    console.log(this.videoId)
    this.title = this.video.title;
    this.description = this.video.description;
    this.posterURL = this.video.posterDownloadURL;
    this.videoURL = this.video.downloadURL;
    this.category = this.video.category;
    this.credits = this.video.credits;
    this.data.changePostsUrl(this.posterURL);
    this.data.changeVideoUrl(this.videoURL);
  



    console.log(this.firebaseService.getSortList())

    this.firebaseService.getSortList().snapshotChanges().subscribe(obj => {
      obj.forEach(item => {
        
       
        this.videosSortList.push(item.payload.doc);
        console.log(item.payload.doc)
      })
    });
    console.log(this.videosSortList)
  }
  

  deleteVideo() {
    this.firebaseService.deleteFromStorage(this.posterURL);
    this.firebaseService.deleteFromStorage(this.videoURL);
    this.firebaseService.deleteFromFirestore(this.videoId);
    console.log('done delete')
  }
  updateVideo() {
    
    this.data.currentVideoDownloadUrl.subscribe(videoDownloadURL => this.newVideoUrl = videoDownloadURL);
      this.data.currentPosterDownloadUrl.subscribe(posterDownloadURL => this.newPosterUrl = posterDownloadURL);
    if(this.posterURL != this.newPosterUrl){
      this.firebaseService.deleteFromStorage(this.posterURL);
      this.posterURL = this.newPosterUrl;
    }
    if(this.videoURL != this.newVideoUrl) {
      this.firebaseService.deleteFromStorage(this.videoURL);
      this.videoURL = this.newVideoUrl;    
    }

    this.updatedVideo = new Video (this.videoURL , this.posterURL , this.title , this.description , this.category, this.credits , false);
    console.log(this.updatedVideo)
    this.firebaseService.update(this.videoId,this.updatedVideo);

  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
}

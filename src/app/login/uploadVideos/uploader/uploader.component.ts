import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Video } from 'src/app/models/video.model';
import { VideoSort } from 'src/app/models/videoSort.model';
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
  credits= "";
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;
  uploadBoolean: boolean = false;
  files: File[] = [];
  videoSort: VideoSort;
  firebaseLoadedSort: any;
  videoDownloadURL:string;
  posterDownloadURL : string;

  constructor(
    private firebaseService: FirebaseService,
    private data: DataService,
    private storage: AngularFireStorage,
    
    ) 
    {}
    async ngOnInit() {
      this.data.currentVideoDownloadUrl.subscribe(videoDownloadURL => this.videoDownloadURL = videoDownloadURL);
      this.data.currentPosterDownloadUrl.subscribe(posterDownloadURL => this.posterDownloadURL = posterDownloadURL);
      this.data.currentCanUploadStatus.subscribe(status => this.uploadBoolean = status);
      this.videoSort = await  this.firebaseService.getSortList();
    }

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
    this.video = new Video(this.videoDownloadURL,this.posterDownloadURL,this.title,this.description,this.category,this.credits,false);

    this.uploadBoolean = false;
    this.data.changeCanUploadStatus(this.uploadBoolean);
    this.firebaseService.create(this.video);
    this.updateSortList();
 
  }

  private updateSortList() {
    switch(this.category) {
      case "Product" : 
      this.videoSort.productPage.unshift(this.title)
       break;
      case "Music" : 
      this.videoSort.musicPage.unshift(this.title)
       break;
     case "Commercial" :
      this.videoSort.commercialPage.unshift(this.title)
       break;
     case "Promo" : 
     this.videoSort.promoPage.unshift(this.title)
       break;
     case "Events" : 
     this.videoSort.eventsPage.unshift(this.title)
       break;
     case "Viral" : 
     this.videoSort.viralPage.unshift(this.title)
       break;
    }
    this.videoSort.homePage.unshift(this.title)
    this.firebaseService.updateSortedVideoList(this.videoSort)
  }

}
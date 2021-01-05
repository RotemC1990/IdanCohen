import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoSort } from 'src/app/models/videoSort.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home-page-sort',
  templateUrl: './home-page-sort.component.html',
  styleUrls: ['./home-page-sort.component.css']
})
export class HomePageSortComponent implements OnInit {

  videosFromFirebase: Video[] = [];
  sortList: VideoSort;
  firebaseLoadedSort: any;
  sortedVideos: Video[] = [];
  

  constructor(private firebaseService: FirebaseService,) { }

  async ngOnInit(): Promise<void> {
    this.videosFromFirebase = await this.firebaseService.getVideosList();
    this.sortList = await this.firebaseService.getSortList()
    this.sortVideos();
  }

  private sortVideos() {
    this.sortedVideos= []
    this.sortList.homePage.forEach(videoTitle => {
      this.videosFromFirebase.forEach(video => {
        if(videoTitle == video.title)
          this.sortedVideos.push(video)
          
      })
    })
    console.log(this.sortList.homePage)
  }
  saveChanges() {
    this.firebaseService.updateSortedVideoList(this.sortList);
  }

  changePlace(movingPlace,title) {
    let videoCurrentPlace = this.getVideoCurrentPlace(title);
    this.sortList.homePage.splice(videoCurrentPlace,1)
    this.sortList.homePage.splice(movingPlace,0,title)
    this.sortVideos();
  }

  private getVideoCurrentPlace(title) {
    let videoPlace = 0;
    for(let i=0; i<this.sortList.homePage.length;i++) {
      if(this.sortList.homePage[i] == title) {
        return videoPlace;
      }
      else{
        videoPlace++;
      }
    } 
    return videoPlace;
  }
}

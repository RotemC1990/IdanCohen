import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoSort } from 'src/app/models/videoSort.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-commercial-page-sort',
  templateUrl: './commercial-page-sort.component.html',
  styleUrls: ['./commercial-page-sort.component.css']
})
export class CommercialPageSortComponent implements OnInit {

  sortList: VideoSort;
  videos: Video[] = [];
  sortedVideos: Video[] = [];
  constructor(private firebaseService: FirebaseService) { }

  async ngOnInit() {
    this.videos = await this.firebaseService.getVideosList();
		this.sortList = await this.firebaseService.getSortList()
		this.sortVideos();
  }

  private sortVideos() {
		this.sortedVideos = [];
		this.sortList.commercialPage.forEach((videoTitle) => {
			this.videos.forEach((video) => {
				if (videoTitle == video.title) this.sortedVideos.push(video);
			});
		});
  }
  changePlace(movingPlace,title) {
    let videoCurrentPlace = this.getVideoCurrentPlace(title);
    this.sortList.commercialPage.splice(videoCurrentPlace,1)
    this.sortList.commercialPage.splice(movingPlace,0,title)
    this.sortVideos();
  }

  private getVideoCurrentPlace(title) {
    let videoPlace = 0;
    for(let i=0; i<this.sortList.commercialPage.length;i++) {
      if(this.sortList.commercialPage[i] == title) {
        return videoPlace;
      }
      else{
        videoPlace++;
      }
    } 
    return videoPlace;
  }

  saveChanges() {
    this.firebaseService.updateSortedVideoList(this.sortList);
  }
}

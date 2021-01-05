import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoSort } from 'src/app/models/videoSort.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-promo-page-sort',
  templateUrl: './promo-page-sort.component.html',
  styleUrls: ['./promo-page-sort.component.css']
})
export class PromoPageSortComponent implements OnInit {
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
		this.sortList.promoPage.forEach((videoTitle) => {
			this.videos.forEach((video) => {
				if (videoTitle == video.title) this.sortedVideos.push(video);
			});
		});
  }
  changePlace(movingPlace,title) {
    let videoCurrentPlace = this.getVideoCurrentPlace(title);
    this.sortList.promoPage.splice(videoCurrentPlace,1)
    this.sortList.promoPage.splice(movingPlace,0,title)
    this.sortVideos();
  }

  private getVideoCurrentPlace(title) {
    let videoPlace = 0;
    for(let i=0; i<this.sortList.promoPage.length;i++) {
      if(this.sortList.promoPage[i] == title) {
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

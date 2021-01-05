import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoSort } from 'src/app/models/videoSort.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-product-page-sort',
  templateUrl: './product-page-sort.component.html',
  styleUrls: ['./product-page-sort.component.css']
})
export class ProductPageSortComponent implements OnInit {

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
		this.sortList.productPage.forEach((videoTitle) => {
			this.videos.forEach((video) => {
				if (videoTitle == video.title) this.sortedVideos.push(video);
			});
		});
  }
  changePlace(movingPlace,title) {
    let videoCurrentPlace = this.getVideoCurrentPlace(title);
    this.sortList.productPage.splice(videoCurrentPlace,1)
    this.sortList.productPage.splice(movingPlace,0,title)
    this.sortVideos();
  }

  private getVideoCurrentPlace(title) {
    let videoPlace = 0;
    for(let i=0; i<this.sortList.productPage.length;i++) {
      if(this.sortList.productPage[i] == title) {
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

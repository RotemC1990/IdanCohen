import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoSort } from 'src/app/models/videoSort.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-events-page-sort',
  templateUrl: './events-page-sort.component.html',
  styleUrls: ['./events-page-sort.component.css']
})
export class EventsPageSortComponent implements OnInit {


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
		this.sortList.eventsPage.forEach((videoTitle) => {
			this.videos.forEach((video) => {
				if (videoTitle == video.title) this.sortedVideos.push(video);
			});
		});
  }
  changePlace(movingPlace,title) {
    let videoCurrentPlace = this.getVideoCurrentPlace(title);
    this.sortList.eventsPage.splice(videoCurrentPlace,1)
    this.sortList.eventsPage.splice(movingPlace,0,title)
    this.sortVideos();
  }

  private getVideoCurrentPlace(title) {
    let videoPlace = 0;
    for(let i=0; i<this.sortList.eventsPage.length;i++) {
      if(this.sortList.eventsPage[i] == title) {
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

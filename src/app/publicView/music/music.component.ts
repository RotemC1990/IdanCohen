import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoSort } from 'src/app/models/videoSort.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  videosSortList: VideoSort;
  videos: Video[] = [];
  sortedVideos: Video[] = [];
  constructor(private firebaseService: FirebaseService) { }

  async ngOnInit() {
    this.videos = await this.firebaseService.getVideosList();
		this.videosSortList = await this.firebaseService.getSortList();
		this.sortVideos();
  }

  private sortVideos() {
		this.sortedVideos = [];
		this.videosSortList.musicPage.forEach((videoTitle) => {
			this.videos.forEach((video) => {
				if (videoTitle == video.title) this.sortedVideos.push(video);
			});
		});
	}
}

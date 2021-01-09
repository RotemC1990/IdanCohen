import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Video } from 'src/app/models/video.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { VideoModalService } from 'src/app/services/video-modal.service';
import { VideoSort } from 'src/app/models/videoSort.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	@ViewChild('videoContent') mymodal: ElementRef;

	logoPath: string = '../../assets/idanLogo.gif';
	videoFrontReel: boolean;
	videoURL: string;
	posterURL: string;
	videoTitle: string;
	videoDescription: string;
	videoCredits: string;
	videoCategory: string;
	videosSortList: VideoSort;
	videos: Video[] = [];
	sortedVideos: Video[] = [];
	videosToShow: number = 6;

	constructor(
		private modalService: NgbModal,
		private firebaseService: FirebaseService,
		private videoModalService: VideoModalService
	) {}
	
	async ngOnInit() {
		this.videos = await this.firebaseService.getVideosList();
		this.videosSortList = await this.firebaseService.getSortList();
		this.sortVideos();
	}

	private sortVideos() {
		this.sortedVideos = [];
		this.videosSortList.homePage.forEach((videoTitle) => {
			this.videos.forEach((video) => {
				if (videoTitle == video.title) this.sortedVideos.push(video);
			});
		});
	}

	openModal(videoContent, videoSelected: Video) {
		console.log(videoSelected);
		this.videoTitle = videoSelected.title;
		this.videoDescription = videoSelected.description;
		this.videoURL = videoSelected.downloadURL;
		this.videoFrontReel = videoSelected.frontReel;
		this.posterURL = videoSelected.posterDownloadURL;
		this.videoCredits = videoSelected.credits;

		this.videoModalService.changeCategory(videoSelected.category);
		this.videoModalService.changeCredits('none');
		this.videoModalService.changeDescription(videoSelected.description);
		this.videoModalService.changePostsUrl(videoSelected.posterDownloadURL);
		this.videoModalService.changeTitle(videoSelected.title);
		this.videoModalService.changeVideoUrl(videoSelected.posterDownloadURL);

		this.modalService.open(videoContent, { scrollable: true,  windowClass : "myCustomModalClass"});
	}

	showMoreVideos() {
		if (this.videosToShow + 6 >= this.videos.length) {
			this.videosToShow = this.videos.length;
			(<HTMLInputElement>document.getElementById('showMoreBtn')).disabled = true;
		}
		this.videosToShow += 6;
	}
}

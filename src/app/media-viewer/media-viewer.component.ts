import { Component, OnInit, ViewChild, ElementRef, Inject, Input, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-media-viewer',
	templateUrl: './media-viewer.component.html',
	styleUrls: [ './media-viewer.component.css' ]
})
export class MediaViewerComponent implements OnInit ,AfterViewInit {
	@Input() frontReelVideo: string;
	@Input() videoPath: string = 'https://firebasestorage.googleapis.com/v0/b/videographer-1b3cb.appspot.com/o/videos%2FFrontReel2.mp4?alt=media&token=4e76e5be-fbb4-4b01-996e-6ffcca0480b5';
	@Input() posterURL: string = 'https://firebasestorage.googleapis.com/v0/b/videographer-1b3cb.appspot.com/o/posters%2FTop%20Panel%20Reel.png?alt=media&token=f04aadf8-2bda-41c9-adb6-768dbe23dce7';
	@Input() videoTemplate: string;
	videoName = '';
	videoDesc = '';

	isFrontReel: boolean;
	isVideoTemplate: boolean;
	constructor() {}
  ngAfterViewInit(): void {
    if(this.isFrontReel) {
      console.log(document.getElementById('frontReel'))
      var myVideo: any = document.getElementById('frontReel');
      setTimeout(() => {   myVideo.play(); }, 1000);
      
    } 
   }

	ngOnInit(): void {
		if (this.frontReelVideo == 'true') {
			this.isFrontReel = true;
		} else {
			this.isFrontReel = false;
		}
		if (this.videoTemplate == 'true') {
			this.isVideoTemplate = true;
		} else {
			this.isVideoTemplate = false;
    }
   
	}
	name = 'Angular';
	@ViewChild('videoPlayer', { static: false })
	videoPlayer: ElementRef;
	isPlay: boolean = false;
	toggleVideo(event: any) {
		this.videoPlayer.nativeElement.play();
	}
	playPause() {
		var myVideo: any = document.getElementById('my_video_1');
		if (myVideo.paused) myVideo.play();
		else myVideo.pause();
	}
	

	makeBig() {
		var myVideo: any = document.getElementById('my_video_1');
		myVideo.width = 560;
	}

	makeSmall() {
		var myVideo: any = document.getElementById('my_video_1');
		myVideo.width = 320;
	}

	makeNormal() {
		var myVideo: any = document.getElementById('my_video_1');
		myVideo.width = 420;
	}

	skip(value) {
		let video: any = document.getElementById('my_video_1');
		video.currentTime += value;
	}

	restart() {
		let video: any = document.getElementById('my_video_1');
		video.currentTime = 0;
	}
}

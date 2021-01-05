import { Component, OnInit, ViewChild, ElementRef, Inject, Input } from '@angular/core';


@Component({
  selector: 'app-media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.css']
})

export class MediaViewerComponent implements OnInit {
  @Input() frontReelVideo : string; 
  @Input()  videoPath : string = "https://firebasestorage.googleapis.com/v0/b/videographer-1b3cb.appspot.com/o/videos%2FFrontReel2.mp4?alt=media&token=4e76e5be-fbb4-4b01-996e-6ffcca0480b5";
  @Input() posterURL : string = "https://firebasestorage.googleapis.com/v0/b/videographer-1b3cb.appspot.com/o/posters%2FTop%20Panel%20Reel.png?alt=media&token=f04aadf8-2bda-41c9-adb6-768dbe23dce7";
  @Input() videoTemplate : string; 
  videoName="";
  videoDesc="";
 
 isFrontReel : boolean;
 isVideoTemplate : boolean;
  constructor(){}

  
 
  ngOnInit(): void {

    if(this.frontReelVideo == "true") {
      this.isFrontReel= true;
    } 
    else {
      this.isFrontReel = false;
    }
    if(this.videoTemplate == "true") {
      this.isVideoTemplate = true;
    }
    else {
      this.isVideoTemplate = false;
    }
      
      console.log(typeof this.frontReelVideo)
    console.log("isFrontReel Boolean is   " + this.isFrontReel)
  }
  name = "Angular";
  @ViewChild("videoPlayer", { static: false }) videoPlayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoPlayer.nativeElement.play();
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }
  zoomIn() {
    var myVideo: any = document.getElementById("my_video_1");

    var properties = ['transform', 'WebkitTransform', 'MozTransform',
    'msTransform', 'OTransform'],
    prop = properties[0];
    /* Iterators and stuff */    
     var i,j,t;
  
    /* Find out which CSS transform the browser supports */
    for(i=0,j=properties.length;i<j;i++){
      if(typeof myVideo.style[properties[i]] !== 'undefined'){
        prop = properties[i];
        break;
     }
    }

    myVideo.style[prop]='scale('+1.61+') rotate('+0+'deg)';


  }

  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
    }

  skip(value) {
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }


}

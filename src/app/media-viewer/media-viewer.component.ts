import { Component, OnInit, ViewChild, ElementRef, Inject, Input } from '@angular/core';


@Component({
  selector: 'app-media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.css']
})

export class MediaViewerComponent implements OnInit {
  @Input()  videoPath : string= "../../assets/FrontReel2.mp4";
  videoName="";
  videoDesc="";
  @Input() frontReelVideo : boolean = true;
  constructor(){}
  
 
  ngOnInit(): void {
    //this.playPause();
    //this.zoomIn();
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

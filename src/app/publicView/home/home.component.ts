import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import  {Video}  from 'src/app/models/video.model';
import { VideoModalComponent } from '../video-modal/video-modal.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { VideoModalService } from 'src/app/services/video-modal.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  
  @ViewChild('videoContent') mymodal: ElementRef;
   videosSrc: string[] = ["../../assets/videos/Commercial/DutyFree-Lindt.mp4","../../assets/videos/Events/H.I.TGraduateExhbition2017-VisualCommunication.mp4",
                              "../../assets/videos/Events/Purim_2019_EventTAU.mp4","../../assets/videos/Events/Vayyar-CES_2020.mp4",
                              "../../assets/videos/Events/VayyarOnEcomotionTLV2019.mp4","../../assets/videos/Commercial/DutyFree-Loreal.mp4"];
    postersSrc = ["../../assets/posters/lindt.jpg",
                      "../../assets/posters/H.I.TGraduateExhbition2017-VisualCommunication.jpg",
                      "../../assets/posters/Purim_2019_EventTAU.jpg",
                      "../../assets/posters/Vayyar-CES_2020.jpg",
                      "../../assets/posters/VayyarOnEcomotionTLV2019.jpg",
                      "../../assets/posters/loreal.jpg"];
 videosName: string[] = ["DutyFree - Lindt","H.I.T Graduate Exhbition 2017 - Visual Communication","Purim_2019_EventTAU","Vayyar - CES_2020",
                            "Vayyar On Ecomotion TLV 2019", "Duty Free - Loreal"];
 videosDescription: string[] = ["1111111","22222222","33333333","444444444","5555555","666666"];




  videoFrontReel : boolean;


 videos : Video[]=[];
 v : Video;
 videoRows : number =0;
  //videos: MediaViewerComponent[];

  videosDb : any[];

   videoURL : string;
   posterURL : string;
   videoTitle : string;
   videoDescription : string;
   videoCredits : string;
   videoCategory : string;

  constructor(private modalService: NgbModal,
    private router: Router,
     private firebaseService: FirebaseService,
     private videoModalService: VideoModalService,
     private videoModal: VideoModalComponent
     ) { 
    /*
    db.list('/videos').
    .subscribe (videos => {
      this.videosDb = videos;
      console.log(this.videosDb)
    })*/
  }
  
  ngOnInit(): void {
    for(let i=0;i<this.videosDescription.length;i++){
      this.videos[i] = new Video(this.videosSrc[i],this.postersSrc[i],this.videosName[i],this.videosDescription[i],"","credits",false);
     
      
      
    }
    
    this.videoRows= this.videos.length/3;
    

  }


  openModal(videoContent,videoSelected: Video) {
    console.log(videoSelected)
    this.videoTitle = videoSelected.title;
    this.videoDescription = videoSelected.description;
    this.videoURL = videoSelected.downloadURL;
    this.videoFrontReel = videoSelected.frontReel;
    this.posterURL = videoSelected.posterDownloadURL;
    console.log(this.videoURL)
   // let v = new VideoModalComponent(this.modalService);

   this.videoModalService.changeCategory(videoSelected.category);
   this.videoModalService.changeCredits("none");
   this.videoModalService.changeDescription(videoSelected.description);
   this.videoModalService.changePostsUrl(videoSelected.posterDownloadURL);
   this.videoModalService.changeTitle(videoSelected.title);
   this.videoModalService.changeVideoUrl(videoSelected.posterDownloadURL);

  this.modalService.open(videoContent, {scrollable: true , size: 'xl' });


                            
  }


  showMoreVideos() {

  }

  showAllVideos() {

  }
  

}

import { AfterViewInit, Component , ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalService } from 'src/app/services/video-modal.service';
@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./video-modal.component.css'],
 
})

export class VideoModalComponent  implements AfterViewInit{
  
  

  
  @ViewChild('longContent') mymodal: ElementRef;
  
   videoURL : string;
   posterURL : string;
   videoTitle : string;
   videoDescription : string;
   videoCredits : string;
   videoCategory : string;

  constructor(
              private modalService: NgbModal,
              private videoModalService: VideoModalService, 
              ) {}
  
  ngAfterViewInit() {
    console.log(this.mymodal)
    this.modalService.open(this.mymodal, { windowClass: 'dark-modal' ,  scrollable: true , size: 'xl' });
  }
  
  private modalServiceInit() {
    this.videoModalService.currentVideoDownloadUrl.subscribe(videoDownloadURL => this.videoURL = videoDownloadURL);
    this.videoModalService.currentPosterDownloadUrl.subscribe(videoDownloadURL => this.posterURL = videoDownloadURL);
    this.videoModalService.currentTitle.subscribe(videoDownloadURL => this.videoTitle = videoDownloadURL);
    this.videoModalService.currentDescription.subscribe(videoDownloadURL => this.videoDescription = videoDownloadURL);
    this.videoModalService.currentCredits.subscribe(videoDownloadURL => this.videoCredits = videoDownloadURL);
    this.videoModalService.currentCategory.subscribe(videoDownloadURL => this.videoCategory = videoDownloadURL);
  }
  
    openWindowCustomClass() {
      this.modalServiceInit();
      console.log("this.mymodal");
      console.log(this.mymodal);
      console.log("this.mymodal");
      this.modalService.open(this.mymodal, { windowClass: 'dark-modal' ,  scrollable: true , size: 'xl' });
      
    }
  
  }
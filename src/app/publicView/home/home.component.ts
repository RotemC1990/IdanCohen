import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MediaViewerComponent } from 'src/app/media-viewer/media-viewer.component';
import  {Video}  from 'src/app/models/video.model';
import { VideoModalComponent } from '../video-modal/video-modal.component';
//import {AngularFireDatabase} from '@angular/fire/database';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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



 
   

 videos : Video[]=[];
 v : Video;
 videoRows : number =0;
 trEndStart :string = "</td><tr></tr><td>";
  //videos: MediaViewerComponent[];

  videosDb : any[];
  constructor(/*mediaViewer: MediaViewerComponent*/private modalService: NgbModal,private router: Router, private firebaseService: FirebaseService) { 
    /*
    db.list('/videos').
    .subscribe (videos => {
      this.videosDb = videos;
      console.log(this.videosDb)
    })*/
  }
  
  ngOnInit(): void {
    for(let i=0;i<this.videosDescription.length;i++){
      this.videos[i] = new Video(this.videosSrc[i],this.postersSrc[i],this.videosName[i],"",this.videosDescription[i],false);
      
    }
    let v = new VideoModalComponent(this.modalService);
    this.videoRows= this.videos.length/3;

  }

  openModal(videoSelected: Video) {
    console.log(videoSelected)
    let content = '<ng-template #longContent let-modal><div class="modal-header"><h4 class="modal-title">here we gonna put the title</h4><button type="button" class="close" aria-label="Close" (click)="modal.dismiss("Cross click")"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p><p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p><p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p></div><div class="modal-footer"><button type="button" class="btn btn-light" (click)="modal.close("Close click")">Close</button></div></ng-template>'
    
  
    let v = new VideoModalComponent(this.modalService);
    
    v.openWindowCustomClass(content)
    
    
                            
  }
  ////////////////////////////////
  public upload() {
    this.v = new Video(this.videosSrc[2],this.postersSrc[2],this.videosName[2],this.videosDescription[2],"",false);
    this.firebaseService.create(this.v);
  }

}

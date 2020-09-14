import { Component, OnInit } from '@angular/core';
import { MediaViewerComponent } from 'src/app/media-viewer/media-viewer.component';
import { Video } from 'src/app/models/video.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   videoSrcArray: string[] = ["../../assets/videos/Commercial/DutyFree-Lindt.mp4","../../assets/videos/Events/H.I.TGraduateExhbition2017-VisualCommunication.mp4",
                              "../../assets/videos/Events/Purim_2019_EventTAU.mp4","../../assets/videos/Events/Vayyar-CES_2020.mp4",
                              "../../assets/videos/Events/VayyarOnEcomotionTLV2019.mp4","../../assets/videos/Commercial/DutyFree-Loreal.mp4"];
    posterSrcArray = ["../../assets/posters/lindt.jpg",
                      "../../assets/posters/H.I.TGraduateExhbition2017-VisualCommunication.jpg",
                      "../../assets/posters/Purim_2019_EventTAU.jpg",
                      "../../assets/posters/Vayyar-CES_2020.jpg",
                      "../../assets/posters/VayyarOnEcomotionTLV2019.jpg",
                      "../../assets/posters/loreal.jpg"];
 videoNameArray: string[] = ["DutyFree - Lindt","H.I.T Graduate Exhbition 2017 - Visual Communication","Purim_2019_EventTAU","Vayyar - CES_2020",
                            "Vayyar On Ecomotion TLV 2019", "Duty Free - Loreal"];
 videoDescArray: string[] = ["1111111","22222222","33333333","444444444","5555555","666666"];

   

 videos : Video[]=[];
 videoRows : number =0;
 trEndStart :string = "</td><tr></tr><td>";
  //videos: MediaViewerComponent[];
  constructor(/*mediaViewer: MediaViewerComponent*/) { }
  
  ngOnInit(): void {
    for(let i=0;i<this.videoDescArray.length;i++){
      this.videos[i] = new Video(this.videoSrcArray[i],this.posterSrcArray[i],this.videoNameArray[i],this.videoDescArray[i],false);
    }
    
    this.videoRows= this.videos.length/3;

  }

  openModal(videoSelected: Video) {
    console.log(videoSelected)

    console.log("videos num div by 3 is " + this.videoRows)
    
                            
  }

}

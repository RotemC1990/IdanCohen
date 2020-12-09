import { AfterViewInit, Component , ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./video-modal.component.css'],
 
})

export class VideoModalComponent  implements AfterViewInit{
  
  

  
  @ViewChild('longContent') mymodal: ElementRef;
  
    constructor(private modalService: NgbModal) {}
  
  ngAfterViewInit() {
    console.log(this.mymodal)
    this.modalService.open(this.mymodal, { windowClass: 'dark-modal' ,  scrollable: true , size: 'xl' });
  }
  
   
  
    openWindowCustomClass(content) {
      console.log(this.mymodal);
      
      this.modalService.open(this.mymodal, { windowClass: 'dark-modal' ,  scrollable: true , size: 'xl' });
      
    }
  
  }
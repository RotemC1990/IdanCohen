import { Component , ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./video-modal.component.css'],
 
})

export class VideoModalComponent  {
  closeResult: string;


 
  
    constructor(private modalService: NgbModal) {}
  
    openBackDropCustomClass(content) {
      this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    }
  
    openWindowCustomClass(content) {
      this.modalService.open(content, { windowClass: 'dark-modal' ,  scrollable: true , size: 'xl' });
    }
  
    openSm(content) {
      this.modalService.open(content, { size: 'sm' });
    }
  
    openLg(content) {
      this.modalService.open(content, { size: 'lg' });
    }
  
    openXl(content) {
      this.modalService.open(content, { size: 'xl' });
    }
  
    openVerticallyCentered(content) {
      this.modalService.open(content, { centered: true });
    }
  
    openScrollableContent(longContent) {
      this.modalService.open(longContent, { scrollable: true });
    }
  }
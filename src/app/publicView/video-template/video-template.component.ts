import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-video-template',
  templateUrl: './video-template.component.html',
  styleUrls: ['./video-template.component.css']
})
export class VideoTemplateComponent implements OnInit {
 
  @Input() videoURL : string;
  @Input() posterURL : string;
  @Input() videoTitle : string;
  @Input() videoDescription : string;
  @Input() videoCredits : string;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    
  }

}

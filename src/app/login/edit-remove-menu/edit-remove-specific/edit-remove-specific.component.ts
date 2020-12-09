import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit-remove-specific',
  templateUrl: './edit-remove-specific.component.html',
  styleUrls: ['./edit-remove-specific.component.css']
})
export class EditRemoveSpecificComponent implements OnInit {

  constructor(private firebaseService : FirebaseService) { }
   video : Video;
   private videoId : string;
  private title : string;
  private description : string;
  private posterURL : string;
  private videoURL : string;
  private category : string;
  ngOnInit(): void {
    const {data} = window.history.state;
    const {id} = window.history.state;
    this.video  = data.video;
    this.videoId = data.videoId;
    console.log(this.videoId)
    this.title = this.video.name;
    this.description = this.video.description;
    this.posterURL = this.video.posterPath;
    this.videoURL = this.video.path;
    this.category = this.video.category;
  }
  

  deleteVideo() {
    this.firebaseService.deleteFromStorage(this.posterURL);
    this.firebaseService.deleteFromStorage(this.videoURL);
    this.firebaseService.deleteFromFirestore(this.videoId);
    console.log('done delete')
  }
  updateVideo() {

  }
}

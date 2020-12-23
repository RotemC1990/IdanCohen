import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection , AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit-remove-menu',
  templateUrl: './edit-remove-menu.component.html',
  styleUrls: ['./edit-remove-menu.component.css']
})
export class EditRemoveMenuComponent implements OnInit {

  videoCollection : AngularFirestoreCollection<Video>;
  videos: Video[] = [];
  videosId : string[]  = [];
  videosMeta : any[] =[];
  dbDoc :AngularFirestoreDocument;
  
  constructor(private firebaseService: FirebaseService,
                      private router: Router
             ) {}

  ngOnInit() {
    this.firebaseService.getVideos().snapshotChanges().subscribe(obj => {
      obj.forEach(item => {
        
        this.videosId.push(item.payload.doc.id);
        this.videos.push(item.payload.doc.data());
        this.videosMeta.push(item.payload.doc);
      })
    });
    console.log(this.videosId)
    console.log(this.videos)
    console.log(this.videosMeta)
      
  }
  goToEditRemove(video : Video, videoId : string) {
    this.router.navigate(['editRemoveSpecific'], {state: {data: {video , videoId}}});
  }
}

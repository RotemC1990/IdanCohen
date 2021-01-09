import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import {  AngularFireStorage,  AngularFireUploadTask} from '@angular/fire/storage';
import {Video }from '../models/video.model';
import { from, Observable } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { FilesUploadMetadata } from '../models/FilesUploadMetadata';
import { VideoSort } from '../models/videoSort.model';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  
  videoRef: AngularFirestoreCollection<Video> = null;
  private dbPath = '/videos';

  videosSortRef: AngularFirestoreCollection<string> = null;
  private dbSortPath = '/videosSort';
  snapshot: Observable<any>;
  task :AngularFireUploadTask;
  private downloadUrl: string;
  private loadedSortList: any;
  private sortList: VideoSort;
  private videosList : Video [] = [];

  constructor( 
              private db: AngularFirestore,
              private storage: AngularFireStorage,
              private auth: AngularFireAuth
              ) {
    this.videoRef = db.collection(this.dbPath);
    this.videosSortRef = db.collection(this.dbSortPath);
   }

  async getVideoRef() {
    return new Promise<DocumentChangeAction<Video> []>((resolve, reject) => {
      this.videoRef.snapshotChanges().subscribe(obj => {
        return resolve(obj);
      });
    });
  }
  
  signOut() {
    return this.auth.signOut();
  }
  signIn(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  
  async getVideosList(){
    this.videosList = [];
    return new Promise<Video []>((resolve, reject) => {
      this.videoRef.snapshotChanges().subscribe(obj => {
        obj.forEach(item => {
          this.videosList.push(item.payload.doc.data());
        })
        return resolve(this.videosList);
      });
    });
  }

  



  updateSortedVideoList(data: any): Promise<void> {
    return this.videosSortRef.doc("byCategory").set(Object.assign({}, JSON.parse(JSON.stringify(data))));
    
  }

  async getSortList() {
    return new Promise<VideoSort>((resolve, reject) => {
      this.videosSortRef.snapshotChanges().subscribe(obj => {
        obj.forEach(item => {
          this.loadedSortList =item.payload.doc.data();
          this.sortList = new VideoSort(this.loadedSortList.homePage,this.loadedSortList.productPage,this.loadedSortList.musicPage,this.loadedSortList.commercialPage,
                                        this.loadedSortList.promoPage,this.loadedSortList.eventsPage,this.loadedSortList.viralPage)
          })
          return resolve(this.sortList);
      });
  });

  }

  getSortedListByCategory(category: string) {
    let wantedList =[];
    this.videosSortRef.snapshotChanges().subscribe(obj => {
      obj.forEach(item => {
        console.log(item.payload.doc.id)
        if(item.payload.doc.id == category) {
          wantedList.push(item.payload.doc.data());
        }
      })
    });
    return wantedList;
  }


  

  create(video: Video): any {
    return this.videoRef.add({ ...video });
  }

  update(id: string, data: any): Promise<void> {
    return this.videoRef.doc(id).set(Object.assign({}, JSON.parse(JSON.stringify(data))));

  }

  deleteFromFirestore(id: string): Promise<void> {
    return this.videoRef.doc(id).delete();
  }

  uploadVideoWithUrls(mediaFolderPath: string, fileToUpload: File, video: Video) {
    
     // The storage path\
     const path =`${mediaFolderPath}/${fileToUpload.name}`;

     // Reference to storage bucket
     const ref = this.storage.ref(path);
 
     // The main task
     this.task = this.storage.upload(path, fileToUpload);
 
    
 
     this.snapshot   = this.task.snapshotChanges().pipe(
       tap(console.log),
       // The file's download URL
       finalize( async() =>  {
         this.downloadUrl = await ref.getDownloadURL().toPromise();
         video.posterDownloadURL = this.downloadUrl;
         this.create(video);  
               
       }),
     );

    
  }

  private getDownloadUrl$(uploadTask: AngularFireUploadTask, path: string, ): Observable<string> {
    return from(uploadTask).pipe(switchMap((_) => this.storage.ref(path).getDownloadURL()),);
  }
  deleteFromStorage (downloadUrl) {
    return this.storage.storage.refFromURL(downloadUrl).delete();
  }
  

}

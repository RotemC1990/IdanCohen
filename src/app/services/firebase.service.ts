import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {  AngularFireStorage,  AngularFireUploadTask} from '@angular/fire/storage';
import {Video }from '../models/video.model';
import { from, Observable } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { FilesUploadMetadata } from '../models/FilesUploadMetadata';



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
  private videosArray : Video[];
  constructor( 
              private db: AngularFirestore,
              private storage: AngularFireStorage
              ) {
    this.videoRef = db.collection(this.dbPath);
    this.videosSortRef = db.collection(this.dbSortPath);
   }

  getAll(): AngularFirestoreCollection<Video> {
    return this.videoRef;
  }
  
     
  
   getVideos(){
    return  this.videoRef;
  }

  updateSortedVideoList(category: string, forHomePage: boolean, data: any): Promise<void> {
    if(forHomePage) {
      return this.videosSortRef.doc("homePage").set(Object.assign({}, JSON.parse(JSON.stringify(data))));
    }
    else {
      return this.videosSortRef.doc(category).set(Object.assign({}, JSON.parse(JSON.stringify(data))));
    } 
  }

  getSortList() {
    return this.videosSortRef;
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

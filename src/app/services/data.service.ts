import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private videoUrl = new BehaviorSubject('');
  private posterUrl = new BehaviorSubject('');
  public uploadStatus = new BehaviorSubject<boolean>(false);
  public firstStatusFile = new BehaviorSubject<boolean>(false);
  currentVideoDownloadUrl = this.videoUrl.asObservable();
  currentPosterDownloadUrl = this.posterUrl.asObservable();
  currentCanUploadStatus = this.uploadStatus.asObservable();
  currentFirstUploadFileStatus = this.firstStatusFile.asObservable();
  constructor() { }

  changeVideoUrl(message: string) {
    this.videoUrl.next(message)
  }
  changePostsUrl(message: string) {
    this.posterUrl.next(message)
  }
  changeCanUploadStatus(status : boolean){
    this.uploadStatus.next(status);
  }
  changeFirstUploadFileStatus(status : boolean) {
    this.firstStatusFile.next(status);
  }
}

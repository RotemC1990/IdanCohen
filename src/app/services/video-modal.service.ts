import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoModalService {
  
    private videoUrl = new BehaviorSubject('');
    private posterUrl = new BehaviorSubject('');
    private title = new BehaviorSubject('');
    private description = new BehaviorSubject('');
    private credits = new BehaviorSubject('');
    private category = new BehaviorSubject('');
    currentVideoDownloadUrl = this.videoUrl.asObservable();
    currentPosterDownloadUrl = this.posterUrl.asObservable();
    currentTitle = this.title.asObservable();
    currentDescription = this.description.asObservable();
    currentCredits = this.credits.asObservable();
    currentCategory = this.category.asObservable();    
    constructor() { }
  
    changeVideoUrl(message: string) {
      this.videoUrl.next(message)
    }
    changePostsUrl(message: string) {
        this.posterUrl.next(message)
    }
    changeTitle(message: string) {
        this.title.next(message)
    } 
    changeDescription(message: string) {
        this.description.next(message)
    } 
    changeCredits(message: string) {
        this.credits.next(message)
    } 
    changeCategory(message: string) {
        this.category.next(message)
     }
  }
  
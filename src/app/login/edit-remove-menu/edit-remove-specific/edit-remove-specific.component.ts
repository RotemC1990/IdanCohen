import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Video } from 'src/app/models/video.model';
import { VideoSort } from 'src/app/models/videoSort.model';
import { DataService } from 'src/app/services/data.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
	selector: 'app-edit-remove-specific',
	templateUrl: './edit-remove-specific.component.html',
	styleUrls: [ './edit-remove-specific.component.css' ]
})
export class EditRemoveSpecificComponent implements OnInit {
	constructor(private firebaseService: FirebaseService, private data: DataService) {}

	video: Video;
	private videoId: string;
	title: string;
	description: string;
	posterURL: string;
	videoURL: string;
	category: string;
	credits: string;
	private newPosterUrl: string;
	private newVideoUrl: string;
	private updatedVideo: Video;
	private oldVideoTitle: string;
	private oldVideoCategory: string;
	private sortList: VideoSort;
	task: AngularFireUploadTask;
	percentage: Observable<number>;
	snapshot: Observable<any>;
	downloadURL: Observable<string>;
	isHovering: boolean;
	files: File[] = [];

	async ngOnInit() {
		const { data } = window.history.state;
		const { id } = window.history.state;
		this.video = data.video;
		this.videoId = data.videoId;
		console.log(this.videoId);
		this.title = this.video.title;
		this.oldVideoTitle = this.video.title;
		this.description = this.video.description;
		this.posterURL = this.video.posterDownloadURL;
		this.videoURL = this.video.downloadURL;
		this.category = this.video.category;
		this.oldVideoCategory = this.video.category;
		this.credits = this.video.credits;
		this.data.changePostsUrl(this.posterURL);
		this.data.changeVideoUrl(this.videoURL);
		this.sortList = await this.firebaseService.getSortList();
	}

	deleteVideo() {
		this.firebaseService.deleteFromStorage(this.posterURL);
		this.firebaseService.deleteFromStorage(this.videoURL);
		this.firebaseService.deleteFromFirestore(this.videoId);
		this.deleteFromSortList();
		this.firebaseService.updateSortedVideoList(this.sortList);
	}

	private deleteFromSortList() {
		let homeSortCurrentPlace = this.getVideoPlaceFromHomeList();
		this.sortList.homePage.splice(homeSortCurrentPlace, 1);
		this.removeVideoFromCategory();
	}

	private getVideoPlaceFromHomeList() {
		let videoPlace = 0;
		for (let i = 0; i < this.sortList.homePage.length; i++) {
			if (this.sortList.homePage[i] == this.oldVideoTitle) {
				return videoPlace;
			} else {
				videoPlace++;
			}
		}
		return videoPlace;
	}

	private getVideoPlaceFromCommercialList() {
		let videoPlace = 0;
		for (let i = 0; i < this.sortList.commercialPage.length; i++) {
			if (this.sortList.commercialPage[i] == this.oldVideoTitle) {
				return videoPlace;
			} else {
				videoPlace++;
			}
		}
		return videoPlace;
	}

	private getVideoPlaceFromEventsList() {
		let videoPlace = 0;
		for (let i = 0; i < this.sortList.eventsPage.length; i++) {
			if (this.sortList.eventsPage[i] == this.oldVideoTitle) {
				return videoPlace;
			} else {
				videoPlace++;
			}
		}
		return videoPlace;
	}

	private getVideoPlaceFromMusicList() {
		let videoPlace = 0;
		for (let i = 0; i < this.sortList.musicPage.length; i++) {
			if (this.sortList.musicPage[i] == this.oldVideoTitle) {
				return videoPlace;
			} else {
				videoPlace++;
			}
		}
		return videoPlace;
	}

	private getVideoPlaceFromProductList() {
		let videoPlace = 0;
		for (let i = 0; i < this.sortList.productPage.length; i++) {
			if (this.sortList.productPage[i] == this.oldVideoTitle) {
				return videoPlace;
			} else {
				videoPlace++;
			}
		}
		return videoPlace;
	}

	private getVideoPlaceFromPromoList() {
		let videoPlace = 0;
		for (let i = 0; i < this.sortList.promoPage.length; i++) {
			if (this.sortList.promoPage[i] == this.oldVideoTitle) {
				return videoPlace;
			} else {
				videoPlace++;
			}
		}
		return videoPlace;
	}

	private getVideoPlaceFromViralList() {
		let videoPlace = 0;
		for (let i = 0; i < this.sortList.viralPage.length; i++) {
			if (this.sortList.viralPage[i] == this.oldVideoTitle) {
				return videoPlace;
			} else {
				videoPlace++;
			}
		}
		return videoPlace;
	}

	updateVideo() {
		this.data.currentVideoDownloadUrl.subscribe((videoDownloadURL) => (this.newVideoUrl = videoDownloadURL));
		this.data.currentPosterDownloadUrl.subscribe((posterDownloadURL) => (this.newPosterUrl = posterDownloadURL));
		if (this.posterURL != this.newPosterUrl) {
			this.firebaseService.deleteFromStorage(this.posterURL);
			this.posterURL = this.newPosterUrl;
		}
		if (this.videoURL != this.newVideoUrl) {
			this.firebaseService.deleteFromStorage(this.videoURL);
			this.videoURL = this.newVideoUrl;
		}
		this.updatedVideo = new Video(
			this.videoURL,
			this.posterURL,
			this.title,
			this.description,
			this.category,
			this.credits,
			false
		);
		console.log(this.updatedVideo);
		this.firebaseService.update(this.videoId, this.updatedVideo);
		let sameTitle = false;
		let sameCategory = false;
		if (this.title == this.oldVideoTitle) {
			sameTitle = true;
		}
		if (this.category == this.oldVideoCategory) {
			sameCategory = true;
		}
		this.updateSortList(sameTitle, sameCategory);

		let homeSortCurrentPlace = this.getVideoPlaceFromHomeList();
		this.sortList.homePage.splice(homeSortCurrentPlace, 1);
		this.sortList.homePage.splice(homeSortCurrentPlace, 0, this.title);
		this.firebaseService.updateSortedVideoList(this.sortList);
	}

	private updateSortList(sameTitle: boolean, sameCategory: boolean) {
		if (sameTitle) {
			if (!sameCategory) {
				let placeInList = this.removeVideoFromCategory();
				this.insertVideoToCategory(this.category, placeInList);
			}
		} else {
			if (sameCategory) {
				let placeInList = this.removeVideoFromCategory();
				this.insertVideoToCategory(this.category, placeInList);
			} else {
				this.removeVideoFromCategory();
				this.insertVideoToCategory(this.category, 0);
			}
		}
	}

	private removeVideoFromCategory(): number {
		switch (this.oldVideoCategory) {
			case 'Product': {
				let productSortCurrentPlace = this.getVideoPlaceFromProductList();
				this.sortList.productPage.splice(productSortCurrentPlace, 1);
				return productSortCurrentPlace;
			}
			case 'Music': {
				let musicSortCurrentPlace = this.getVideoPlaceFromMusicList();
				this.sortList.musicPage.splice(musicSortCurrentPlace, 1);
				return musicSortCurrentPlace;
			}
			case 'Commercial': {
				let commercialSortCurrentPlace = this.getVideoPlaceFromCommercialList();
				this.sortList.commercialPage.splice(commercialSortCurrentPlace, 1);
				return commercialSortCurrentPlace;
			}
			case 'Promo': {
				let promoSortCurrentPlace = this.getVideoPlaceFromPromoList();
				this.sortList.promoPage.splice(promoSortCurrentPlace, 1);
				return promoSortCurrentPlace;
			}
			case 'Events': {
				let eventsSortCurrentPlace = this.getVideoPlaceFromEventsList();
				this.sortList.eventsPage.splice(eventsSortCurrentPlace, 1);
				return eventsSortCurrentPlace;
			}
			case 'Viral': {
				let viralSortCurrentPlace = this.getVideoPlaceFromViralList();
				this.sortList.viralPage.splice(viralSortCurrentPlace, 1);
				return viralSortCurrentPlace;
			}
		}
	}

	private insertVideoToCategory(category: string, placeInList: number) {
		switch (category) {
			case 'Product': {
				this.sortList.productPage.splice(placeInList, 0, this.title);
				break;
			}
			case 'Music': {
				this.sortList.musicPage.splice(placeInList, 0, this.title);
				break;
			}
			case 'Commercial': {
				this.sortList.commercialPage.splice(placeInList, 0, this.title);
				break;
			}
			case 'Promo': {
				this.sortList.promoPage.splice(placeInList, 0, this.title);
				break;
			}
			case 'Events': {
				this.sortList.eventsPage.splice(placeInList, 0, this.title);
				break;
			}
			case 'Viral': {
				this.sortList.viralPage.splice(placeInList, 0, this.title);
				break;
			}
		}
	}

	toggleHover(event: boolean) {
		this.isHovering = event;
	}

	onDrop(files: FileList) {
		for (let i = 0; i < files.length; i++) {
			this.files.push(files.item(i));
		}
	}
}

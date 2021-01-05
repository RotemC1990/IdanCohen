import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
	selector: 'app-admin-navigation-bar',
	templateUrl: './admin-navigation-bar.component.html',
	styleUrls: [ './admin-navigation-bar.component.css' ]
})
export class AdminNavigationBarComponent implements OnInit {
	constructor(private firebaseService: FirebaseService, private router: Router) {}
	@Input() currentPage: string;
	ngOnInit(): void {
    this.setTabColor();
  }

	logout() {
		this.firebaseService.signOut().then(() => this.router.navigate([ 'home' ]));
	}
	private setTabColor() {
		switch (this.currentPage) {
			case 'Upload': {
				document.getElementById('upload').style.color = '#41b792';
				break;
			}
			case 'EditAndRemove': {
				document.getElementById('edit').style.color = '#41b792';
				break;
			}
			case 'Sort': {
				document.getElementById('sort').style.color = '#41b792';
				break;
			}
		}
	}
}

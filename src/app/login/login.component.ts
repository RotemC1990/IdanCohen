import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	email = '';
	password = '';
	errorMsg = '';

	constructor(private router: Router, private firebaseService: FirebaseService) {}

	ngOnInit(): void {}

	login() {
		this.firebaseService.signIn(this.email,this.password)
			.then(() => this.router.navigate([ 'editRemoveMenu' ]))
			.catch(() => {
				this.errorMsg = 'Invalid Credentials';
			});
	}
}

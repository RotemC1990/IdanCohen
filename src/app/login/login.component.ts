import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	email = '';
	password = '';
	errorMsg = '';

	constructor(private router: Router, private auth: AngularFireAuth) {}

	ngOnInit(): void {}

	login() {
		this.auth
			.signInWithEmailAndPassword(this.email, this.password)
			.then(() => this.router.navigate([ 'editRemoveMenu' ]))
			.catch(() => {
				this.errorMsg = 'Invalid Credentials';
			});
	}
}

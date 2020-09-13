import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	username = '';
	password = '';
	errorMsg = 'Invalid Credentials';
  invalidLogin = false;
  
	constructor(private router: Router) {}

	ngOnInit(): void {}

	handleLogin() {
		console.log(this.username);
		console.log(this.password);
		if (this.username === 'idan' && this.password === 'idan') {
      this.invalidLogin = false;
      this.router.navigate(['upload']);
    } 
    else this.invalidLogin = true;
	}
}

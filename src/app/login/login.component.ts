import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './localStorageService';
@Component({
  selector: 'app-login',
 templateUrl:'login.component.html',
 styleUrls:['login.component.css']
})

export class LoginComponent implements OnInit {
  email! :string
  password!:string
  // loginForm!:FormGroup
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      // the user is already logged in, redirect to the home page or some other page
      this.router.navigate(['/users']);
    }
  }
  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(() => {
      // navigate to the home page or some other page after a successful login
      this.router.navigate(['/users']);
    });
  }
  isLoggedIn = !!localStorage.getItem('token');
  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }

setValue() {
  this.loginForm.patchValue(
    {
      email: 'eve.holt@reqres.in',
    password:'cityslicka'
  }  
    );
}
}

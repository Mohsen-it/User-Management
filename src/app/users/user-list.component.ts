import { Component, OnInit } from '@angular/core';
import { DataService } from './list-users.service';
import { AuthService } from '../login/localStorageService';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { imageReducer } from './user.Reducer';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UsersList implements OnInit {
  users: any;
  user: any;
  p: number = 1;
  total: number = 0;
  id!: number;
  imageShow!: boolean
  constructor(
    private userService: DataService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private translate: TranslateService,
    private store: Store<any>) { }

  isLoggedIn = !!localStorage.getItem('token');

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.getUsers();

    this.store.select('User').subscribe(user => {
     
      if (user)
      {
        this.imageShow = user.count.hideAndShowImage//علي حركات يا عيني يا عين
    }
    });

  }
  getUsers() {
    this.userService.getUsers(this.p)
      .subscribe((response: any) => {
        this.users = response.data
        this.total = response.total;
      });
  }
  pageChangeEvent(event: number) {
    this.p = event;
    this.getUsers();
  }
  viewDetails(id: number) {
    this.router.navigate([`/users/${id}`]);
  }
  createUser() {
    this.router.navigate([`/create`])

  }
  language(lang: string) {
    this.translate.setDefaultLang(lang);
  }
  toggleUsersImage() {
    this.store.dispatch(
      {
        type: '[User] hide and show Image'              
      }
    )
  
  }

}


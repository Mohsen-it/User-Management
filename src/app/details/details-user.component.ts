import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../login/localStorageService';

// @Component({
//   selector: 'app-user-details',
//   templateUrl: './details-user.component.html',
//   styleUrls: ['./details-user.component.css'],
//   inputs: ['user'],
// })
@Component({
  selector: 'app-user-details',
templateUrl:'details-user.component.html',
styleUrls:['details-user.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;
res:any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.http.get(`https://reqres.in/api/users/${id}`).subscribe((response:any) => {
      this.user = response['data'];
    });
  }
  deleteUser() {
    const id = this.route.snapshot.params['id'];
    console.log(id)
    this.http.delete(`https://reqres.in/api/users/${id}`).subscribe((response) => {
      console.log('response : '+response);
    });
  }
}




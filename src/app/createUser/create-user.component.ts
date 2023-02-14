import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
templateUrl:'create-user.component.html',
styleUrls:['create-user.component.css']

})
export class CreateUserComponent {
  username!: string;
  job!: string;
  constructor(private http: HttpClient) {}
   
  createUser() {
   const data = {
      username: this.username,
      job: this.job,
    };
   this.http.post('https://reqres.in/api/users', data).subscribe((response) => {
      console.log(response);
      
    });
  }
}

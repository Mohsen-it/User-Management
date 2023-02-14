import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }
  private url = 'https://reqres.in/api/users';
  getUsers(page: number){
    return this.http.get(this.url + '?page=' + page);
  }
  // getUser(){
  //   let id=Number(this.route.paramMap.get('id'));
  //   console.log(id);
  // }
  }
  

  


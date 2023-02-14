import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    return this.http.post<{ token: string }>('https://reqres.in/api/login', {
      email,
      password
    }).pipe(tap((response:any) =>
     {
        localStorage.setItem('token', response.token);
      })
    );
    
  }
  logout() {
    localStorage.removeItem('token');
  }
 
  }
  


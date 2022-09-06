import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entity/user';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl : string = '';
  signUpUrl : string = '';

  constructor(private http : HttpClient) { 

    this.loginUrl = "http://localhost:8081/auth/login";
    this.signUpUrl = "http://localhost:8081/auth/register";
  }

  login(user : User) : Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }

  signUp(user : User) : Observable<any> {
    return this.http.post<any>(this.signUpUrl, user);
  }
}

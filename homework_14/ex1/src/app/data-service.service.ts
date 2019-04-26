import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const HOST_URL = "http://localhost:3000/api/";

import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap,of  } from 'rxjs/operators';

const JWT_KEY="JWT_KEY";
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

 


    emailValidator(): AsyncValidatorFn {
      return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
        return of("result")
          .pipe(
            map(res => {
                return { 'emailExists': true};
            })
          );
      };

  }
  login(username, password){
    let login = this.http.post(`${HOST_URL}login/`,{username:username, password:password});
    login.subscribe((data)=>{
      localStorage.setItem(JWT_KEY, data["openId"]);
    });
    return login;
  }
  signup(data){
    return this.http.post(`${HOST_URL}signup/`,data);
  }
  getToken(){
    return localStorage.getItem(JWT_KEY);
  }
  getProtected(){
    return  this.http.get(`${HOST_URL}protected/`);
  }
}

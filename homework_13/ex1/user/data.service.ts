import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http:HttpClient) {

    if(!localStorage.getItem('data')){
      http.get('https://randomuser.me/api/?results=10').subscribe( 
        (data:any) => { 
          localStorage.setItem("data",JSON.stringify(data.results));
        }
        
      );

    }
  }

  public getCachedData():Array<any>{
    return JSON.parse (localStorage.getItem('data'));
   }



}

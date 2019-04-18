import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector:"user",
    templateUrl:'./user.html'

})
export class UserComponent{
    cacheData:any;

    constructor(private service:DataService){
        this.cacheData = service.getCachedData();
    }
  
} 
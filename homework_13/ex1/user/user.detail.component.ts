import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:"user-detail",
    templateUrl:'./user.detail.html'
})
export class UserDetailComponent implements OnInit{

    user:any;

    constructor(private service:DataService, private activeRoute:ActivatedRoute){

    }

    ngOnInit():void{
        
    } 

    ngDoCheck():void{
        let id;
        this.activeRoute.params.subscribe( (params) => id = params['id'] );

        this.user = this.service.getCachedData().filter ( (data)=> {
            return data.login.uuid === id ;
           })[0];

    }

}
import { CanActivate,ActivatedRouteSnapshot,
    RouterStateSnapshot,UrlTree, Router } from '@angular/router';
    import {Observable}  from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()    
export class CheckGuard implements CanActivate{

    constructor( private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log('aa ' + route.params['id'])
           

        if(  route.params['id'].length > 10){
            
            return true;
        }else{
            this.router.navigate(['/error']);
            return false;
        }
        
    }
    

}
import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user.detail.component';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CheckGuard } from './checkguard.service';


const ROUTES : Routes = [
    {path:'users/:id',component:UserDetailComponent,canActivate:[CheckGuard]},
    {path:'users',component:UserComponent}];
  
@NgModule({
    declarations:[UserDetailComponent,UserComponent],
    exports:[UserComponent],
    imports:[CommonModule,RouterModule.forChild(ROUTES)],
    bootstrap:[UserComponent],
    providers:[CheckGuard]
})
export class UserModule{


}
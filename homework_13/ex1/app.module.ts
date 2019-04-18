import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router'
import { UserModule } from './user/user.module';
import { CheckGuard } from './user/checkguard.service';
import { ErrorComponent } from './error/error.component';


const ROUTES : Routes = [
  {path:'users',loadChildren:'./user/users.module#UserModule'},
  {path:'error',component:ErrorComponent}];
  
@NgModule({
  declarations: [
    AppComponent,ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    RouterModule.forRoot(ROUTES)  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }

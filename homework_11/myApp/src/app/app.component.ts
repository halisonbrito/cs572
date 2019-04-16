import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'myApp';
  counter:number = 10;

  updateCounter(e):void{
    this.counter = e;
  }

}

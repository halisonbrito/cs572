import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
      <div> Counter Component  <input type="submit" value="-" (click)="clickMinus()"> 
        {{counterValue}}
      <input type="submit" value="+" (click)="clickPlus()">  </div>
  `
})
export class CounterComponent implements OnInit {

  @Input()
  counter:number;

  counterValue:number;

  @Output()
  counterChange:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.counterValue = this.counter;
  }

 
  clickPlus():void{
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  clickMinus():void{
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }


}

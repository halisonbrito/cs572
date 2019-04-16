import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

   elements:string[] = ["Value1","Value2","Value3","Value4","Value5"];

  constructor() { }

  ngOnInit() {
  }

}

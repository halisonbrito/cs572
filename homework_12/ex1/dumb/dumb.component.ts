import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dumb',
  template: ` <li>
      {{value}}
  </li>`,
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent implements OnInit {

  @Input()
  value:String;

  constructor() { }

  ngOnInit() {
  }

}

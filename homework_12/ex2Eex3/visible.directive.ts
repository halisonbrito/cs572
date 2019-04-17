import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class VisibleDirective implements OnInit {
  @Input() isVisible: String;

  constructor(private element:ElementRef,private renderer2:Renderer2) {
  }

  ngOnInit():void{
    if(this.isVisible == "true")
        this.renderer2.setStyle(this.element.nativeElement,'display','block');
    else
      this.renderer2.setStyle(this.element.nativeElement,'display','none');
  }

}

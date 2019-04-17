import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {

  size:number = 15;

  constructor(private element:ElementRef,private renderer2:Renderer2) { }

  @HostListener('dblclick')
  doubleClicked():void{
    this.size=this.size +2;
    this.renderer2.setStyle(this.element.nativeElement,'font-size',this.size+'px');
  }

}

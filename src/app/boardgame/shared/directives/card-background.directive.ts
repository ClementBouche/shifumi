import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCardBackground]'
})
export class CardBackgroundDirective implements OnInit {

  @Input('appCardBackground') background: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}

  ngOnInit() {
    const strUrl = 'url(' + this.background + ')';
    console.log(strUrl);
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundImage', strUrl);
  }

}

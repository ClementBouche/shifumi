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
    if (!this.background || this.background == '') {
      return;
    }
    const strUrl = 'url(' + this.background + ')';
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundImage', strUrl);
  }

}

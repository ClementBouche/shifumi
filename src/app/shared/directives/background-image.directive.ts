import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundImage]'
})
export class BackgroundImageDirective implements OnInit {

  @Input('appBackgroundImage') background: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}

  ngOnInit() {
    if (!this.background || this.background == '') {
      return;
    }
    // TODO : sanitize URL ???
    const strUrl = 'url(' + this.background + ')';
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundImage', strUrl);
  }

}

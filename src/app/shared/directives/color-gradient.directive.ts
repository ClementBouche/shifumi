import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appColorGradient]'
})
export class ColorGradientDirective {

  @Input('appColorGradient') gradient: string[];

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}

  ngOnInit() {
    if (!this.gradient || this.gradient.length < 2) {
      return '';
    }
    // background: linear-gradient(217deg,#ccc, #888);;
    const strStyle = `linear-gradient(217deg, ${this.gradient[0]}, ${this.gradient[1]})`;
    this.renderer.setElementStyle(this.el.nativeElement, 'background', strStyle);
    const strStyle2 = `${this.gradient[2]}`;
    this.renderer.setElementStyle(this.el.nativeElement, 'color', strStyle2);
  }

}

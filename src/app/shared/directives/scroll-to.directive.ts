import { Directive, Input, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {

  @Input('appScrollTo') target: string;

  @HostListener('click') onMouseClick() {
    const element = document.getElementById(this.target);
    if (!element) {
      return;
    }
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}

  ngOnInit() {
  }

}

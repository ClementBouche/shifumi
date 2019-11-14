import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReactiveTile]'
})
export class ReactiveTileDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'app-custom-tile');
  }

}

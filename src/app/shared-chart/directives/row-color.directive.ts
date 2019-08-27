import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRowColor]'
})
export class RowColorDirective implements OnInit {

  @Input() appRowColor: number;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    if (this.appRowColor >= 100) {
      return this.elementRef.nativeElement.classList.add('yellow');
    }
    if (this.appRowColor >= 25) {
      return this.elementRef.nativeElement.classList.add('green');
    }
    if (this.appRowColor >= 10) {
      return this.elementRef.nativeElement.classList.add('teal');
    }
    if (this.appRowColor >= 5) {
      return this.elementRef.nativeElement.classList.add('aqua');
    }
  }

}

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBoardgameNote]'
})
export class BoardgameNoteDirective implements OnInit {

  @Input('appBoardgameNote') value: number;

  constructor(
    private el: ElementRef,
  ) { }

  ngOnInit() {
    if (!this.value) {
      return;
    }
    const str = this.value.toFixed(1);
    this.el.nativeElement.innerHTML = str;
  }

}

import { Directive, Input, ElementRef, Sanitizer, SimpleChanges, OnChanges, SecurityContext } from '@angular/core';

@Directive({
  selector: '[appSafeHtml]'
})
export class SafeHtmlDirective implements OnChanges {

  @Input() appSafeHtml: string;

  constructor(
    private elementRef: ElementRef,
    private sanitizer: Sanitizer
  ) {}

  ngOnChanges(changes: SimpleChanges): any {
    if ('appSafeHtml' in changes) {
      this.elementRef.nativeElement.innerHTML =
        this.sanitizer.sanitize(SecurityContext.HTML, this.appSafeHtml);
    }
  }

}

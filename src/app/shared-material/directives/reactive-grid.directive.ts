import { Directive, ElementRef, ChangeDetectorRef, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[appReactiveGrid]'
})
export class ReactiveGridDirective {

  media: string;

  @Input() cols: number;

  @Input() gutterSize: string;

  constructor(
    private el: ElementRef,
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.defineBreakpoints();
    console.log('on init', this.cols, this.gutterSize);
  }

  private updateCols() {
    this.cols = this.media === 'large' ? 12 : this.media === 'medium' ? 8 : 4;
  }

  private updateGutterSize() {
    this.gutterSize = this.media === 'large' ? '12px' : this.media === 'medium' ? '12px' : '8px';
  }

  private updateGrid(media: string) {
    this.media = media;
    ['small', 'medium', 'large'].forEach((value) => {
      if (value === media) {
        this.el.nativeElement.classList.add(value);
      } else {
        this.el.nativeElement.classList.remove(value);
      }
    })

    this.updateCols();
    this.updateGutterSize();
    this.el.nativeElement.setAttribute('cols', this.cols);
    console.log('updateGrid', this.media, this.cols, this.gutterSize);
    this.cd.markForCheck();
  }

  private defineBreakpoints() {
    // width < 600
    this.breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe((result) => {
      if (result.matches) {
        this.updateGrid('small');
      }
    });

    // width 600 - 1280
    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.Medium
    ]).subscribe((result) => {
      if (result.matches) {
        this.updateGrid('medium');
      }
    });

    // width > 1280
    this.breakpointObserver.observe([
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((result) => {
      if (result.matches) {
        this.updateGrid('large');
      }
    });
  }

}

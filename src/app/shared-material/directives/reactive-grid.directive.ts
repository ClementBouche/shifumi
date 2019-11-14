import { Directive, ElementRef, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

const GRID_LAYOUTS = [{
    name: 'app-reactive-grid-small',
    cols: 4,
    gutterSize: '8px'
  },{
    name: 'app-reactive-grid-medium',
    cols: 8,
    gutterSize: '12px'
  },{
    name: 'app-reactive-grid-large',
    cols: 12,
    gutterSize: '12px'
}];

@Directive({
  selector: '[appReactiveGrid]'
})
export class ReactiveGridDirective {

  @Input() cols: number;
  @Input() gutterSize: string;

  @Output() colsChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() gutterSizeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit() {
    this.defineBreakpoints();
  }

  private defineBreakpoints() {
    // width < 600
    this.breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe((result) => {
      if (result.matches) {
        this.updateGrid('app-reactive-grid-small');
      }
    });

    // width 600 - 1280
    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.Medium
    ]).subscribe((result) => {
      if (result.matches) {
        this.updateGrid('app-reactive-grid-medium');
      }
    });

    // width > 1280
    this.breakpointObserver.observe([
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((result) => {
      if (result.matches) {
        this.updateGrid('app-reactive-grid-large');
      }
    });
  }

  private updateGrid(layoutName: string) {
    GRID_LAYOUTS.forEach((l) => {
      this.renderer.removeClass(this.el.nativeElement, l.name);
    });

    // class name
    const layout = GRID_LAYOUTS.find((layout) => layout.name === layoutName);
    this.renderer.addClass(this.el.nativeElement, layout.name)

    // cols
    this.cols = layout.cols;
    this.colsChange.emit(this.cols);

    // gutter size
    this.gutterSize = layout.gutterSize;
    this.gutterSizeChange.emit(this.gutterSize);
  }

}

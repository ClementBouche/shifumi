import { Component, OnInit, ChangeDetectorRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, AfterViewChecked {

  isSmallScreen: boolean = false;

  isMediumScreen: boolean = false;

  isLargeScreen: boolean = false;

  get cols() {
    return this.isLargeScreen ? 12 : this.isMediumScreen ? 8 : 4;
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.defineBreakpoints();
  }

  ngAfterViewChecked() {
    this.defineBreakpoints();
  }

  private defineBreakpoints() {
    // width < 600
    this.breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe((result) => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
      this.cd.markForCheck();
    });

    // width 600 - 1280
    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.Medium
    ]).subscribe((result) => {
      if (result.matches) {
        this.isMediumScreen = true;
      } else {
        this.isMediumScreen = false;
      }
      this.cd.markForCheck();
    });

    // width > 1280
    this.breakpointObserver.observe([
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((result) => {
      if (result.matches) {
        this.isLargeScreen = true;
      } else {
        this.isLargeScreen = false;
      }
      this.cd.markForCheck();
    });
  }

}

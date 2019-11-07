import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css'],
})
export class GridItemComponent implements OnInit {

  @Input() colspan: number;

  @Input() colrow: number;

  isSmallScreen: boolean = false;

  isMediumScreen: boolean = false;

  isLargeScreen: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
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

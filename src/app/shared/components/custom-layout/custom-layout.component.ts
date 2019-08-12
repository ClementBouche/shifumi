import { Component, OnInit, AfterContentInit, ContentChildren, QueryList, Input } from '@angular/core';
import { LayoutNavComponent } from '../layout-nav/layout-nav.component';
import { LayoutSideComponent } from '../layout-side/layout-side.component';

@Component({
  selector: 'app-custom-layout',
  template: `
    <div class="layout" [style.padding]="padding">
      <div class="nav">
        <ng-content select="app-layout-nav"></ng-content>
      </div>
      <div class="content">
        <ng-content></ng-content>
      </div>
      <div class="side">
        <ng-content select="app-layout-side"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./custom-layout.component.css']
})
export class CustomLayoutComponent implements OnInit, AfterContentInit {

  @Input() padding: string = "30px 24px 0px 24px";

  // nav component
  @ContentChildren(LayoutNavComponent) navs: QueryList<LayoutNavComponent>;

  // side component
  @ContentChildren(LayoutSideComponent) sides: QueryList<LayoutSideComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // this.navs.forEach((instance) => {});
    // this.sides.forEach((instance) => {});
  }

}

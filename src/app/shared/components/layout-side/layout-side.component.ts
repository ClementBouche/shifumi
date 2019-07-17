import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-side',
  template: `
    <ng-content></ng-content>
  `,
  styles: [``]
})
export class LayoutSideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-nav',
  template: `
    <ng-content></ng-content>
  `,
  styles: [``]
})
export class LayoutNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-banner',
  template: `
    <div class="app-title-banner">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .app-title-banner {
      border-radius: 10px 10px 0px 0px;
      padding: 5px;
      background-color: rgb(248, 231, 198);
      color: rgb(251, 140, 0);
    }
  `]
})
export class TitleBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

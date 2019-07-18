import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-shortcut',
  template: `
    <div class="shortcuts">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .shortcuts {
      display: flex;
      flex-direction: column;
      margin-left: 2.0em;
      padding-left: 5px;
      border-left: 1px solid #111;
    }
  `]
})
export class PageShortcutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

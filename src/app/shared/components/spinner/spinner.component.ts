import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="marge">
      <mat-spinner></mat-spinner>
    </div>
  `,
  styles: [`
    .marge {
      padding-top: 10px;
    }
    .marge .mat-spinner {
      margin: auto;
    }
  `]
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

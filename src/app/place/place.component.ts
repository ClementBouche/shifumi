import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  template: `
    <app-custom-layout>
      <router-outlet></router-outlet>
    </app-custom-layout>
  `,
  styles: [``]
})
export class PlaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {

  actions: string[] = ['delete', 'edit'];

  constructor() { }

  ngOnInit() {
  }

  doAction(actionName: string) {
    console.log({actionName});
  }

}

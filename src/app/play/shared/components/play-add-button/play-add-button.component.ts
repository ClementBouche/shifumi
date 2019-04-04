import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-play-add-button',
  templateUrl: './play-add-button.component.html',
  styleUrls: ['./play-add-button.component.css']
})
export class PlayAddButtonComponent implements OnInit {

  @Input() boardgameId: String;

  route: String;

  constructor() { }

  ngOnInit() {
    this.route = '/play/add';
    if (this.boardgameId) {
      this.route += '/' + this.boardgameId;
    }
  }

}

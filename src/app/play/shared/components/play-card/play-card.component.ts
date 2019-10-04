import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Play } from '../../model/play.model';

@Component({
  selector: 'app-play-card',
  templateUrl: './play-card.component.html',
  styleUrls: ['./play-card.component.css']
})
export class PlayCardComponent implements OnInit {

  @Input() play: Play;

  @Input() fromDate: string = 'true';

  @Output() headerClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  dateFormat: string;

  constructor() { }

  ngOnInit() {
    this.dateFormat = this.fromDate == 'true' ? 'from' : 'humanize';
  }

  headerClick() {
    this.headerClicked.emit(true);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() dates;

  @Output() dateSelected : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  displayDate(date) {
    const calendar = moment(date, 'YYYY-MM-DD').locale('fr').format('MMMM YYYY');
    return calendar;
  }

  selectDate($event) {
    this.dateSelected.emit($event);
  }

}

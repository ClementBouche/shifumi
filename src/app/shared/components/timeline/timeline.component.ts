import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() dates: string[];

  // default format 'YYYY-MM-DD'
  @Input() format: string = 'YYYY-MM-DD';

  @Output() dateSelected : EventEmitter<any> = new EventEmitter<any>();

  chronological: boolean = true;

  constructor() { }

  ngOnInit() {
    if (this.chronological) {
      this.dates = this.sort(this.dates);
    }
  }

  displayDate(date) {
    const calendar = moment(date, this.format).locale('fr').format('MMMM YYYY');
    return calendar;
  }

  selectDate($event) {
    this.dateSelected.emit($event);
  }

  private sort(dates: string[]) {
    return dates.sort().reverse();
  }

}

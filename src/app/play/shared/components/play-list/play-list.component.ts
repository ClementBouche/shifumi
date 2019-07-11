import { Component, OnInit, ChangeDetectorRef, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { Play } from '../../model/play.model';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit, OnChanges {

  @Input() plays: Play[];

  @Input() dateSeparatorMode: boolean = false;

  playsByDate: any[];

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log(this.dateSeparatorMode)
    if (this.dateSeparatorMode) {
      this.playsByDate = this.sortByDate(this.plays);
    }
  }

  ngOnChanges() {
    if (this.dateSeparatorMode) {
      this.playsByDate = this.sortByDate(this.plays);
    }
  }

  view(playid: string) {
    this.router.navigate(['play', playid]);
  }

  sortByDate(plays: Play[]) {
    const playsByDate = plays.reduce((currentValue, play) => {
      const date = moment(play.date, 'YYYY-MM-DD').format('YYYY-MM');
      const calendar = moment(play.date, 'YYYY-MM-DD').locale('fr').format('MMMM YYYY');

      if (currentValue.length == 0) {
        currentValue.push({
          date: date,
          calendar: calendar,
          plays: [play]
        });
        return currentValue;
      }

      const index = currentValue.findIndex((playsAtDate) => playsAtDate.date === date);
      if (index !== -1) {
        currentValue[index].plays.push(play);
      } else {
        currentValue.push({
          date: date,
          calendar: calendar,
          plays: [play]
        });
      }

      return currentValue;
    }, []);

    return playsByDate;
  }

}

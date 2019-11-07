import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ShifumiEvent } from '../shared/model/shifumi-event.model';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  shifumiEvent$: Observable<ShifumiEvent>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.shifumiEvent$ = this.route.data.pipe(
      map((data: {shifumiEvent: ShifumiEvent}) => data.shifumiEvent)
    );
  }

}

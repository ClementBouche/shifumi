import { Component, OnInit, Input } from '@angular/core';

import { ShifumiEvent } from '../../model/shifumi-event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() shifumiEvent: ShifumiEvent;

  constructor() { }

  ngOnInit() {
  }

}

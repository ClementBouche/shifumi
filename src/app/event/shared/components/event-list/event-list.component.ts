import { Component, OnInit, Input } from '@angular/core';
import { ShifumiEvent } from '../../model/shifumi-event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  @Input() shifumiEvents: ShifumiEvent[];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styles: [`
    .container {
      max-height: 400px;
      overflow: auto;
    }
    table {
      width: 100%;
    }
  `]
})
export class BaseTableComponent implements OnInit {

  @Input() tableData: any;

  @Input() displayedColumns: string[] = [
    'id', 'boardgame', 'player', 'place', 'count', 'win_rate'
  ];

  constructor() { }

  ngOnInit() {
  }

}

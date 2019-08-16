import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  template: `
    <ng-container *ngIf="accordion != 'true' else accordionT">
      <h4>{{ title }}</h4>
      <ng-content select=".content"></ng-content>
    </ng-container>
    <ng-template #accordionT>
      <mat-accordion>
        <mat-expansion-panel class="custom-panel" expanded="true">
          <mat-expansion-panel-header><h4>{{ title }}</h4></mat-expansion-panel-header>
          <ng-content select=".accordion"></ng-content>
        </mat-expansion-panel>
      </mat-accordion>
    </ng-template>
    <mat-divider></mat-divider>
  `,
  styles: [`
    .custom-panel .mat-expansion-panel-body, .mat-expansion-panel-body {
      padding: 0;
    }
    .mat-expansion-panel.custom-panel {
      box-shadow: none;
      background: inherit;
    }
  `]
})
export class SearchFilterComponent implements OnInit {

  @Input() title: string;

  @Input() accordion: string = 'false';

  constructor() { }

  ngOnInit() {
  }

}

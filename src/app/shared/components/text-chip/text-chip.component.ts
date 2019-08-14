import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-chip',
  template: `
    <mat-chip-list>
      <mat-chip class="app-text-chip allow-overflow mat-elevation-z6" 
          [color]="color"
          [style.backgroundColor]="color"
          [matBadge]="chipBadge"
          selectable="false" selected>
        <ng-content></ng-content>
      </mat-chip>
    </mat-chip-list>
  `,
  styles: [`
    .app-text-chip {
      font-weight: bold;
    }
    .allow-overflow {
      overflow: inherit;
    }
  `]
})
export class TextChipComponent implements OnInit {

  @Input() color: string = 'primary';

  @Input() chipBadge: number;

  constructor() { }

  ngOnInit() {
  }

}

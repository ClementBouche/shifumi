import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-chip',
  template: `
    <mat-chip-list>
      <mat-chip class="app-text-chip allow-overflow" [class.mat-elevation-z6]="!flat" 
          [color]="color"
          [style.backgroundColor]="color"
          [matBadge]="chipBadge"
          selectable="false" selected>
        <ng-content></ng-content>
      </mat-chip>
    </mat-chip-list>
  `,
  styles: [`
  `]
})
export class TextChipComponent implements OnInit {

  @Input() color: string;

  @Input() chipBadge: number;

  @Input() flat: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}

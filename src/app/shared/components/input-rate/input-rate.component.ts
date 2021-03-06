import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-rate',
  templateUrl: './input-rate.component.html',
  styleUrls: ['./input-rate.component.css']
})
export class InputRateComponent implements OnInit {

  @Input() rate: number;

  @Input() disabled: boolean = false;

  @Output() rateChanged: EventEmitter<number> = new EventEmitter<number>();

  mode: string = 'view';

  rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit() {
  }

  switchMode() {
    if (this.disabled) {
      return;
    }
    if (this.mode === 'view') {
      this.mode = 'edit';
    } else {
      this.mode = 'view';
    }
  }

  setRate(value: number) {
    if (value === this.rate) {
      this.rate = null;
    } else {
      this.rate = value;
    }
    this.rateChanged.emit(this.rate);
    this.switchMode();
  }

  getRateColor(seuil: number) {
    const color = this.rate >= seuil ? 'accent' : '';
    return color;
  }

  getTooltip() {
    return this.rate ? 'Note : ' + this.rate : 'Pas de note';
  }

  getIcon(seuil: number) {
    return this.rate >= seuil ? 'star' : 'star_border';
  }

}

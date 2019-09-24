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

  constructor() { }

  ngOnInit() {
  }

  setRate(value: number) {
    if (value === this.rate) {
      this.rate = value - 1;
    } else if (this.rate === value - 1) {
      this.rate = null;
    } else {
      this.rate = value;
    }
    this.rateChanged.emit(this.rate);
  }

  getRateColor(seuil: number) {
    const color = this.rate >= seuil ? 'accent' : '';
    return color;
  }

  getTooltip() {
    return this.rate ? 'Note : ' + this.rate : 'Pas de note';
  }

  getIcon(seuil: number) {
    return this.rate >= seuil ? 'star' : this.rate + 1 === seuil ? 'star_half' : 'star_border';
  }

}

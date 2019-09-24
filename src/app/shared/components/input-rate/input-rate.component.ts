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
    this.rate = value;
    this.rateChanged.emit(this.rate);
  }

  getRateColor(seuil: number) {
    const color = this.rate >= seuil ? 'accent' : '';
    return color;
  }

}

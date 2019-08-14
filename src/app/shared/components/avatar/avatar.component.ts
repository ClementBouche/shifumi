import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  // name
  @Input() name: string;

  // if no color should be generated
  @Input() colors;

  // if no image use name & color
  @Input() image;

  // size (px) : 24x24, 36x36, 72x72
  @Input() size;

  // circle / square
  @Input() shape;

  gradient = ['#777', '#aaa'];

  private randomGradients = [
    ['#001f3f', '#001f3f', 'hsla(210, 100%, 75%, 1.0)'],
    ['#0074D9', '#0074D9', 'hsla(208, 100%, 85%, 1.0)'],
    ['#7FDBFF', '#7FDBFF', 'hsla(197, 100%, 20%, 1.0)'],
    ['#39CCCC', '#39CCCC', 'hsla(153, 43%, 15%, 1.0)'],
    ['#3D9970', '#3D9970', 'hsla(127, 63%, 15%, 1.0)'],
    ['#01FF70', '#01FF70', 'hsla(146, 100%, 20%, 1.0)'],
    ['#FFDC00', '#FFDC00', 'hsla(52, 100%, 20%, 1.0)'],
    ['#FF851B', '#FF851B', 'rgb(128, 6, 0)'],
    ['#FF4136', '#FF4136', 'rgb(102, 48, 0)'],
    ['#85144b', '#85144b', 'rgb(235, 122, 177)'],
    ['#F012BE', '#F012BE', 'rgb(101, 6, 79)'],
    ['#B10DC9', '#B10DC9', 'rgb(239, 169, 249)'],
    ['#111111', '#111111', 'rgb(221, 221, 221)'],
    ['#AAAAAA', '#AAAAAA', 'black'],
    ['#DDDDDD', '#DDDDDD', 'black'],
  ];

  constructor() { }

  ngOnInit() {
    if (!this.name || this.name === '') {
      this.name = '?';
    }
    if (!this.size) {
      this.size = 36 + 'px';
    } else {
      this.size = `${this.size}px`;
    }
    if (this.colors && this.colors.length > 2) {
      this.gradient = this.colors;
    } else {
      this.gradient = this.randomGradient;
    }
  }

  get shortName(): string {
    if (this.name) {
      return this.name.split(' ').reduce((str, part) => str += part[0], '');
    }
  }

  get randomGradient() {
    const index = Math.floor(Math.random() * this.randomGradients.length);
    return this.randomGradients[index];
  }

}

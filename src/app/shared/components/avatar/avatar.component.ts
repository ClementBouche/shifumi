import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  // name
  @Input() name;

  // if no color should be generated
  @Input() color;

  // if no image use name & color
  @Input() image;

  // size (px) : 24x24, 36x36, 72x72
  @Input() size;

  // circle / square
  @Input() shape;

  gradient = ['#777', '#aaa'];

  private randomGradients = [
    ['#ec407a', '#ec407a', 'white'],
    ['#673ab7', '#673ab7', 'white'],
    ['#00bcd4', '#00bcd4', 'white'],
    ['#2196f3', '#2196f3', 'white'],
    ['#3f51b5', '#3f51b5', 'white'],
  ];

  constructor() { }

  ngOnInit() {
    if (!this.size) {
      this.size = 36 + 'px';
    } else {
      this.size = `${this.size}px`;
    }
    if (!this.color || this.color === '') {
      this.gradient = this.randomGradient;
    } else {
      this.gradient = [this.color, this.color, 'white'];
    }
  }

  get shortName(): string {
    if (this.name) {
      return this.name.substring(0, 3);
    }
  }

  get randomGradient() {
    const index = Math.floor(Math.random() * this.randomGradients.length);
    return this.randomGradients[index];
  }

}

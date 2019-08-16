import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-scroll-top',
  template: `
    <div class='snack-style fixed-corner' [class.opacity]='hide'>
      <span>Retour en haut</span>
      <button mat-button color='accent' (click)='scrollTo()'>Ok</button>
    <div>
  `,
  styles: [`
    .snack-style {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 20px;
      opacity: 1;
      color: rgba(255, 255, 255, 0.7);
      background: #323232;
      padding: 7px 10px 7px 30px;
      border-radius: 6px;
    }
    .snack-style.opacity {
      opacity: 0;
      transition: 0.5s ease-in;
      transform: translateY(100%);
    }
    .fixed-corner {
      position: fixed;
      bottom: 2%;
      z-index: 10;
      left: 50%;
      transform: translateX(-50%);
    }
  `]
})
export class InputScrollTopComponent implements OnInit {

  hide: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  scrollTo() {
    const element = document.getElementById('top-page');
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

}

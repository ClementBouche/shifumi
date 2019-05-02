import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

  @Input() listButton: String[];

  @Output() actionTriggered: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    if (this.listButton) {
      console.log(this.listButton);
    }
  }

  action(action: string) {
    this.actionTriggered.emit(action);
  }

}

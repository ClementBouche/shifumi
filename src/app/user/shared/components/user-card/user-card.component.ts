import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user.model';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  @Input() actions: {name: string, title: string, color: string}[] = [
    {name: 'update', title: 'Mettre à jour', color: 'accent'},
    {name: 'sync', title: 'Synchroniser', color: 'accent'},
    {name: 'delete', title: 'Supprimer', color: 'error'},
  ];

  @Output() actionTriggered: EventEmitter<string> = new EventEmitter<string>();

  admin: boolean = false;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.admin = this.loginRegisterService.getUser().admin;
  }

  trigger(eventName: string) {
    this.actionTriggered.emit(eventName);
  }

  goPlayer(id: string) {
    this.router.navigate(['/', 'player', id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

import { LoginRegisterService } from '../home/shared/services/login-register.service';
import { UserService } from './shared/services/user.service';

import { User } from './shared/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  actions = [{name: 'update', title: 'Mettre à jour', color: 'accent'}];

  constructor(
    private loginRegisterService: LoginRegisterService,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log('home user');
    this.user = this.loginRegisterService.getUser(); 
  }

  goUpdate() {
    this.router.navigate(['user', 'edit']);
  }

}

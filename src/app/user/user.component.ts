import { Component, OnInit } from '@angular/core';
import { User } from './shared/model/user.model';
import { LoginRegisterService } from '../login/shared/services/login-register.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private loginRegisterService: LoginRegisterService
  ) { }

  ngOnInit() {
    this.user$ = this.loginRegisterService.logginEvent;
  }

}

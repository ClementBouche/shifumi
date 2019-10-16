import { Component, OnInit } from '@angular/core';

import { LoginRegisterService } from '../services/login-register.service';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  connected$: Observable<boolean>;

  constructor(
    private loginRegisterService: LoginRegisterService
  ) { }

  ngOnInit() {
    this.connected$ = this.loginRegisterService.logginEvent.pipe(
      startWith(this.loginRegisterService.isConnect()),
      map((user) => user !== null)
    );
  }

}

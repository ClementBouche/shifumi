import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { LoginService } from './shared/services/login.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private userService: UserService,
    private cd: ChangeDetectorRef,
    private location: Location
  ) { }

  ngOnInit() {
  }

  loggin() {
    if (!this.form.valid) {
      return;
    }
    this.loginService.authenticate(this.form.value.login, this.form.value.password).then((response) => {
      if (this.userService.registerFromAuthentification(response)) {
        this.location.back();
      } else {
        this.message = response.message;
        this.cd.markForCheck();
      }
    });
  }

}

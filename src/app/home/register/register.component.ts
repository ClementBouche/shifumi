import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../shared/services/login.service';
import { User } from 'src/app/user/shared/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  formError: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmed: ['', Validators.required],
      email: ['']
    });
  }

  register() {
    if (!this.form.valid || this.form.value.password !== this.form.value.passwordConfirmed) {
      this.formError = true;
      this.cd.markForCheck();
      return;
    }
    const user = new User();
    user.activated = false;
    user.admin = false;
    user.username = this.form.value.username;
    user.password = this.form.value.username;
    user.email = this.form.value.email;

    this.loginService.register(user).then(() => {
      this.router.navigate(['/']);
    });

  }

}

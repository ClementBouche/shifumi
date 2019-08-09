import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { LoginService } from './shared/services/login.service';
import { UserService } from './shared/services/user.service';
import { Tagable } from '../core/model/tagable.interface';
import { MetadataTagsService } from '../core/services/metadata-tags.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, Tagable {

  form: FormGroup = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  message: string;

  constructor(
    private userService: UserService,
    private metadataTags: MetadataTagsService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private location: Location
  ) { }

  ngOnInit() {
    this.updateTags();
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

  updateTags() {
    this.metadataTags.updateTitle('Shifumi - Connexion');
  }

}

import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../model/user.model';
import { debounceTime, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;

  @Output() userChanged: EventEmitter<User> = new EventEmitter<User>();

  form: FormGroup;

  formError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [this.user.username, Validators.required],
      password: [this.user.password, Validators.required],
      passwordConfirmed: [this.user.password, Validators.required],
      email: [this.user.email]
    });

    this.form.valueChanges.pipe(
      debounceTime(500),
      filter(() => this.form.valid),
      map((value) => this.update())
    );
  }

  update() {
    if (!this.form.valid || this.form.value.password !== this.form.value.passwordConfirmed) {
      this.formError = true;
      this.cd.markForCheck();
      return;
    } 
    this.formError = false;
    this.cd.markForCheck();

    if (this.form.get('username').dirty) {
      this.user.username = this.form.value.username;
    }
    if (this.form.get('password').dirty) {
      this.user.password = this.form.value.password;
    }
    if (this.form.get('email').dirty) {
      this.user.email = this.form.value.email;
    }

    this.userChanged.emit(this.user);
  }

}

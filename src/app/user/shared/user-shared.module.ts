import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserFormComponent } from './components/user-form/user-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AppMaterialModule } from 'src/app/shared/app-material.module';

@NgModule({
  declarations: [
    UserFormComponent,
    UserCardComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppMaterialModule,
    SharedModule,
  ],
  exports: [
    UserFormComponent,
    UserCardComponent,
    UserListComponent,
  ]
})
export class UserSharedModule { }

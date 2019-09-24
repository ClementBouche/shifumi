import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserSharedModule } from './shared/user-shared.module';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserPlayerComponent } from './user-player/user-player.component';

@NgModule({
  declarations: [
    UserComponent,
    UserUpdateComponent,
    UserAdminComponent,
    UserPlayerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
    UserRoutingModule,
    UserSharedModule,
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserSharedModule } from './shared/user-shared.module';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserPlayerComponent } from './user-player/user-player.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PlayerSharedModule } from '../player/shared/player-shared.module';
import { AppMaterialModule } from '../shared/app-material.module';

@NgModule({
  declarations: [
    UserComponent,
    UserUpdateComponent,
    UserAdminComponent,
    UserPlayerComponent,
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
    UserRoutingModule,
    UserSharedModule,
    PlayerSharedModule,
  ]
})
export class UserModule { }

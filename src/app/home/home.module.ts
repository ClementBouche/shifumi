import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material.module';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeRoutingModule } from './home-routing.module';
import { PlaySharedModule } from '../play/shared/play-shared.module';
import { PlayerSharedModule } from '../player/shared/player-shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
    HomeRoutingModule,
    PlaySharedModule,
    PlayerSharedModule
  ]
})
export class HomeModule { }

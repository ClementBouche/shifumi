import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/shared/app-material.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class HomeSharedModule { }

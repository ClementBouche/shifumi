import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material.module';

import { InputCommentComponent } from './components/input-comment/input-comment.component';
import { PaginatedCommentComponent } from './components/paginated-comment/paginated-comment.component';
import { CardCommentComponent } from './components/card-comment/card-comment.component';
import { SafeHtmlDirective } from './diretives/safe-html.directive';

@NgModule({
  declarations: [
    InputCommentComponent,
    PaginatedCommentComponent,
    CardCommentComponent,
    SafeHtmlDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  exports: [
    InputCommentComponent,
    PaginatedCommentComponent,
    CardCommentComponent,
    SafeHtmlDirective,
  ]
})
export class SharedCommentModule { }

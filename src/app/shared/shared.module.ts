import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';

import { AutocompleteSearchInputComponent } from './autocomplete-search-input/autocomplete-search-input.component';

@NgModule({
  declarations: [
    AutocompleteSearchInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  exports: [
    AutocompleteSearchInputComponent
  ]
})
export class SharedModule { }

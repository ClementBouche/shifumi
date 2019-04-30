import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';

import { AutocompleteSearchInputComponent } from './components/autocomplete-search-input/autocomplete-search-input.component';
import { PlayerSearchInputComponent } from './components/player-search-input/player-search-input.component';

@NgModule({
  declarations: [
    AutocompleteSearchInputComponent,
    PlayerSearchInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  exports: [
    AutocompleteSearchInputComponent,
    PlayerSearchInputComponent
  ]
})
export class SharedModule { }

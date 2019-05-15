import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';

import { AutocompleteSearchInputComponent } from './components/autocomplete-search-input/autocomplete-search-input.component';
import { PlayerSearchInputComponent } from './components/player-search-input/player-search-input.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { PlayTimePipe } from './pipes/play-time.pipe';

@NgModule({
  declarations: [
    AutocompleteSearchInputComponent,
    PlayerSearchInputComponent,
    MenuButtonComponent,
    PlayTimePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  exports: [
    AutocompleteSearchInputComponent,
    PlayerSearchInputComponent,
    MenuButtonComponent,
    PlayTimePipe,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './shared/app-material.module';

import { AppComponent } from './app.component';
import { BoardgamePickDialogComponent } from './shared/boardgame-pick-dialog/boardgame-pick-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardgamePickDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
  ],
  entryComponents: [
    BoardgamePickDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

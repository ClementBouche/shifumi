import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './shared/app-material.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { BoardgamePickDialogComponent } from './shared/boardgame-pick-dialog/boardgame-pick-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // entry components
    BoardgamePickDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    SharedModule,
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

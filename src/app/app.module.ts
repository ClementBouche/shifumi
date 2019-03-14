import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppMaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  entryComponents: [
    BoardgamePickDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

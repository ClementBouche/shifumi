import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './shared/app-material.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { BoardgamePickDialogComponent } from './dialogs/boardgame-pick-dialog/boardgame-pick-dialog.component';
import { PlayerPickDialogComponent } from './dialogs/player-pick-dialog/player-pick-dialog.component';
import { AppTokenInterceptor } from './core/interceptors/app-token.interceptor';
import { HomeComponent } from './home/home.component';
import { MatPaginatorIntlFr } from './core/intl/mat-paginator-intl.fr';

const config: SocketIoConfig = {
  url: environment.socketUrl,
  options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // entry components
    BoardgamePickDialogComponent,
    PlayerPickDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    SocketIoModule.forRoot(config),
    SharedModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: HTTP_INTERCEPTORS, useClass: AppTokenInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlFr},
  ],
  entryComponents: [
    BoardgamePickDialogComponent,
    PlayerPickDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { appRouteAnimations } from './core/animation/app-route.animation';

import { UserService } from './login/shared/services/user.service';

import { Boardgame } from './boardgame/shared/model/boardgame.model';
import { User } from './login/model/user.model';
import { MetadataTagsService } from './core/services/metadata-tags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [appRouteAnimations]
})
export class AppComponent implements OnInit, OnDestroy {

  registered: User;

  logSubscription: Subscription;

  constructor(
    private userService: UserService,
    private metadataTagsService: MetadataTagsService,
    private router: Router,
    private snackBar: MatSnackBar,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.metadataTagsService.updateTitle('Shifumi - Accueil');

    this.logSubscription = this.userService.logginEvent.subscribe((user) => {
      this.registered = user;
      if (this.registered) {
        this.welcomeMessage();
      } else {
        this.goodByMessage();
      }
      this.cd.detectChanges();
    });

    // TODO clean that up !
    setTimeout(() => {
      this.userService.registerFromLocalStorage();
    }, 500);
  }

  ngOnDestroy() {
    if (this.logSubscription) {
      this.logSubscription.unsubscribe();
    }
  }

  loggout() {
    this.userService.logout();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  select(boardgame: Boardgame) {
    this.router.navigate(['/', 'boardgame', boardgame.id])
  }

  private welcomeMessage() {
    this.snackBar.open(`Bienvenue ${this.registered.username}`, 'Ok', {
      duration: 5000,
    });
  }

  private goodByMessage() {
    this.snackBar.open('Vous êtes déconnecté', 'Ok', {
      duration: 2000,
    });
  }

}

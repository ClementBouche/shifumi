import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { appRouteAnimations } from './core/animation/app-route.animation';

import { Boardgame } from './boardgame/shared/model/boardgame.model';
import { MetadataTagsService } from './core/services/metadata-tags.service';
import { User } from './user/shared/model/user.model';
import { LoginRegisterService } from './home/shared/services/login-register.service';

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

  loading: boolean = false;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private metadataTagsService: MetadataTagsService,
    private router: Router,
    private snackBar: MatSnackBar,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {

    this.metadataTagsService.updateTitle('Shifumi - Accueil');

    this.router.events.subscribe(
      (event) => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            // at least 500ms waiting
            setTimeout(() => {
              this.loading = false;
              this.cd.markForCheck();
            }, 500);
            // scroll to top
            // document.getElementById('main-content').scrollTo(0, 0);
            break;
          }

          default: {
            break;
          }

        }
      });

    this.logSubscription = this.loginRegisterService.logginEvent.subscribe((user) => {
      this.registered = user;
      if (this.registered) {
        this.welcomeMessage();
      } else {
        this.goodByMessage();
      }
      this.cd.detectChanges();
    });

    // TODO clean that up !
    this.loginRegisterService.registerFromLocalStorage();
  }

  ngOnDestroy() {
    if (this.logSubscription) {
      this.logSubscription.unsubscribe();
    }
  }

  loggout() {
    this.loginRegisterService.logout();
    this.router.navigate(['/']);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  select(boardgame: Boardgame) {
    this.router.navigate(['/', 'boardgame', boardgame.id]);
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

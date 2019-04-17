import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { appRouteAnimations } from './core/animation/app-route.animation';
import { Boardgame } from './boardgame/shared/model/boardgame.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [appRouteAnimations]
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  select(boardgame: Boardgame) {
    this.router.navigate(['/', 'boardgame', boardgame.id])
  }

}

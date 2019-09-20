import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

import { Boardgame } from '../shared/model/boardgame.model';
import { BoardgameService } from '../shared/services/boardgame.service';
import { MetadataTagsService } from 'src/app/core/services/metadata-tags.service';
import { Tagable } from 'src/app/core/model/tagable.interface';
import { PlayService } from 'src/app/play/shared/services/play.service';
import { PlaySearch } from 'src/app/play/shared/model/play-search.model';
import { PlaysPage } from 'src/app/play/shared/model/plays-page.model';
import { Play } from 'src/app/play/shared/model/play.model';
import { User } from 'src/app/user/shared/model/user.model';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';

@Component({
  selector: 'app-boardgame-view',
  templateUrl: './boardgame-view.component.html',
  styleUrls: ['./boardgame-view.component.css']
})
export class BoardgameViewComponent implements OnInit, Tagable {

  boardgame: Boardgame;

  actions: string[] = ['add'];

  allPlays$: Observable<Play[]>;

  lastPlays: Play[];

  user: User;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private boardgameService: BoardgameService,
    private playService: PlayService,
    private metadataTags: MetadataTagsService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.user = this.loginRegisterService.getUser();

    // old way (for historic purpose)
    // this.route.data.subscribe((data: {boardgame: Boardgame}) => {
    //   this.boardgame = data.boardgame;
    //   const playSearch = new PlaySearch();
    //   playSearch.boardgameName = this.boardgame.name;
    //   this.playService.search(playSearch).then((page: PlaysPage) => {
    //     this.plays = page.result;
    //     this.cd.markForCheck();
    //   });
    //   this.cd.markForCheck();
    // });

    // all plays are retrieve for statistics && last plays
    this.allPlays$ = this.route.data.pipe(
      // load bg from data resolver
      map((data: { boardgame: Boardgame }) => this.boardgame = data.boardgame),
      // create new playSearch
      switchMap((bg) => from(this.playService.allBoardgamePlays(bg))),
      map((page: PlaysPage) => {
        this.lastPlays = page.result.slice(0, 5);
        return page.result;
      }),
    );

    this.allPlays$.subscribe();

    this.updateTags();
  }

  import() {
    this.boardgameService.getPreview(this.boardgame.xmlId, false).then((bg) => {
      this.router.navigate(['boardgame', bg.id]);
    });
  }


  updateTags() {
    if (this.boardgame) {
      this.metadataTags.updateTitle('Shifumi - ' + this.boardgame.name);
      this.metadataTags.updateDescription(this.boardgame.name);
      this.metadataTags.updateImage(this.boardgame.image, 200);
    }
  }


  doAction(actionName: string) {
    if (actionName === 'add') {
      this.router.navigate(['/', 'play', 'add', this.boardgame.id]);
    }
  }

  search() {
    this.router.navigate(['/', 'play'], {
      queryParams: {
        boardgame: this.boardgame.name
      }
    });
  }

  viewPeople(name: string) {
    this.router.navigate(['/', 'people', name]);
  }

  searchThematic(name: string) {
    this.router.navigate(['/', 'boardgame'], {
      queryParams: {
        thematics: [name],
        page: 1,
      }
    });
  }

  searchMechanic(name: string) {
    this.router.navigate(['/', 'boardgame'], {
      queryParams: {
        mechanics: [name],
        page: 1,
      }
    });
  }

  scrollToElement(target: string) {
    const element = document.getElementById(target);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

}

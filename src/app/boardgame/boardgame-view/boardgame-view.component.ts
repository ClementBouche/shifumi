import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

@Component({
  selector: 'app-boardgame-view',
  templateUrl: './boardgame-view.component.html',
  styleUrls: ['./boardgame-view.component.css']
})
export class BoardgameViewComponent implements OnInit, Tagable {

  boardgame: Boardgame;

  playsPage$: Observable<PlaysPage>;

  actions: string[] = ['add'];

  constructor(
    private boardgameService: BoardgameService,
    private playService: PlayService,
    private metadataTags: MetadataTagsService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }


  ngOnInit() {
    // more reactive way
    this.route.data
        .pipe(
          // load bg from data resolver
          map((data: { boardgame: Boardgame }) => this.boardgame = data.boardgame),
          // create new playSearch
          map(() => new PlaySearch().byBoardgameName(this.boardgame.name)),
          // search for bg plays
          //switchMap((playSearch) => this.playService.search(playSearch))
          switchMap((playSearch) => this.playsPage$ = from(this.playService.search(playSearch))),
        )
        .subscribe();
        // subscribe for results
        // .subscribe((page: PlaysPage) => {
        //   this.plays = page.result;
        //   this.cd.markForCheck();
        // });

    // old way
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
    if (actionName == 'add') {
      this.router.navigate(['/', 'play', 'add', this.boardgame.id]);
    }
  }

  viewPeople(name: string) {
    this.router.navigate(['/', 'people', name]);
  }

  searchThematic(name: string) {
    this.router.navigate(['/', 'boardgame'], {
      queryParams: {
        thematics: [name],
        page: 1,
        size: 10
      }
    });
  }

  searchMechanic(name: string) {
    this.router.navigate(['/', 'boardgame'], {
      queryParams: {
        mechanics: [name],
        page: 1,
        size: 10
      }
    });
  }

}

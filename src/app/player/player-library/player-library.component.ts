import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { LibraryItem } from 'src/app/user/shared/model/library-item.model';
import { BoardgameSearch } from 'src/app/boardgame/shared/model/boardgame-search.model';
import { BoardgameService } from 'src/app/boardgame/shared/services/boardgame.service';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';
import { Player } from '../shared/model/player.model';
import { UserService } from 'src/app/user/shared/services/user.service';
import { User } from 'src/app/user/shared/model/user.model';

@Component({
  selector: 'app-player-library',
  templateUrl: './player-library.component.html',
  styleUrls: ['./player-library.component.css']
})
export class PlayerLibraryComponent implements OnInit {

  @Input() player: Player;

  userInfo: User = new User();

  boardgames$: Observable<Boardgame[]>;

  viewAll: boolean = false;

  count: number;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private boardgameService: BoardgameService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.search();
  }

  toggleAll() {
    this.viewAll = !this.viewAll;
    this.search();
  }

  search() {
    this.boardgames$ = this.userService.getUserLibrary(this.player.userId).pipe(
      map((library: LibraryItem[]) => {
        // user
        this.userInfo.id = this.player.userId;
        this.userInfo.username = this.player.name;
        this.userInfo.library = library;
        // library search
        const ids = library.filter((item) => item.rating).map((item) => item.boardgame.id)
        this.count = ids.length;
        return new BoardgameSearch().deserialize({
          list_id: ids,
          size: this.viewAll ? library.length : 4
        });
      }),
      switchMap((search) => from(this.boardgameService.search(search))),
      map((page) => page.result)
    );
  }

}

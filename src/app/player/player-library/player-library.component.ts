import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { LibraryItem } from 'src/app/user/shared/model/library-item.model';
import { BoardgameSearch } from 'src/app/boardgame/shared/model/boardgame-search.model';
import { BoardgameService } from 'src/app/boardgame/shared/services/boardgame.service';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';

@Component({
  selector: 'app-player-library',
  templateUrl: './player-library.component.html',
  styleUrls: ['./player-library.component.css']
})
export class PlayerLibraryComponent implements OnInit, OnChanges {

  @Input() owner: string;

  @Input() library: LibraryItem[];

  @Input() editable: boolean = false;

  @Input() rateOnly: boolean = true;

  @Input() showMyRate: boolean = false;

  @Input() size: number;

  boardgames$: Observable<Boardgame[]>;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private boardgameService: BoardgameService
  ) { }

  ngOnInit() {
    if (this.loginRegisterService.isConnect()) {
      this.editable = this.loginRegisterService.getUser().id === this.owner;
    }
  }

  ngOnChanges() {
    if (!this.size) {
      this.size = this.library.length;
    }
    const search = new BoardgameSearch().deserialize({
      // list_id: this.library.filter((item) => item.state === 'owned').map((item) => item.boardgame.id),
      list_id: this.library.filter((item) => item.rating).map((item) => item.boardgame.id),
      // list_id: this.library.map((item) => item.boardgame.id),
      size: this.size
    });
    this.boardgames$ = from(this.boardgameService.search(search)).pipe(
      map((page) => page.result)
    );
  }

}

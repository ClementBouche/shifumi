import { Component, OnInit, Input } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';
import { LibraryService } from 'src/app/user/shared/services/library.service';

import { User } from 'src/app/user/shared/model/user.model';
import { Boardgame } from '../../model/boardgame.model';
import { LibraryItem } from 'src/app/user/shared/model/library-item.model';

@Component({
  selector: 'app-library-tool',
  templateUrl: './library-tool.component.html',
  styleUrls: ['./library-tool.component.css']
})
export class LibraryToolComponent implements OnInit {

  @Input() boardgame: Boardgame;

  @Input() library: LibraryItem[];

  @Input() editable: boolean = false;

  @Input() rateOnly: boolean = false;

  @Input() showMyRate: boolean = false;

  user: User;

  state: string;

  rate: number;

  myRate: number;

  constructor(
    private loginService: LoginRegisterService,
    private libraryService: LibraryService,
  ) { }

  ngOnInit() {
    this.user = this.loginService.getUser();
    if (this.user) {
      this.myRate = this.libraryService.getRate(this.boardgame);
    }

    this.state = this.libraryService.getState(this.boardgame, this.library);

    this.rate = this.libraryService.getRate(this.boardgame, this.library);
  }

  setState(state: string) {
    if (this.state === state) {
      this.state = null;
    } else {
      this.state = state;
    }
    this.libraryService.add(this.boardgame, this.state).pipe(debounceTime(500)).subscribe();
  }

  setRate(value: number) {
    if (this.myRate === value) {
      this.myRate = null;
    } else {
      this.myRate = value;
    }
    this.libraryService.rate(this.boardgame, this.myRate).pipe(debounceTime(500)).subscribe();
  }

  getColor(state: string) {
    return this.state === state ? 'accent' : '';
  }

  getRateColor(seuil: number) {
    let color = this.myRate >= seuil ? 'accent' : '';
    if (this.showMyRate) {
      color = this.myRate === seuil ? 'accent' : 'primary';
    }
    return color;
  }

}

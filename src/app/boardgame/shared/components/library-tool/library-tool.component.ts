import { Component, OnInit, Input } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';
import { LibraryService } from 'src/app/user/shared/services/library.service';

import { User } from 'src/app/user/shared/model/user.model';
import { Boardgame } from '../../model/boardgame.model';

@Component({
  selector: 'app-library-tool',
  templateUrl: './library-tool.component.html',
  styleUrls: ['./library-tool.component.css']
})
export class LibraryToolComponent implements OnInit {

  @Input() boardgame: Boardgame;

  user: User;

  connected: boolean;

  state: string;

  rate: number;

  constructor(
    private loginService: LoginRegisterService,
    private libraryService: LibraryService
  ) { }

  ngOnInit() {
    this.user = this.loginService.getUser();
    this.connected = this.loginService.isConnect();

    this.state = this.libraryService.getState(this.boardgame);

    this.rate = this.libraryService.getRate(this.boardgame);
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
    if (this.rate === value) {
      this.rate = null;
    } else {
      this.rate = value;
    }
    this.libraryService.rate(this.boardgame, this.rate).pipe(debounceTime(500)).subscribe();
  }

  getColor(state: string) {
    return this.state === state ? 'accent' : '';
  }

  getRateColor(seuil: number) {
    const color = this.rate >= seuil ? 'accent' : '';
    return color;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

import { LibraryService } from 'src/app/user/shared/services/library.service';

import { User } from 'src/app/user/shared/model/user.model';
import { Boardgame } from '../../model/boardgame.model';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';

@Component({
  selector: 'app-boardgame-rate',
  templateUrl: './boardgame-rate.component.html',
  styleUrls: ['./boardgame-rate.component.css']
})
export class BoardgameRateComponent implements OnInit {

  @Input() boardgame: Boardgame;

  @Input() user: User;

  rate: number;

  disabled: boolean = false;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private libraryService: LibraryService
  ) { }

  ngOnInit() {
    this.rate = this.libraryService.getRate(this.boardgame, this.user);
    if (!this.loginRegisterService.getUser() || this.loginRegisterService.getUser().id !== this.user.id) {
      this.disabled = true;
    }
  }

  setRate(value: number) {
    this.rate = value;
    this.libraryService.rate(this.boardgame, this.rate).pipe(debounceTime(500)).subscribe();
  }

}

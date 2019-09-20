import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';

import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';
import { LibraryItem } from '../model/library-item.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(
    private register: LoginRegisterService,
    private userService: UserService
  ) { }

  getState(boardgame: Boardgame, library: LibraryItem[] = null) {
    if (library === null) {
      library = this.register.getUser().library;
    }
    const index = library.findIndex((item) => item.boardgame.id === boardgame.id);
    if (index !== -1) {
      return library[index].state;
    }
    return null;
  }

  getRate(boardgame: Boardgame, library: LibraryItem[] = null) {
    if (library === null) {
      library = this.register.getUser().library;
    }
    const index = library.findIndex((item) => item.boardgame.id === boardgame.id);
    if (index !== -1) {
      return library[index].rating;
    }
    return null;
  }

  add(boardgame: Boardgame, state: string) {
    const user = this.register.getUser();
    const index = user.library.findIndex((item) => item.boardgame.id === boardgame.id);
    if (index !== -1) {
      user.library[index].state = state;
    } else {
      const item = new LibraryItem();
      item.boardgame = {
        id: boardgame.id,
        name: boardgame.name
      };
      item.state = state;
      user.library.push(item);
    }
    return this.userService.selfUpdate(user);
  }

  rate(boardgame: Boardgame, rate: number) {
    const user = this.register.getUser();
    const index = user.library.findIndex((item) => item.boardgame.id === boardgame.id);
    if (index !== -1) {
      user.library[index].rating = rate;
      // test remove
      this.remove(user, index);
    } else {
      const item = new LibraryItem();
      item.boardgame = {
        id: boardgame.id,
        name: boardgame.name
      };
      item.rating = rate;
      user.library.push(item);
    }
    return this.userService.selfUpdate(user);
  }

  private remove(user: User, index: number) {
    const item = user.library[index];
    if (item.rating === null && item.state === null) {
      user.library.splice(index, 1);
    }
  }

}

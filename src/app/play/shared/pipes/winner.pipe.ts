import { Pipe, PipeTransform } from '@angular/core';

import { Score } from './../model/score.model';

@Pipe({
  name: 'winner'
})
export class WinnerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value instanceof Array) {
      const score = value.find((sc: Score) => sc.winner);
      if (score) {
        return score.playerName;
      } else {
        return 'Pas de vainqueur';
      }
    }
    return 'Pas de vainqueur';
  }

}

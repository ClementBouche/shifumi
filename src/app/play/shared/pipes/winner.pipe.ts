import { Pipe, PipeTransform } from '@angular/core';

import { Score } from './../model/score.model';

@Pipe({
  name: 'winner'
})
export class WinnerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value instanceof Array) {
      const result = value.filter((sc: Score) => sc.winner).reduce((previousValue, score: Score) => {
        if (previousValue == '') {
          previousValue = score.playerName;
        } else {
          previousValue += ', ' + score.playerName;
        }
        return previousValue;
      }, '');
      if (result != '') {
        return result;
      }
    }
    return 'Pas de vainqueur';
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'playTime'
})
export class PlayTimePipe implements PipeTransform {

  transform(value: any, mode?: string): String {
    if (mode === 'humanize') {
      if (value === 0) {
        return 'moins d\'une heure';
      }
      return moment.duration(value, 'minutes').locale('fr').humanize();
    }

    const hours = Math.floor(moment.duration(value, 'minutes').asHours());
    const minutes = moment.duration(value, 'minutes').minutes();
    let playTime = hours === 0 ? '' : hours + 'h';
    playTime += minutes === 0 ? '' : minutes + 'min';
    return playTime || '0min';
  }

}

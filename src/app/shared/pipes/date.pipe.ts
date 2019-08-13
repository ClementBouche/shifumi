import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'appDate'
})
export class DatePipe implements PipeTransform {

  transform(value: any, mode?: string): String {
    if (mode == 'from') {
      const time = moment.parseZone(value, 'YYYY-MM-DD').locale('fr');
      const now = moment.parseZone(moment.now()).locale('fr');
      return time.isSame(now, 'day') ? 'Aujourd\'hui' : time.from(now.startOf('day'));
    }
    if (mode == 'humanize') {
      return moment.parseZone(value, 'YYYY-MM-DD').locale('fr').format('dddd LL');
    }
    return value;
  }

}

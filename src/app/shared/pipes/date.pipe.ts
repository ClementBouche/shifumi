import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'appDate'
})
export class DatePipe implements PipeTransform {

  transform(value: any, mode?: string): String {
    // const date = moment().diff(value, 'days');
    if (mode == 'humanize') {
      const time = moment.parseZone(value, 'YYYY-MM-DD').add(12, 'h').locale('fr');
      const now = moment.parseZone(moment.now()).locale('fr');
      return time.from(now);
    }
    return value;
  }

}

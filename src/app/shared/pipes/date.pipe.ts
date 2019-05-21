import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'appDate'
})
export class DatePipe implements PipeTransform {

  transform(value: any, mode?: string): String {
    // const date = moment().diff(value, 'days');
    if (mode == 'humanize') {
      return moment(value, 'YYYY-MM-DD').locale('fr').fromNow();
    }
    return value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'playTime'
})
export class PlayTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let hours =  Math.floor(moment.duration(value, 'minutes').asHours());
    let minutes = moment.duration(value, 'minutes').minutes();
    let date = hours === 0 ? '' : hours+'h';
    date += minutes === 0 ? '' : minutes+'min';
    return date;
  }

}

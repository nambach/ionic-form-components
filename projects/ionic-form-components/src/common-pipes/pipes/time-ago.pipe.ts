import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { timeAgo } from '../../utils/time';

@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
  // @ts-ignore
  transform(value: number, days?: number, pattern = 'MMM d, y, h:mm a') {
    if (!days) {
      return timeAgo(value);
    }

    const seconds = (new Date().getTime() - value) / 1000;
    if (seconds > days * 24 * 60 * 60) {
      return new DatePipe('en-US').transform(value, pattern);
    }

    return timeAgo(value);
  }
}

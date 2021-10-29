import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'parseJson' })
export class ParseJsonPipe implements PipeTransform {
  transform(value: string) {
    return JSON.parse(value);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { SelectModalConfig } from '../types/models';

@Pipe({ name: 'getSelectValue' })
export class GetSelectValuePipe implements PipeTransform {
  transform(value: any, config: SelectModalConfig) {
    if (value && config?.valueExtractor) {
      return config.valueExtractor(value);
    }
    return null;
  }
}

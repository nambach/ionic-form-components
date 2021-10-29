import { Component } from '@angular/core';
import { SelectModalConfig } from 'dist/ionic-form-components/types/select-modal-config.models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  files: any[] = [];
  multiple: any[] = [];
  config: SelectModalConfig<string> = {
    keyExtractor: (v) => v,
    valueExtractor: (v) => v,
  };
  options: string[] = ['1', '2', '3'];

  constructor() {}
}

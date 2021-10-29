import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-view-multiple-select',
  templateUrl: './view-multiple-select.component.html',
  styleUrls: ['./view-multiple-select.component.scss']
})
export class ViewMultipleSelectComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required: any;

  count: string;
  valuesStr: string[];

  constructor() {
  }

  @Input() set values(values: string[]) {
    if (!values?.length) {
      this.count = null;
      this.valuesStr = [];
      return;
    }

    this.count = `${values.length} selected`;
    this.valuesStr = values;
  }
}

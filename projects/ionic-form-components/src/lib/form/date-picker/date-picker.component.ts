import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent {
  @ViewChild(IonDatetime, { static: true }) ionDatetime: IonDatetime;
  @Input() label = '';

  @Input() placeholder = '';
  @Input() required: any;
  @Input() disabled: any;
  @Output() valueChange = new EventEmitter<Date>();

  @Input() min: IonDatetime['min'];
  @Input() max: IonDatetime['max'];

  timeValue: IonDatetime['value'];

  constructor() {}

  @Input() set value(val: Date | number | string) {
    if (val === null) {
      this.timeValue = null;
    }
    if (val instanceof Date) {
      this.timeValue = val.toISOString();
    }
    if (typeof val === 'string' || typeof val === 'number') {
      this.timeValue = new Date(val).toISOString();
    }
  }

  handleChange($event: any) {
    const value = $event?.target?.value;
    if (value) {
      this.valueChange.emit(new Date(value));
    }
    if (value === null) {
      this.valueChange.emit(null);
    }
  }
}

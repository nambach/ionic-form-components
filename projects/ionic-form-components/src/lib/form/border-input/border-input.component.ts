import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IonIcon, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-border-input',
  templateUrl: './border-input.component.html',
  styleUrls: ['./border-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BorderInputComponent implements OnInit {
  @ViewChild('input') input: IonInput;

  @Input() label: string;
  @Input() required: any;
  @Input() placeholder = '';
  @Input() value = '';

  @Input() icon: IonIcon['name'];

  @Input() clearInput = false;
  @Input() enterkeyhint: IonInput['enterkeyhint'] = undefined;
  @Input() inputMode: IonInput['inputmode'] = undefined;
  @Input() inputType: IonInput['type'] = undefined;

  @Input() minlength: IonInput['minlength'] = undefined;
  @Input() maxlength: IonInput['maxlength'] = undefined;

  @Input() readonly: any;
  @Input() stickyValue: any;
  @Input() debounce = 0;
  @Output() valueSubmit = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();
  @Output() focusOut = new EventEmitter<string>();

  constructor() {}

  @Input() set isSearchBox(val: any) {
    if (val) {
      this.icon = 'search';
      this.enterkeyhint = 'search';
      this.clearInput = true;
    }
  }

  ngOnInit() {}

  handleSubmit($event) {
    const { keyCode, target } = $event;
    if (keyCode === 13) {
      this.valueSubmit.emit(target.value);
    }
  }

  handleValueChange($event) {
    const { target } = $event;
    this.valueChange.emit(target.value);
  }

  handleBlur() {
    this.input.getInputElement().then((el) => {
      if (this.stickyValue) {
        el.value = this.value;
      }
      this.focusOut.emit(el.value);
    });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import {IonTextarea} from '@ionic/angular';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required: any;
  @Input() readonly: any;
  @Input() autoGrow: any;
  @Input() value: string | number;
  @Output() valueChange = new EventEmitter();
  @Output() focusOut = new EventEmitter<string>();

  constructor() {}
}

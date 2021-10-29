import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent {
  @Input() label = '';
  @Input() value: string | number;
  @Input() placeholder = '';
  @Input() required: any;
  @Input() disabled: any;

  @Output() touch = new EventEmitter();

  constructor() {}

  handleClick() {
    if (this.disabled) {
      return;
    }
    this.touch.emit();
  }
}

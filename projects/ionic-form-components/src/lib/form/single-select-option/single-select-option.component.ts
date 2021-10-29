import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-select-option',
  templateUrl: './single-select-option.component.html',
  styleUrls: ['./single-select-option.component.scss']
})
export class SingleSelectOptionComponent {
  @Input() isSelected = false;
  @Input() label = '';
  @Output() touch = new EventEmitter<unknown>();

  constructor() {}

  handleClick() {
    this.touch.emit();
  }
}

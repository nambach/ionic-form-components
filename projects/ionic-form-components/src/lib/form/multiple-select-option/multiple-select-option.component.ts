import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-multiple-select-option',
  templateUrl: './multiple-select-option.component.html',
  styleUrls: ['./multiple-select-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleSelectOptionComponent implements OnInit {
  @Input() isSelected = false;
  @Input() label = '';
  @Input() defaultIcon = 'square-outline';
  @Input() selectedIcon = 'checkbox';
  @Output() touch = new EventEmitter<unknown>();

  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.touch.emit();
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

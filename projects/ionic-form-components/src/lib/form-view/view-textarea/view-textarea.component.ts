import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-textarea',
  templateUrl: './view-textarea.component.html',
  styleUrls: ['./view-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTextareaComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required: any;
  @Input() value: string | number;

  constructor() {}
}

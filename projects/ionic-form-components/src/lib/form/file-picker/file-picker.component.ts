import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FileModel } from '../../types';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePickerComponent {
  @ViewChild('picker') picker: ElementRef<HTMLInputElement>;

  @Input() label = '';
  @Input() required: any;

  @Input() values: FileModel[] = [];
  @Output() valuesChange = new EventEmitter<FileModel[]>();

  constructor() {}

  handleOpen() {
    this.picker.nativeElement.click();
  }

  removeItem(index: number) {
    const removed = this.values.slice(0);
    removed.splice(index, 1);
    this.valuesChange.emit(removed);
  }

  handleChange($event) {
    const { files } = $event.target;
    if (files && files[0]) {
      const file: FileModel = files[0];

      this.valuesChange.emit([...this.values, file]);

      // clear input
      this.picker.nativeElement.value = '';
    }
  }
}

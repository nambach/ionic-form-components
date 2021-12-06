import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FileModel } from '../../types';
import { calculateFileSize } from '../../utils';

@Component({
  selector: 'app-file-picker-item',
  templateUrl: './file-picker-item.component.html',
  styleUrls: ['./file-picker-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePickerItemComponent {
  @Output() deleteTouch = new EventEmitter();
  @Output() touch = new EventEmitter();

  rawFile: FileModel;
  imageSrc: any = 'https://cdn-icons-png.flaticon.com/512/633/633585.png';
  fileSize = '';

  constructor(private cdr: ChangeDetectorRef) {}

  @Input() set file(file: FileModel) {
    this.rawFile = file;

    this.fileSize = calculateFileSize(file.size);

    if (file.type.startsWith('image/')) {
      this.processImage(file);
    }
  }

  private processImage(file: FileModel) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc = e.target.result;
      this.cdr.markForCheck();
    };
    reader.readAsDataURL(file);
  }
}

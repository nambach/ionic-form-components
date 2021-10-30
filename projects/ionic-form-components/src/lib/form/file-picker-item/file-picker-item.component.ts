import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileModel } from '../../types';
import { calculateFileSize } from '../../utils';

@Component({
  selector: 'app-file-picker-item',
  templateUrl: './file-picker-item.component.html',
  styleUrls: ['./file-picker-item.component.scss'],
})
export class FilePickerItemComponent {
  @Output() deleteTouch = new EventEmitter();
  @Output() touch = new EventEmitter();

  rawFile: FileModel;
  imageSrc: any = 'assets/file.png';
  fileSize = '';

  constructor() {}

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
    };
    reader.readAsDataURL(file);
  }
}

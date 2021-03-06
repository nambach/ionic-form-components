import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePickerComponent {
  @ViewChild('input') picker: ElementRef<HTMLInputElement>;

  @Input() label = '';
  @Input() required: any;

  @Output() imageChange = new EventEmitter();

  @Input() imageUrl: any;

  constructor(private cdr: ChangeDetectorRef) {}

  handleOpen() {
    this.picker.nativeElement.click();
  }

  handleClear() {
    this.imageUrl = null;
    this.picker.nativeElement.value = '';
    this.imageChange.emit();
  }

  handleChange($event) {
    const { files } = $event.target;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target.result;
        this.cdr.markForCheck();
      };
      reader.readAsDataURL(file);
      this.imageChange.emit(file);
      console.log('changed1');
    }
    console.log('changed2');
  }
}

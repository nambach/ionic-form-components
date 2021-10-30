import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BorderInputComponent } from './border-input/border-input.component';
import { MultipleSelectModalComponent } from './multiple-select-modal/multiple-select-modal.component';
import { MultipleSelectOptionComponent } from './multiple-select-option/multiple-select-option.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { SingleSelectModalComponent } from './single-select-modal/single-select-modal.component';
import { SingleSelectOptionComponent } from './single-select-option/single-select-option.component';
import { MultipleSelectComponent } from './multiple-select/multiple-select.component';
import { SingleSelectComponent } from './single-select/single-select.component';
import { ImagePickerComponent } from './image-picker/image-picker.component';
import { TextareaComponent } from './textarea/textarea.component';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { FilePickerItemComponent } from './file-picker-item/file-picker-item.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

export {
  BorderInputComponent,
  ImagePickerComponent,
  FilePickerComponent,
  FilePickerItemComponent,
  DatePickerComponent,
  MultipleSelectComponent,
  MultipleSelectModalComponent,
  MultipleSelectOptionComponent,
  SelectInputComponent,
  SingleSelectComponent,
  SingleSelectModalComponent,
  SingleSelectOptionComponent,
  TextareaComponent,
};

const components = [
  BorderInputComponent,
  ImagePickerComponent,
  FilePickerComponent,
  FilePickerItemComponent,
  DatePickerComponent,
  MultipleSelectComponent,
  MultipleSelectModalComponent,
  MultipleSelectOptionComponent,
  SelectInputComponent,
  SingleSelectComponent,
  SingleSelectModalComponent,
  SingleSelectOptionComponent,
  TextareaComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, IonicModule],
  exports: [components],
})
export class IonicFormModule {}

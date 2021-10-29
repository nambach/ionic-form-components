/*
 * Public API Surface of ionic-form-components
 */

import { BorderInputComponent } from './border-input/border-input.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FilePickerItemComponent } from './file-picker-item/file-picker-item.component';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { ImagePickerComponent } from './image-picker/image-picker.component';
import { MultipleSelectModalComponent } from './multiple-select-modal/multiple-select-modal.component';
import { MultipleSelectOptionComponent } from './multiple-select-option/multiple-select-option.component';
import { MultipleSelectComponent } from './multiple-select/multiple-select.component';
import { GetSelectValuePipe } from './pipes/get-select-value.pipe';
import { SelectInputComponent } from './select-input/select-input.component';
import { SingleSelectModalComponent } from './single-select-modal/single-select-modal.component';
import { SingleSelectOptionComponent } from './single-select-option/single-select-option.component';
import { SingleSelectComponent } from './single-select/single-select.component';
import { TextareaComponent } from './textarea/textarea.component';

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
  TextareaComponent
};

export { GetSelectValuePipe };

export * from './form.module';

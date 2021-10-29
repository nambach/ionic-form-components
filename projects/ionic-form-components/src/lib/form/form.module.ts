import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderInputComponent } from 'projects/ionic-form-components/src/lib/form/border-input/border-input.component';
import { IonicModule } from '@ionic/angular';
import { MultipleSelectModalComponent } from 'projects/ionic-form-components/src/lib/form/multiple-select-modal/multiple-select-modal.component';
import { MultipleSelectOptionComponent } from 'projects/ionic-form-components/src/lib/form/multiple-select-option/multiple-select-option.component';
import { SelectInputComponent } from 'projects/ionic-form-components/src/lib/form/select-input/select-input.component';
import { SingleSelectModalComponent } from 'projects/ionic-form-components/src/lib/form/single-select-modal/single-select-modal.component';
import { SingleSelectOptionComponent } from 'projects/ionic-form-components/src/lib/form/single-select-option/single-select-option.component';
import { MultipleSelectComponent } from 'projects/ionic-form-components/src/lib/form/multiple-select/multiple-select.component';
import { SingleSelectComponent } from 'projects/ionic-form-components/src/lib/form/single-select/single-select.component';
import { ImagePickerComponent } from 'projects/ionic-form-components/src/lib/form/image-picker/image-picker.component';
import { TextareaComponent } from 'projects/ionic-form-components/src/lib/form/textarea/textarea.component';
import { FilePickerComponent } from 'projects/ionic-form-components/src/lib/form/file-picker/file-picker.component';
import { FilePickerItemComponent } from 'projects/ionic-form-components/src/lib/form/file-picker-item/file-picker-item.component';
import { DatePickerComponent } from 'projects/ionic-form-components/src/lib/form/date-picker/date-picker.component';
import { GetSelectValuePipe } from 'projects/ionic-form-components/src/lib/form/pipes/get-select-value.pipe';

export const components = [
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

export const pipes = [GetSelectValuePipe];

@NgModule({
  declarations: [components, pipes],
  imports: [CommonModule, IonicModule],
  exports: [components, GetSelectValuePipe],
})
export class IonicFormModule {}

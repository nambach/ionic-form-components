import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImageItemComponent } from './image-item/image-item.component';
import { ImageItemsComponent } from './image-items/image-items.component';
import { ImageViewerDirective } from './image-viewer/image-viewer.directive';
import { ImageViewerModalComponent } from './image-viewer/image-viewer-modal.component';
import { ViewMultipleSelectComponent } from './view-multiple-select/view-multiple-select.component';
import { ViewTextareaComponent } from './view-textarea/view-textarea.component';

export {
  ImageViewerModalComponent,
  ImageViewerDirective,
  ImageItemComponent,
  ImageItemsComponent,
  ViewMultipleSelectComponent,
  ViewTextareaComponent,
};

const components = [
  ImageViewerModalComponent,
  ImageViewerDirective,
  ImageItemComponent,
  ImageItemsComponent,
  ViewMultipleSelectComponent,
  ViewTextareaComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, IonicModule],
  exports: [components],
})
export class IonicFormViewModule {}

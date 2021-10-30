import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExpandableComponent } from './expandable/expandable.component';
import { ImageItemComponent } from './image-item/image-item.component';
import { ImageItemsComponent } from './image-items/image-items.component';
import { ImageViewerDirective } from './image-viewer/image-viewer.directive';
import { ImageViewerModalComponent } from './image-viewer/image-viewer-modal.component';
import { ViewMultipleSelectComponent } from './view-multiple-select/view-multiple-select.component';
import { ViewTextareaComponent } from './textarea/view-textarea.component';

export {
  ExpandableComponent,
  ImageViewerModalComponent,
  ImageViewerDirective,
  ImageItemComponent,
  ImageItemsComponent,
  ViewMultipleSelectComponent,
  ViewTextareaComponent,
};

const components = [
  ExpandableComponent,
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
export class MyFormViewModule {}

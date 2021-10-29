import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageData } from '../types/image.model';
import { ImageViewerModalComponent } from '../image-viewer/image-viewer-modal.component';

@Component({
  selector: 'app-image-items',
  templateUrl: './image-items.component.html',
  styleUrls: ['./image-items.component.scss']
})
export class ImageItemsComponent {
  @Input() images: ImageData[] = [];

  constructor(private modalCtrl: ModalController) {}

  async openViewer(index: number) {
    const modal = await this.modalCtrl.create({
      component: ImageViewerModalComponent,
      cssClass: 'transparent-modal',
      componentProps: {
        data: {
          initialSlide: index,
          images: this.images
        }
      }
    });
    modal.present();
  }

  trackBy(index, item: ImageData) {
    return item?.url || index;
  }
}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ImageData } from 'projects/ionic-form-components/src/lib/types/image.model';
import { ImageViewerModalComponent } from './image-viewer-modal.component';
import { ModalController } from '@ionic/angular';

@Directive({
  selector: 'img[appImageViewer]',
})
export class ImageViewerDirective {
  @Input() name: string;

  constructor(private el: ElementRef, private modalCtrl: ModalController) {
    el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('click')
  async openViewer() {
    const image: ImageData = {
      url: this.el.nativeElement.src,
      name: this.name,
      author: '',
      createdTime: null,
    };
    const modal = await this.modalCtrl.create({
      component: ImageViewerModalComponent,
      cssClass: 'transparent-modal full-modal',
      componentProps: {
        data: {
          initialSlide: 0,
          images: [image],
        },
      },
    });
    modal.present();
  }
}

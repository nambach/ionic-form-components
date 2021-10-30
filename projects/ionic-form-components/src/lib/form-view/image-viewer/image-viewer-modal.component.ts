import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ImageData } from '../../types';

interface ImageViewerData {
  images: ImageData[];
  initialSlide: number;
}

@Component({
  selector: 'app-image-viewer-modal',
  templateUrl: './image-viewer-modal.component.html',
  styleUrls: ['./image-viewer-modal.component.scss'],
})
export class ImageViewerModalComponent implements OnDestroy {
  @ViewChild(IonSlides) slides: IonSlides;
  images: ImageData[] = [];
  label = '';
  sliderZoomOpts = {
    initialSlide: 0,
    zoom: {
      maxRatio: 5,
    },
  };
  unsub$ = new Subject();

  constructor(private modalCtrl: ModalController) {}

  @Input() set data(data: ImageViewerData) {
    const { initialSlide, images } = data;
    this.sliderZoomOpts = { ...this.sliderZoomOpts, initialSlide };
    setTimeout(() => {
      this.images = images;
      this.label = images[initialSlide]?.name;
    }, 250);
  }

  ionViewDidEnter() {
    this.slides.ionSlideDidChange
      .pipe(takeUntil(this.unsub$))
      .subscribe(async (e) => {
        const i = await this.slides.getActiveIndex();
        this.label = this.images[i]?.name;
      });
    this.slides.update();
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

  close() {
    this.modalCtrl.dismiss();
  }

  trackBy(index, item: ImageData) {
    return item?.url || index;
  }
}

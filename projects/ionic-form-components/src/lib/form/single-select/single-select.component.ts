import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { emptyModalConfig } from '../../types';
import { SingleSelectModalComponent } from '../single-select-modal/single-select-modal.component';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss'],
})
export class SingleSelectComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required: any;
  @Input() disabled: any;

  @Input() showSelectedValue = false;

  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  @Input() config = emptyModalConfig;
  @Input() options: unknown[] = [];

  constructor(public modalCtrl: ModalController) {}

  async openModal() {
    if (this.label) {
      this.config.title = this.label;
    }

    const modal = await this.modalCtrl.create({
      component: SingleSelectModalComponent,
      componentProps: {
        showSelectedValue: this.showSelectedValue,
        config: this.config,
        options: this.options,
        value: this.value,
      },
    });
    modal.present();

    modal.onWillDismiss().then(({ data }) => {
      if (data !== undefined) {
        this.valueChange.emit(data);
        this.value = data;
      }
    });
  }

  getValue() {
    if (this.value === null || this.value === undefined) {
      return null;
    }
    return this.config.valueExtractor(this.value);
  }
}

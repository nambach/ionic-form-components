import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { emptyModalConfig } from '../../types';
import { MultipleSelectModalComponent } from '../multiple-select-modal/multiple-select-modal.component';

@Component({
  selector: 'app-multiple-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.scss'],
})
export class MultipleSelectComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required: any;
  @Input() disabled: any;
  @Input() readonly: any;

  @Input() values: any[];
  @Output() valuesChange = new EventEmitter<any>();

  @Input() config = emptyModalConfig;
  @Input() options: unknown[] = [];

  constructor(public modalCtrl: ModalController) {}

  async openModal() {
    if (this.readonly) {
      return;
    }

    if (this.label) {
      this.config.title = this.label;
    }

    const modal = await this.modalCtrl.create({
      component: MultipleSelectModalComponent,
      componentProps: {
        config: this.config,
        options: this.options,
        values: this.values,
      },
    });
    modal.present();

    modal.onWillDismiss().then(({ data }) => {
      if (data) {
        this.valuesChange.emit(data);
        this.values = data;
      }
    });
  }

  getValue() {
    if (!this.values?.length) {
      return null;
    }

    const all =
      this.values?.length === this.options?.length && this.options?.length > 0
        ? ' (All)'
        : '';
    return `${this.values?.length} selected${all}`;
  }
}

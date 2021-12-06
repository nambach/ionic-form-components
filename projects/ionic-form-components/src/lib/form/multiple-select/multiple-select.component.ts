import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { emptyModalConfig } from '../../types';
import { MultipleSelectModalComponent } from '../multiple-select-modal/multiple-select-modal.component';

@Component({
  selector: 'app-multiple-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleSelectComponent implements OnChanges {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required: any;
  @Input() disabled: any;
  @Input() readonly: any;

  @Input() values: any[];
  @Output() valuesChange = new EventEmitter<any>();

  @Input() config = emptyModalConfig;
  @Input() options: unknown[] = [];

  displayValue: string = null;

  constructor(public modalCtrl: ModalController) {}

  ngOnChanges(changes: SimpleChanges): void {
    const newValues = changes['values'];
    if (newValues) {
      this.values = newValues.currentValue;
      this.updateDisplayValue();
    }
  }

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

  updateDisplayValue(): void {
    if (!this.values?.length) {
      this.displayValue = null;
      return;
    }

    const all =
      this.values?.length === this.options?.length && this.options?.length > 0
        ? ' (All)'
        : '';
    this.displayValue = `${this.values?.length} selected${all}`;
  }
}

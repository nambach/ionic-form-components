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
import { SingleSelectModalComponent } from '../single-select-modal/single-select-modal.component';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleSelectComponent implements OnChanges {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required: any;
  @Input() disabled: any;

  @Input() showSelectedValue = false;

  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  @Input() config = emptyModalConfig;
  @Input() options: unknown[] = [];

  displayValue: string = null;

  constructor(public modalCtrl: ModalController) {}

  ngOnChanges(changes: SimpleChanges): void {
    const { value } = changes;
    if (value) {
      this.value = value.currentValue;
      this.updateDisplayValue();
    }
  }

  async openModal() {
    const { label, showSelectedValue, config, options, value } = this;

    if (label) {
      config.title = label;
    }

    const modal = await this.modalCtrl.create({
      component: SingleSelectModalComponent,
      componentProps: {
        showSelectedValue,
        config,
        options,
        value,
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

  updateDisplayValue() {
    if (this.value === null || this.value === undefined) {
      this.displayValue = null;
      return;
    }

    this.displayValue = this.config.valueExtractor(this.value);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  emptyModalConfig,
  SelectModalConfig,
  Wrap,
  wrapOptions,
} from '../../types/select-modal-config.models';

@Component({
  selector: 'ion-single-select-modal',
  templateUrl: './single-select-modal.component.html',
  styleUrls: ['./single-select-modal.component.scss'],
})
export class SingleSelectModalComponent {
  @Input() showSelectedValue = false;
  @Output() valueChange = new EventEmitter<unknown>();

  search = '';
  allOptions: Wrap[] = [];
  filteredOptions: Wrap[] = [];
  initialValue: unknown;
  displayValue: any;
  modalConfig: SelectModalConfig = emptyModalConfig;

  constructor(private modalCtrl: ModalController) {}

  @Input() set config(config: SelectModalConfig) {
    this.modalConfig = config;

    // re-wrap options
    const options = this.allOptions.map((o) => o.data);
    this.allOptions = wrapOptions(config, options);

    this.handleSearch(this.search);
    this.toggleInitialValue();
  }

  @Input() set options(options: unknown[]) {
    this.allOptions = wrapOptions(this.modalConfig, options);

    // display filtered options
    this.handleSearch(this.search);
    this.toggleInitialValue();
  }

  @Input() set value(initialValue: unknown) {
    this.initialValue = initialValue;
    if (this.modalConfig?.valueExtractor && initialValue) {
      this.displayValue = this.modalConfig.valueExtractor(initialValue);
    }

    // set selected value
    this.toggleInitialValue();
  }

  dismiss() {
    this.modalCtrl.dismiss(this.initialValue);
  }

  handleSelect(option: Wrap) {
    this.valueChange.emit(option.data);
    this.modalCtrl.dismiss(option.data);
  }

  handleSearch(value: string) {
    this.filteredOptions = this.allOptions.filter((o) =>
      o.value?.toLowerCase().includes(value.toLowerCase())
    );
  }

  trackByFn(index, option: Wrap) {
    return option.key + ':' + option.isSelected;
  }

  toggleInitialValue() {
    // deselect all
    this.allOptions.forEach((o) => (o.isSelected = false));

    const value = this.initialValue;
    if (value === null || value === undefined) {
      return;
    }

    const key = this.modalConfig.keyExtractor(value);
    const option = this.allOptions.find((o) => o.key === key);

    if (option) {
      option.isSelected = true;
    }
  }
}

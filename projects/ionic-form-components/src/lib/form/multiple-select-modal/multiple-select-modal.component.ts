import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  emptyModalConfig,
  SelectModalConfig,
  Wrap,
  wrapOptions,
} from '../../types/select-modal-config.models';

@Component({
  selector: 'app-multiple-select-modal',
  templateUrl: './multiple-select-modal.component.html',
  styleUrls: ['./multiple-select-modal.component.scss'],
})
export class MultipleSelectModalComponent implements OnInit, OnDestroy {
  @Output() valuesChange = new EventEmitter<unknown[]>();

  search = '';
  countMessage = 'No selected';
  allOptions: Wrap[] = [];
  filteredOptions: Wrap[] = [];
  initialValues: unknown[] = [];
  modalConfig: SelectModalConfig = emptyModalConfig;

  constructor(private modalCtrl: ModalController) {}

  @Input() set config(config: SelectModalConfig) {
    this.modalConfig = config;

    // re-wrap options
    const options = this.allOptions.map((o) => o.data);
    this.allOptions = wrapOptions(config, options);

    this.handleSearch(this.search);
    this.toggleInitialValues();
  }

  @Input() set options(options: unknown[]) {
    this.allOptions = wrapOptions(this.modalConfig, options);

    // display filtered options
    this.handleSearch(this.search);
    this.toggleInitialValues();
  }

  @Input() set values(initialValues: unknown[]) {
    this.initialValues = initialValues;

    // set selected options
    this.toggleInitialValues();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  handleApply() {
    const selectedData = this.allOptions
      .filter((option) => option.isSelected)
      .map((option) => option.data);
    this.valuesChange.emit(selectedData);
    this.modalCtrl.dismiss(selectedData);
  }

  dismiss() {
    this.modalCtrl.dismiss(this.initialValues);
  }

  handleSearch(value: string) {
    this.filteredOptions = this.allOptions.filter((o) =>
      o.value.toLowerCase().includes(value.toLowerCase())
    );
  }

  trackByFn(index, option: Wrap) {
    return option.key + ':' + option.isSelected;
  }

  toggle(option: Wrap) {
    option.isSelected = !option.isSelected;
    this.updateCountMessage();
  }

  toggleAll(all: boolean) {
    this.allOptions.forEach((o) => (o.isSelected = all));
    this.updateCountMessage();
  }

  toggleInitialValues() {
    const { keyExtractor } = this.modalConfig;
    const keys = this.initialValues?.map(keyExtractor) || [];
    this.allOptions.forEach((option) => {
      option.isSelected = keys.includes(option.key);
    });

    this.updateCountMessage();
  }

  updateCountMessage() {
    const select = this.allOptions.filter((o) => o.isSelected).length;
    const total = this.allOptions.length;
    const n = select || 'No';
    const all = select === total ? '(All)' : '';
    this.countMessage = `${n} selected ${all}`;
  }
}

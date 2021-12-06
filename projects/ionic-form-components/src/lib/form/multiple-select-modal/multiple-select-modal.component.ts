import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleSelectModalComponent
  implements OnInit, OnDestroy, OnChanges
{
  @Input() config: SelectModalConfig = emptyModalConfig;
  @Input() options: any[]; // Raw options
  @Input() values: unknown[] = []; // initial values

  @Output() valuesChange = new EventEmitter<unknown[]>();

  search = '';
  countMessage = 'No selected';
  allOptions: Wrap[] = [];
  filteredOptions: Wrap[] = [];

  constructor(private modalCtrl: ModalController) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const { config, options, values } = changes;
    let changed = config || options || values || false;

    if (config) {
      this.config = config.currentValue;
    }

    if (options) {
      this.options = options.currentValue;
    }

    if (values) {
      this.values = values.currentValue;
    }

    // POST update
    if (config || options) {
      this.computeConfig();
    } else if (values) {
      // set selected options
      this.toggleInitialValues();
    }
  }

  computeConfig() {
    // re-wrap options
    this.allOptions = wrapOptions(this.config, this.options);

    // display filtered options
    this.handleSearch(this.search);
    this.toggleInitialValues();
  }

  ngOnInit() {
    this.computeConfig();
  }

  ngOnDestroy() {}

  handleApply() {
    const selectedData = this.allOptions
      .filter((option) => option.isSelected)
      .map((option) => option.data);
    this.valuesChange.emit(selectedData);
    this.modalCtrl.dismiss(selectedData);
  }

  dismiss() {
    this.modalCtrl.dismiss(this.values);
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
    const { keyExtractor } = this.config;
    const keys = this.values?.map(keyExtractor) || [];
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

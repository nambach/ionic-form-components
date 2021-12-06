import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
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
  selector: 'ion-single-select-modal',
  templateUrl: './single-select-modal.component.html',
  styleUrls: ['./single-select-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleSelectModalComponent implements OnChanges, OnInit {
  @Input() showSelectedValue = false;
  @Input() config: SelectModalConfig = emptyModalConfig;
  @Input() options: any[]; // Raw options
  @Input() value: unknown; // Initial value

  @Output() valueChange = new EventEmitter<unknown>();

  search = '';
  allOptions: Wrap[] = [];
  filteredOptions: Wrap[] = [];
  displayValue: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.computeConfig();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { config, options, value } = changes;

    if (config) {
      this.config = config.currentValue;
    }

    if (options) {
      this.options = options.currentValue;
    }

    if (value) {
      this.value = value.currentValue;
    }

    if (config || options) {
      this.computeConfig();
    } else if (value) {
      if (this.config?.valueExtractor && this.value) {
        this.displayValue = this.config.valueExtractor(this.value);
      }
      // set selected value
      this.toggleInitialValue();
    }
  }

  computeConfig() {
    // re-wrap options
    this.allOptions = wrapOptions(this.config, this.options);

    this.handleSearch(this.search);
    this.toggleInitialValue();
  }

  dismiss() {
    this.modalCtrl.dismiss(this.value);
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

    const value = this.value;
    if (value === null || value === undefined) {
      return;
    }

    const key = this.config.keyExtractor(value);
    const option = this.allOptions.find((o) => o.key === key);

    if (option) {
      option.isSelected = true;
    }
  }
}

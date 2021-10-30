import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  emptyModalConfig,
  SelectModalConfig,
  Wrap,
  wrapOptions,
} from '../../types/select-modal-config.models';

@Component({
  selector: 'app-expandable-select',
  templateUrl: './expandable-single-select.component.html',
  styleUrls: ['./expandable-single-select.component.scss'],
})
export class ExpandableSingleSelectComponent implements OnInit {
  @Input() label = '';
  @Input() required: any;
  @Output() valueChange = new EventEmitter<any>();

  allOptions: Wrap[] = [];
  isExpanded = false;
  #modalConfig: SelectModalConfig = emptyModalConfig;

  constructor() {}

  @Input() set options(options: unknown[]) {
    this.allOptions = wrapOptions(this.#modalConfig, options);
  }

  @Input() set config(config: SelectModalConfig) {
    this.#modalConfig = config;
    const options = this.allOptions.map((o) => o.data);
    this.allOptions = wrapOptions(config, options);
  }

  @Input() set value(initialValue: unknown) {
    const { keyExtractor } = this.#modalConfig;
    const initialValueKey = initialValue
      ? keyExtractor(initialValue)
      : undefined;
    this.allOptions.forEach((option) => {
      option.isSelected = option.key === initialValueKey;
    });
  }

  ngOnInit() {}

  expand() {
    this.isExpanded = !this.isExpanded;
  }

  trackByFn(index, option: Wrap) {
    return option.key + ':' + option.isSelected;
  }

  toggle(option: Wrap) {
    const prev = this.allOptions.find((o) => o.isSelected);
    if (prev) {
      prev.isSelected = false;
    }
    option.isSelected = true;
    this.valueChange.emit(option.data);
  }

  getCurrentSelected() {
    return this.allOptions.find((option) => option.isSelected)?.value;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  emptyModalConfig,
  SelectModalConfig,
  Wrap,
  wrapOptions
} from '../../types/select-modal-config.models';

@Component({
  selector: 'app-expandable-multiselect',
  templateUrl: './expandable-multiple-select.component.html',
  styleUrls: ['./expandable-multiple-select.component.scss']
})
export class ExpandableMultipleSelectComponent implements OnInit {
  @Input() label = '';

  @Output() valuesChange = new EventEmitter<any[]>();

  countMessage = '';
  allOptions: Wrap[] = [];
  configModal: SelectModalConfig = emptyModalConfig;
  isExpanded = false;

  constructor() {}

  @Input() set options(options: unknown[]) {
    this.allOptions = wrapOptions(this.configModal, options);
  }

  @Input() set config(config: SelectModalConfig) {
    this.configModal = config;
    const options = this.allOptions.map((o) => o.data);
    this.allOptions = wrapOptions(config, options);
  }

  @Input() set values(initialValues: unknown[]) {
    const { keyExtractor } = this.configModal;
    const keys = initialValues?.map(keyExtractor) || [];
    this.allOptions.forEach((option) => {
      option.isSelected = keys.includes(option.key);
    });
    this.updateCountMessage();
  }

  ngOnInit() {}

  expand() {
    this.isExpanded = !this.isExpanded;
  }

  trackByFn(index, option: Wrap) {
    return option.key + ':' + option.isSelected;
  }

  toggle(option: Wrap) {
    option.isSelected = !option.isSelected;
    this.updateCountMessage();
    this.emitChange();
  }

  emitChange() {
    const selected = this.allOptions
      .filter((option) => option.isSelected)
      .map((option) => option.data);
    this.valuesChange.emit(selected);
  }

  updateCountMessage() {
    const select = this.allOptions.filter((o) => o.isSelected).length;
    if (select === 0) {
      this.countMessage = '';
    } else {
      const total = this.allOptions.length;
      const all = select === total ? '(All)' : '';
      this.countMessage = `${select} selected ${all}`;
    }
  }

  getAllOriginalOptions() {
    return this.allOptions?.map((o) => o.data) || [];
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageData } from 'projects/ionic-form-components/src/lib/types/image.model';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {
  @Input() image: Partial<ImageData> = {};
  @Output() touch = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ImageData } from '../../types';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageItemComponent implements OnInit {
  @Input() image: Partial<ImageData> = {};
  @Output() touch = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}

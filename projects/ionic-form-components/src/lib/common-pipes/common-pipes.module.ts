import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParseJsonPipe } from './pipes/parse-json.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

export { ParseJsonPipe, TimeAgoPipe };

const pipes = [ParseJsonPipe, TimeAgoPipe];

@NgModule({
  declarations: [pipes],
  imports: [CommonModule],
  exports: [pipes],
})
export class MyCommonPipesModule {}

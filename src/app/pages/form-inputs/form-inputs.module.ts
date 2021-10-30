import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {IonicFormPipesModule} from '../../../../projects/ionic-form-components/src/lib/common-pipes/common-pipes.module';
import { IonicFormViewModule } from '../../../../projects/ionic-form-components/src/lib/form-view/form-view.module';
import { IonicFormModule } from '../../../../projects/ionic-form-components/src/lib/form/form.module';

import { FormInputsPageRoutingModule } from './form-inputs-routing.module';

import { FormInputsPage } from './form-inputs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormInputsPageRoutingModule,
    IonicFormModule,
    IonicFormViewModule,
    IonicFormPipesModule
  ],
  declarations: [FormInputsPage],
})
export class FormInputsPageModule {}

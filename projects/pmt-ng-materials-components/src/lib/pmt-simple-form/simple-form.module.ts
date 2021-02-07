import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { PmtAutocompleteModule } from 'pmt-ng-materials-components';
import { SimpleFormBuilderService } from './services/simple-form-builder.service';
import { PmtSimpleFormComponent } from './simple-form.component';

@NgModule({
  declarations: [PmtSimpleFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    PmtAutocompleteModule
  ],
  exports: [PmtSimpleFormComponent],
  providers:[
    SimpleFormBuilderService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PmtSimpleFormModule { }

import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { PmtAutocompleteModule, PmtCalendarModule } from 'pmt-ng-materials-components';
import { PmtSimpleFormModule } from 'projects/pmt-ng-materials-components/src/lib/pmt-simple-form/simple-form.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatToolbarModule,
    PmtCalendarModule,
    PmtAutocompleteModule,
    PmtSimpleFormModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

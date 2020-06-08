import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PmtAutocompleteComponent } from './autocomplete.component';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
    declarations: [
        PmtAutocompleteComponent
    ],
    exports: [
        PmtAutocompleteComponent
    ]
})

export class PmtAutocompleteModule { }

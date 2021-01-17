import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PmtAutocompleteModule } from "./pmtAutocomplete/autocomplete.module";
import { PmtCalendarModule } from "./pmtCalendar/calendar.module";

@NgModule({
    imports: [
        CommonModule,
        PmtAutocompleteModule,
        PmtCalendarModule
    ],
    exports: [
        PmtAutocompleteModule,
        PmtCalendarModule
    ]
})
export class PmtNgMaterialsComponentsModule { }
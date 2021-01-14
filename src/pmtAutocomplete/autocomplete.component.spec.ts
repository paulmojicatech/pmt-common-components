import { PmtAutocompleteModule } from './autocomplete.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmtAutocompleteComponent } from './autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
describe('PmtAutocompleteComponent', () => {
    let fixture: ComponentFixture<PmtAutocompleteComponent>;
    let component: PmtAutocompleteComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                MatAutocompleteModule,
                MatInputModule,
                MatFormFieldModule,
                NoopAnimationsModule
            ],
            declarations: [
                PmtAutocompleteComponent
            ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmtAutocompleteComponent);
        component = fixture.componentInstance;
    });

    it('should instantiate', () => {
        expect(component).toBeTruthy('component could not be created')
    });
})
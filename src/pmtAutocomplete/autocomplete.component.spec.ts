import { PmtAutocompleteModule } from './autocomplete.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmtAutocompleteComponent } from './autocomplete.component';
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule } from '@angular/material';
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
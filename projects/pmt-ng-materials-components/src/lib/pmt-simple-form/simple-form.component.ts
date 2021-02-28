import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ISipmpleFormControl, IValidationRule } from './models/simple-form.interface';
import { SimpleFormBuilderService } from './services/simple-form-builder.service';

@Component({
  selector: 'pmt-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PmtSimpleFormComponent implements OnChanges {

  @Input()
  formControls: ISipmpleFormControl[];
  @Input()
  formValidators: IValidationRule[];

  simpleFormGroup: FormGroup;

  constructor(private _formBuilderSvc: SimpleFormBuilderService) { }

  ngOnChanges(ch: SimpleChanges): void {
    if (!!ch?.formControls?.currentValue) {
      if (!this.simpleFormGroup) {
        const formControls = ch.formControls.currentValue;
        const formValidators = ch.formValidators?.currentValue ?? [];
        this.simpleFormGroup = this._formBuilderSvc.buildForm(formControls, formValidators);
      }
    }
  }

  getFormContainerClass(controlName: string): string {
    const formControl = this.simpleFormGroup.get(controlName);
    if (formControl.errors) {
      return 'form-control-container error';
    }
    return 'form-control-container'
  }

}

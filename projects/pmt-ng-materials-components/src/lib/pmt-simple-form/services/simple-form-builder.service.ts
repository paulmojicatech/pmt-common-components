import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ISipmpleFormControl, IValidationRule } from '../models/simple-form.interface';

@Injectable()
export class SimpleFormBuilderService {

  constructor() { }

  buildForm(controls: ISipmpleFormControl[], formValidators: IValidationRule[]): FormGroup {
    const formGroupModel = {};
    controls.forEach(control => {
      const defaultValue = control.currentValue ?? null;
      const validators = control.validationRules?.map(rule => rule.validateFn) ?? [];
      formGroupModel[control.name] = new FormControl([defaultValue], validators);
    });
    return new FormGroup(formGroupModel, this.getFormValidators(formValidators));
  }

  private getFormValidators(formValidators: IValidationRule[]): ValidatorFn[] {
    if (!!formValidators?.length) {
      return formValidators.map(validator => validator.validateFn);
    } else {
      return [];
    }
  }

}

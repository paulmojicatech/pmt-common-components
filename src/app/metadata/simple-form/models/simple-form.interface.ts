import { ISipmpleFormControl, IValidationRule } from "projects/pmt-ng-materials-components/src/lib/pmt-simple-form/models/simple-form.interface";

export interface ISimpleFormViewModel {
    formControls: ISipmpleFormControl[];
    formValidators: IValidationRule[];
    submitBtnText: string;
}
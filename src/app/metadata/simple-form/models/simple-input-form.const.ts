import { Validators } from "@angular/forms";
import { ISipmpleFormControl, SimpleFormControlType } from "projects/pmt-ng-materials-components/src/lib/pmt-simple-form/models/simple-form.interface";

export const SIMPLE_INPUT_CONTROLS: ISipmpleFormControl[] = [
    {
        name: 'firstName',
        type: SimpleFormControlType.TEXT,
        label: 'First Name',
        validationRules: [
            {
                id: 'firstNameRequired',
                validateFn: Validators.required,

            }
        ],
        supressError: true,
        currentValue: null
    }

];
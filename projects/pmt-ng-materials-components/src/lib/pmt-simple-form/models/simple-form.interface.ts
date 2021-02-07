import { ValidatorFn } from "@angular/forms";

export interface ISipmpleFormControl {
    name: string;
    type: SimpleFormControlType;
    label: string;
    validationRules: IValidationRule[];
    supressError: boolean;
    currentValue: string | number;
}

export enum SimpleFormControlType {
    TEXT = 'TEXT',
    SELECT = 'SELECT',
    NUMBER = 'NUMBER',
    AUTOCOMPLETE = 'AUTOCOMPLETE'
}

export interface IValidationRule {
    id: string;
    validateFn: ValidatorFn;
}
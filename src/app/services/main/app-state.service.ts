import { Injectable } from '@angular/core';
import { ISipmpleFormControl, SimpleFormControlType } from 'projects/pmt-ng-materials-components/src/lib/pmt-simple-form/models/simple-form.interface';
import { BehaviorSubject, Observable, from, of, merge } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ISimpleFormViewModel } from 'src/app/metadata/simple-form/models/simple-form.interface';
import { SIMPLE_INPUT_CONTROLS } from 'src/app/metadata/simple-form/models/simple-input-form.const';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  readonly INITIAL_STATE: ISimpleFormViewModel = {
    formControls: [],
    formValidators: [],
    submitBtnText: 'Save'
  };

  private _viewModelSub$ = new BehaviorSubject<ISimpleFormViewModel>(this.INITIAL_STATE);
  viewModel$ = this._viewModelSub$.asObservable();

  constructor() { }

  getViewModel(): Observable<ISimpleFormViewModel> {
    const formControls$ = this.getFormControls();
    const initialViewModel$ = of(this.INITIAL_STATE).pipe(
      switchMap(viewModel => formControls$.pipe(
        map(formControls => ({...viewModel, formControls }))
      )),
      tap(viewModel => this._viewModelSub$.next(viewModel))
    )
    return merge(this.viewModel$, initialViewModel$).pipe(
      tap(viewModel => {
        console.log('CURRENT STATE', viewModel);
      })
    );
  }

  getFormControls(): Observable<ISipmpleFormControl[]> {
    const loginFormControl: ISipmpleFormControl = {
      name: 'login',
      type: SimpleFormControlType.TEXT,
      label: 'Login',
      validationRules: [],
      supressError: false,
      currentValue: null
    };
    const passwordFormControl: ISipmpleFormControl = {
      name: 'password',
      type: SimpleFormControlType.PASSWORD,
      label: 'Password',
      validationRules: [],
      supressError: false,
      currentValue: null
    };
    return of([
        loginFormControl,
        passwordFormControl
      ]);
  }
}

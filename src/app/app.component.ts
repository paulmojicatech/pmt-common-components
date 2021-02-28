import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISimpleFormViewModel } from './metadata/simple-form/models/simple-form.interface';
import { AppStateService } from './services/main/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  viewModel$: Observable<ISimpleFormViewModel>;

  constructor(private _stateSvc: AppStateService){}

  ngOnInit(): void {
    this.viewModel$ = this._stateSvc.getViewModel();
  }
}

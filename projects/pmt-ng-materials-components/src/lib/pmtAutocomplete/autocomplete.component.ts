import { Component, OnChanges, Input, SimpleChanges, ChangeDetectionStrategy, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'pmt-autocomplete',
  templateUrl: './autocomplete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PmtAutocompleteComponent implements OnChanges, OnInit, OnDestroy {
  @Input() options: { label: string, value: number}[];
  @Input() placeholder: string;

  form: FormGroup;
  sortedOptions$: BehaviorSubject<{ label: string, value: number}[]> = new BehaviorSubject([]);
  unsubscribeSub$: Subject<boolean> = new Subject();

  constructor(private _fb: FormBuilder) { }

  ngOnChanges(ch: SimpleChanges): void {
    const { options } = ch;
    if (!!options && !!options.currentValue) {
      const sortedOptions = options.currentValue.sort((previousItem, currentItem) => {
        if (previousItem.label > currentItem.label) {
          return 1;
        }
        return -1;
      });
      this.sortedOptions$.next(sortedOptions);
    }
  }

  ngOnInit(): void {
    this.form = this._fb.group({
      'input': new FormControl('')
    });

    this.form.valueChanges.pipe(
      takeUntil(this.unsubscribeSub$)
    ).subscribe(formChanges => {
      const { input } = formChanges;
      const sortedOptions = this.options.sort((previousItem, currentItem) => {
        if (previousItem.label > currentItem.label) {
          return 1;
        }
        return -1;
      });
      if (!!input) {
          const updatedItems = sortedOptions.filter(item => item.label.toLowerCase().lastIndexOf(input.toLowerCase()) > -1);
          this.sortedOptions$.next(updatedItems);
      } else {
        this.sortedOptions$.next(sortedOptions);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeSub$.next(true);
  }

  handleSelection(selectedItem: MatAutocompleteSelectedEvent): void {
    const selectedText = selectedItem.option.viewValue;
    const inputControl = this.form.get('input');
    inputControl.patchValue(selectedText);
  }
}

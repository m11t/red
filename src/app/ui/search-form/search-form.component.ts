import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FhirResourceType, FhirSearchFn } from '@red-probeaufgabe/types';
import { Subscription } from 'rxjs';
import { Filter, SearchCriteria } from './search-form-interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;

  /**
   * Formgroup to search for patients and practitioners
   *
   * @type {FormGroup}
   * @memberof SearchFormComponent
   */
  formgroup: FormGroup = this.fb.group({
    search: this.fb.control(null, [Validators.pattern('[a-zA-Z0-9]*')]),
    searchFn: this.fb.control(FhirSearchFn.SearchAll)
  });

  /**
   * Choices for the user to filter by:
   * - Patient & Practitioner
   * - Patient
   * - Practitioner
   *
   * @type {Filter[]}
   * @memberof SearchFormComponent
   */
  filters: Filter[] = [
    { value: FhirSearchFn.SearchAll, label: 'Patient & Practitioner' },
    { value: FhirSearchFn.SearchPatients, label: FhirResourceType.Patient },
    { value: FhirSearchFn.SearchPractitioners, label: FhirResourceType.Practitioner }
  ]

  /**
   * [Output](https://angular.io/api/core/Output) of the current {@link SearchCriteria}
   *
   * @memberof SearchFormComponent
   */
  @Output() search = new EventEmitter<SearchCriteria>();

  constructor(private fb: FormBuilder) { }

  /**
   * Immediately after initial change detection:
   * - Subscribe to changes to the search form
   *
   * @memberof SearchFormComponent
   */
  ngOnInit(): void {
    this._subscription = this.formgroup.valueChanges.subscribe((criteria: SearchCriteria) => {
      if (this.formgroup.invalid) {
        return;
      }
      this.search.emit(criteria);
    });
  }

  /**
   * Immediately before destroying the component:
   * - Unsubsribe all Subscriptions
   *
   * @memberof SearchFormComponent
   */
  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
      this._subscription = null;
    }
  }

}

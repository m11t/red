import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap, tap } from 'rxjs/operators';
import { SiteTitleService } from '@red-probeaufgabe/core';
import { FhirSearchFn, IFhirPatient, IFhirPractitioner, IFhirSearchResponse } from '@red-probeaufgabe/types';
import { IUnicornTableColumn, SearchCriteria } from '@red-probeaufgabe/ui';
import { AbstractSearchFacadeService } from '@red-probeaufgabe/search';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  /**
   * [FormControl](https://angular.io/api/forms/FormGroup) for the current search criteria
   *
   * @type {FormControl}
   * @memberof DashboardComponent
   */
  currentSearchCriteria = new BehaviorSubject<SearchCriteria>({
    search: '',
    searchFn: FhirSearchFn.SearchAll
  } as SearchCriteria);

  // Init unicorn columns to display
  columns: Set<IUnicornTableColumn> = new Set<IUnicornTableColumn>([
    'number',
    'resourceType',
    'name',
    'gender',
    'birthDate',
  ]);
  isLoading = true;

  /*
   * Implement search on keyword or fhirSearchFn change
   **/
  search$: Observable<IFhirSearchResponse<IFhirPatient | IFhirPractitioner>> = this.currentSearchCriteria.pipe(
    switchMap((criteria: SearchCriteria) => this.searchFacade.search(criteria.searchFn, criteria.search)),
    catchError(this.handleError),
    tap((data) => {
      this.isLoading = false;
    })
  )

  entries$: Observable<Array<IFhirPatient | IFhirPractitioner>> = this.search$.pipe(
    map((data) => !!data && data.entry),
    startWith([]),
  );

  totalLength$ = this.search$.pipe(
    map((data) => !!data && data.total),
    startWith(0),
  );

  constructor(
    private router: Router,
    private siteTitleService: SiteTitleService, 
    private searchFacade: AbstractSearchFacadeService
  ) {
    this.siteTitleService.setSiteTitle('Dashboard');
  }

  private handleError(): Observable<IFhirSearchResponse<IFhirPatient | IFhirPractitioner>> {
    return of({ entry: [], total: 0 });
  }

  /**
   * Navigate to the detail of the Patient or Practitioner
   *
   * @param {(IFhirPatient | IFhirPractitioner)} row
   * @memberof DashboardComponent
   */
  goTo(row: IFhirPatient | IFhirPractitioner) {
    this.router.navigate(['detail', row.resourceType.toLowerCase(), row.id]);
  }
}

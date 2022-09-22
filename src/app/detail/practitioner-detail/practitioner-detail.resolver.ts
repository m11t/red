import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AbstractSearchFacadeService, FhirUtilService } from '@red-probeaufgabe/search';
import { IFhirPractitioner, IPreparedIFhirPractitioner } from '@red-probeaufgabe/types';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Resolve the Practitioner from the Route parameters and provide in routes data
 *
 * @export
 * @class PractitionerDetailResolver
 * @implements {Resolve<IPreparedIFhirPractitioner>}
 */
@Injectable()
export class PractitionerDetailResolver implements Resolve<IPreparedIFhirPractitioner> {

  constructor(
    private service: AbstractSearchFacadeService,
    private utils: FhirUtilService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPreparedIFhirPractitioner> {
    return this.service.findPractitionerById(route.paramMap.get('id')).pipe(
      map((practitioner: IFhirPractitioner) => this.utils.prepareData(practitioner) as IPreparedIFhirPractitioner)
    );
  }
}

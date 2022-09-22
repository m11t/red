import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AbstractSearchFacadeService, FhirUtilService } from '@red-probeaufgabe/search';
import { IFhirPatient, IPreparedIFhirPatient } from '@red-probeaufgabe/types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Resolve the Patient from the Route parameters and provide in routes data
 *
 * @export
 * @class PatientDetailResolver
 * @implements {Resolve<IPreparedIFhirPatient>}
 */
@Injectable()
export class PatientDetailResolver implements Resolve<IPreparedIFhirPatient> {

  constructor(
    private service: AbstractSearchFacadeService,
    private utils: FhirUtilService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPreparedIFhirPatient> {
    return this.service.findPatientById(route.paramMap.get('id')).pipe(
      map((patient: IFhirPatient) => this.utils.prepareData(patient) as IPreparedIFhirPatient)
    );
  }
}

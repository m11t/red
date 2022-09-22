import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PractitionerDetailComponent } from './practitioner-detail/practitioner-detail.component';
import { AbstractSearchFacadeService, SearchFacadeService } from '@red-probeaufgabe/search';
import { PatientDetailResolver } from './patient-detail/patient-detail.resolver';
import { PractitionerDetailResolver } from './practitioner-detail/practitioner-detail.resolver';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    PatientDetailComponent,
    PractitionerDetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    PatientDetailResolver,
    PractitionerDetailResolver,
    { provide: AbstractSearchFacadeService, useClass: SearchFacadeService }
  ],
})
export class DetailModule { }

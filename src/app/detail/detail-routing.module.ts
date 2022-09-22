import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientDetailResolver } from './patient-detail/patient-detail.resolver';
import { PractitionerDetailComponent } from './practitioner-detail/practitioner-detail.component';
import { PractitionerDetailResolver } from './practitioner-detail/practitioner-detail.resolver';

const routes: Routes = [
  {
    path: 'patient/:id',
    component: PatientDetailComponent,
    resolve: { patient: PatientDetailResolver }
  },
  {
    path: 'practitioner/:id',
    component: PractitionerDetailComponent,
    resolve: { practitioner: PractitionerDetailResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }

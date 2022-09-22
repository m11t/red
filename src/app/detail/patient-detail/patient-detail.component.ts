import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPreparedIFhirPatient } from '@red-probeaufgabe/types';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  patient: IPreparedIFhirPatient;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.patient = this.route.snapshot.data.patient;
  }

}

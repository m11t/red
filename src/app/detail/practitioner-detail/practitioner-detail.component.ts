import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPreparedIFhirPractitioner } from '@red-probeaufgabe/types';

@Component({
  selector: 'app-practitioner-detail',
  templateUrl: './practitioner-detail.component.html',
  styleUrls: ['./practitioner-detail.component.scss']
})
export class PractitionerDetailComponent implements OnInit {

  practitioner: IPreparedIFhirPractitioner;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.practitioner = this.route.snapshot.data.practitioner;
  }

}

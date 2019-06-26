import { Component, OnInit } from '@angular/core';

import { INSTRUMENTS } from '../instruments/mock-instruments';
import { InstrumentInterface } from '../interfaces/instrument-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-instrument',
  templateUrl: './individual-instrument.component.html',
  styleUrls: ['./individual-instrument.component.css']
})
export class IndividualInstrumentComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  instrument: InstrumentInterface;

  ngOnInit() {
    const name = this.router.snapshot.paramMap.get('name');
    this.instrument = INSTRUMENTS.find(instrument => instrument.name === name);
  }

}

import { Component, OnInit } from '@angular/core';

import { INSTRUMENTS } from '../instruments/mock-instruments';
import { InstrumentInterface } from '../interfaces/instrument-interface';

@Component({
  selector: 'app-individual-instrument',
  templateUrl: './individual-instrument.component.html',
  styleUrls: ['./individual-instrument.component.css']
})
export class IndividualInstrumentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { InstrumentInterface } from '../interfaces/instrument-interface';
import { INSTRUMENTS } from '../instruments/mock-instruments';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  instruments: InstrumentInterface[] = INSTRUMENTS;

  constructor(private route: ActivatedRoute) { }

  family: string | boolean;

  renderInstruments() {
    this.family = this.route.snapshot.queryParamMap.get("family");
    if (this.family) {
      this.instruments = INSTRUMENTS.filter(instrument => instrument.family === this.family);
    } else {
      this.family = false;
      this.instruments = INSTRUMENTS;
    }
  }

  ngOnInit() {
    this.renderInstruments();
  }
  

  }

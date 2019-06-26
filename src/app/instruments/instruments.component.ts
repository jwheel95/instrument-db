import { Component, OnInit } from '@angular/core';

import { InstrumentInterface } from '../interfaces/instrument-interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  instruments: InstrumentInterface[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}

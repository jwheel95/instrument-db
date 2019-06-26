import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualInstrumentComponent } from './individual-instrument.component';

describe('IndividualInstrumentComponent', () => {
  let component: IndividualInstrumentComponent;
  let fixture: ComponentFixture<IndividualInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

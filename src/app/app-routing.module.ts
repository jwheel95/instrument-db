import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentsComponent } from './instruments/instruments.component';
import { IndividualInstrumentComponent } from './individual-instrument/individual-instrument.component';

const routes: Routes = [
  {path: '', redirectTo: 'instruments', pathMatch: 'full'},
  {path: 'instruments', component: InstrumentsComponent},
  {path: 'instrument/:name', component: IndividualInstrumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

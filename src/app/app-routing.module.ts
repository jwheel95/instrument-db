import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentsComponent } from './instruments/instruments.component';

const routes: Routes = [
  {path: '', redirectTo: 'instruments', pathMatch: 'full'},
  {path: 'instruments', component: InstrumentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentEnvelopeComponent } from "./components/pages/equipment-envelope/equipment-envelope.component";
import { ProductionEnvelopeComponent } from "./components/pages/production-envelope/production-envelope.component";
import { CompletionEnvelopeComponent } from "./components/pages/completion-envelope/completion-envelope.component";
import { MasterEnvelopeComponent } from "./components/pages/master-envelope/master-envelope.component";
import { HornerPlotComponent } from "./components/pages/horner-plot/horner-plot.component";

const routes: Routes = [
  { path: 'horner-plot', component: HornerPlotComponent },
  { path: 'production-envelope', component: ProductionEnvelopeComponent },
  { path: 'completion-envelope', component: CompletionEnvelopeComponent },
  { path: 'master-envelope', component: MasterEnvelopeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

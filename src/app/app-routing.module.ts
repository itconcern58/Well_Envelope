import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentEnvelopeComponent } from "./components/pages/equipment-envelope/equipment-envelope.component";
import { ProductionEnvelopeComponent } from "./components/pages/production-envelope/production-envelope.component";
import { CompletionEnvelopeComponent } from "./components/pages/completion-envelope/completion-envelope.component";


const routes: Routes = [
  { path: 'equipment-envelope', component: EquipmentEnvelopeComponent },
  { path: 'production-envelope', component: ProductionEnvelopeComponent },
  { path: 'completion-envelope', component: CompletionEnvelopeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

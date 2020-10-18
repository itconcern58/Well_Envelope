import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule} from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EquipmentEnvelopeComponent } from './components/pages/equipment-envelope/equipment-envelope.component';
import { ProductionEnvelopeComponent } from './components/pages/production-envelope/production-envelope.component';
import { CompletionEnvelopeComponent } from './components/pages/completion-envelope/completion-envelope.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentEnvelopeComponent,
    ProductionEnvelopeComponent,
    CompletionEnvelopeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [HttpClient, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

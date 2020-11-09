import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { HighchartsChartComponent } from 'highcharts-angular';


const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    HighchartsChartComponent
  ],
  imports: [

    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
})

export class ModalModule { }
import { Component, OnInit, ModuleWithProviders,  Input, Output, EventEmitter, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AllModules, Module } from '@ag-grid-enterprise/all-modules';
import { ModuleRegistry, RowNode } from "@ag-grid-community/core";

ModuleRegistry.registerModules(AllModules);

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { MatInputModule } from "@angular/material"

@Component({
  selector: 'app-equipment-envelope',
  templateUrl: './equipment-envelope.component.html',
  styleUrls: ['./equipment-envelope.component.scss']
})

export class EquipmentEnvelopeComponent implements OnInit {
         
 
  number1: string = '1';
  number2: string;
  number3: string ='1';
  number4: string ='1';
  number5: string ='1';
  result: number;

  calcPYp() {
    this.result = 2*parseFloat(this.number1)*(parseFloat(this.number2)-1)/parseFloat(this.number2)*parseFloat(this.number2)*parseInt(this.number3)*parseInt(this.number4)*parseInt(this.number5);
  }

  calcPp() {
    this.result = parseFloat(this.number1)*(parseFloat(this.number3)/parseFloat(this.number2)-parseFloat(this.number4)) - parseFloat(this.number5);
  }

  calcPT() {
    this.result = parseFloat(this.number1)*(parseFloat(this.number3)/parseFloat(this.number2)-parseFloat(this.number4));
  }

  calcPE() {
    this.result = 46.95*Math.pow(10,6)/(parseFloat(this.number2)*(Math.pow((parseFloat(this.number2)-1), 2)));
  }

  ngOnInit() {
  }

}

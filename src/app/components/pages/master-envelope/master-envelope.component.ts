import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AllModules, Module } from '@ag-grid-enterprise/all-modules';
import { ModuleRegistry, RowNode } from "@ag-grid-community/core";

ModuleRegistry.registerModules(AllModules);

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { EquipmentEnvelopeComponent } from './../equipment-envelope/equipment-envelope.component' 

@Component({
  selector: 'app-master-envelope',
  templateUrl: './master-envelope.component.html',
  styleUrls: ['./master-envelope.component.scss']
})
export class MasterEnvelopeComponent implements OnInit {
  public gridApi;
  public gridColumnApi;

  public modules: Module[] = [
    ClientSideRowModelModule,
    RichSelectModule,
    MasterDetailModule,
    MenuModule,
    ColumnsToolPanelModule,
  ];
  public columnDefs;
  public defaultColDef;
  public detailCellRendererParams;
  public rowData: any;
  
  constructor(private http: HttpClient, public equipmentEnvelopeComponent: EquipmentEnvelopeComponent ) {
    console.log(this.equipmentEnvelopeComponent.calcPYp());
    this.columnDefs = [
      { headerName: "Well Operating Envelope Dashboard", field: "well_envelope",
      children: [
        { headerName: 'Envelope Details', field: "envelope_details",
         children: [
          { 
            headerName: 'Envelope', field: 'envelope',
            cellEditor: 'agRichSelectCellEditor',
            cellEditorParams: {
            values: ["", 'Equipment Envelope', 'Production Envelope', 'Well Integrity/Completion', 'Reservoir Engineering'],
          },
        },
          { 
            headerName: 'Sign Post', field: 'sign_post',
            cellEditor: 'agRichSelectCellEditor',
            cellEditorParams: {
            values: ["YS Collapse Pressure", 'Pls Collapse Pressure', 'Els Collapse Pressure', 'Trs Collapse Pressure', 'A Annulus Pressure',
          'B Annulus Pressure', 'Erosion Limit'],
          
          },
        },
          { headerName: 'Unit', field: 'unit',
          cellEditor: 'agRichSelectCellEditor',
            cellEditorParams: {
            values: ["psi", 'MMscf/d', 'bbl/d', 'ft/s', 'Deg F', 'bbl/psi', 'MD-ft', 'Trend', 'ND'],
            }
        
        },
          { headerName: 'Sign Post Limit', field: 'sign_Post_Limit', valueGetter: this.signpostLimitValueGetter,
          cellStyle: { backgroundColor:"red", color:"white"} },
          { headerName: 'Sign Post Flag', field: 'sign_Post_Flag', 
          cellStyle: { backgroundColor:"yellow"}
        },
          { headerName: 'Current Period Flow Conditions', field: 'current_period'},
          { headerName: 'Next Period Flow Conditions', field: 'next_period' },
          { headerName: 'Commentary', field: 'commentary' },
          { headerName: 'Sign Post Owner', field: 'sign_Post_Owner' }  

         ]
      },
      { headerName: 'Well Details', field: "well_details",
      children: [
        
        {
          headerName: "Well",
          field: 'well',
          columnGroupShow: 'closed',
          cellEditor: 'agRichSelectCellEditor',
          flex:1,
          width: 50,
          editable: true,
          resizable: true, 
          sortable: true,
          suppressSizeToFit: true,
          cellEditorParams: {
          values: ['WELL-1', 'WELL-2'],
          },  
        }

      ]
    }

      ]
    }
  ]

    this.defaultColDef = { 
      flex: 1,
      minWidth:100,
      editable: true,
      resizable: true, 
      sortable: true,
      cellStyle: {fontSize: "11px" }
    };

    //this.gridApi.sizeColumnsToFit();

    this.detailCellRendererParams = {
      detailGridOptions: {
        rowSelection: 'multiple',
        suppressRowClickSelection: true,
        enableRangeSelection: true,
        pagination: true,
        paginationAutoPageSize: true,
      },
      };
    }
    
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
  
      this.http
        .get(
          'assets/mock/test_data.json'
        )
        .subscribe((data) => {
          this.rowData = data;
        });
    }

    signpostLimitValueGetter(params) { 
        return 2*params.data.yield_Strength*((params.data.d_t_ratios-1)/(params.data.d_t_ratios)*(params.data.d_t_ratios));
      }

  ngOnInit() {
  }

}
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

@Component({
  selector: 'app-equipment-envelope',
  templateUrl: './equipment-envelope.component.html',
  styleUrls: ['./equipment-envelope.component.scss']
})

export class EquipmentEnvelopeComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  public modules: Module[] = [
    ClientSideRowModelModule,
    RichSelectModule,
    MasterDetailModule,
    MenuModule,
    ColumnsToolPanelModule,
  ];
  private columnDefs;
  private defaultColDef;
  private detailCellRendererParams;
  private rowData: any;
  
  constructor(private http: HttpClient) {
    
    this.columnDefs = [
      { headerName: "EQUIPMENT ENVELOPE", field: "title",
        children: [
          { headerName: "Envelope Details", field: "title",
            children: [
              { 
                headerName: 'Well', field: 'well',
                cellEditor: 'agRichSelectCellEditor',
                cellEditorParams: {
                values: ['Well-1', 'Well-2', 'Well-3', 'Well-4', 'Well-5'],
              },
            },
              { headerName: 'Limit', field: 'limit'},
              { headerName: 'Unit', field: 'unit'},
                  { 
                    headerName: 'Casing Size',
                    field: 'production_Casing_Size',
                    width: 70,
                    cellEditor: 'agRichSelectCellEditor',
                    cellEditorParams: {
                    values: ['4.5', '5.0', '5.5', '7', '9.375'],
                    },
                  },
                  { 
                    headerName: 'Casing Grade',
                    field: 'production_Casing_Grade',
                    cellEditor: 'agRichSelectCellEditor',
                    cellEditorParams: {
                    values: ['H-40', 'H-50', 'J-55', 'K-55', 'K-60', 'K-70',	'C-75 &E',	'L-80',
                      'N-80',	'C-90',	'C-95', 'T-95 & X',	'C-100',	'P-105 & G',	'P-110',	'P-120',
                        'Q-125',	'Q-130',	'S-135',	'S-140',	'S-150', 'S-155',	'S-160',	'S-170',
                          'S-180',	'V-150',	'S-95'
                    ],
                    }
                },
              { 
                headerName: 'Yield Strength',
                field: 'yield_Strength',
                cellEditor: 'agRichSelectCellEditor',
                cellEditorParams: {
                values: [40000, 50000, 55000, 60000, 700000,	75000,	80000,
                  90000, 95000, 100000,	105000,	110000,	120000, 125000,	130000,
                  135000, 140000,	150000, 155000,	160000,	170000, 180000
                ],
              }
            },
            { 
              headerName: 'D/t',
              field: 'd_t_ratios',
              cellEditor: 'agRichSelectCellEditor',
              cellEditorParams: {
                values: [16.40, 15.24, 14.81, 14.44, 13.85, 13.60, 13.38,
                13.01, 12.85, 12.70, 12.57, 12.44, 12.21, 12.11, 12.02, 11.92,
              11.84, 11.67, 11.59, 11.52, 11.37, 11.23]
              }
          },
              { headerName: 'Sign Post Limit', field: 'sign_Post_Limit', valueGetter: this.signpostLimitValueGetter },
              { headerName: 'Sign Post Flag', field: 'sign_Post_Flag' },
              { headerName: 'Commentary', field: 'commentary' },
              { headerName: 'Sign Post Owner', field: 'sign_Post_Owner' }  
            ]
          },
          { 
            headerName: "Well Details", field: "well_details",
            children: [
              {
                headerName: "Fluid Type",
                field: 'fluid_Type',
                cellEditor: 'agRichSelectCellEditor',
                flex:1,
                minWidth: 130,
                editable: true,
                resizable: true, 
                sortable: true,
                cellEditorParams: {
                values: ['Oil', 'Gas'],
                },
              },
              { 
                headerName: "Flow Type",
                field: 'flow_Type',
                columnGroupShow: 'closed',
                flex:1,
                minWidth: 130,
                editable: true,
                resizable: true, 
                sortable: true,
                cellEditor: 'agRichSelectCellEditor',
                cellEditorParams: {
                values: ['Natural', 'Artificial'],
                },
              },
              { 
                headerName: "Sand Control Type",
                field: "sand_Control_Type", 
                columnGroupShow: 'closed',
                flex:1,
                minWidth: 130,
                editable: true,
                resizable: true, 
                sortable: true,
                cellEditor: 'agRichSelectCellEditor',
                cellEditorParams: {
                values: ['ESS', 'SCON', 'Case Perforated', 'Gravel Pack Wirewrap Screen'],
              },
            },
              { 
                headerName: "Tubing Size",
                field: 'tubing_Size',
                columnGroupShow: 'closed',
                flex:1,
                minWidth: 130,
                editable: true,
                resizable: true, 
                sortable: true,
                cellEditor: 'agRichSelectCellEditor',
                cellEditorParams: {
                values: ['2.375', '2.75', '3.5', '4.0', '4.5', '5.5', '7'],
                },
              },
              { 
                headerName: "Tubing Grade",
                field: 'tubing_Grade',
                columnGroupShow: 'closed',
                flex:1,
                minWidth: 130,
                editable: true,
                resizable: true, 
                sortable: true,
                cellEditor: 'agRichSelectCellEditor',
                cellEditorParams: {
                values: ['H-40', 'J-55', 'C-75', 'N-80', 'P-105'],
                }, 
              },
              { headerName: "Pressure Limit For Tubing", field: 'pressure_Limit_For_Tubing', columnGroupShow: 'closed'},
            ]
          }
        ],
      },
    ]
  
    this.defaultColDef = { 
      flex: 1,
      minWidth:100,
      editable: true,
      resizable: true, 
      sortable: true,
      cellStyle: {fontSize: "11px" }
    };

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

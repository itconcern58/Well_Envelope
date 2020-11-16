import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';

import { AllModules, Module } from '@ag-grid-enterprise/all-modules';
import { ModuleRegistry } from "@ag-grid-community/core";

ModuleRegistry.registerModules(AllModules);

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyModalComponent } from './../my-modal/my-modal.component';
import { ModalPPComponent } from './../modal-pp/modal-pp.component';
import { ModalPEComponent } from './../modal-pe/modal-pe.component';
import { ModalPTComponent } from './../modal-pt/modal-pt.component';
import { ModalVEComponent } from './../modal-ve/modal-ve.component';
import { ModalPbComponent } from './../modal-pb/modal-pb.component';
import { ModalHPComponent } from './../modal-hp/modal-hp.component';
import { ModalAAPComponent } from './../modal-a-ap/modal-a-ap.component';
import { ModalBAPComponent } from './../modal-b-ap/modal-b-ap.component';
import { ModalVCComponent } from './../modal-vc/modal-vc.component';
import { ModalVSComponent } from './../modal-vs/modal-vs.component';
import { ModalPrComponent } from './../modal-pr/modal-pr.component';
import { ModalKhComponent } from './../modal-kh/modal-kh.component';
import { ModalDdihrComponent } from './../modal-ddihr/modal-ddihr.component';
import { ModalSkComponent } from './../modal-sk/modal-sk.component';
import { ModalDdComponent } from './../modal-dd/modal-dd.component';
import { ModalPiComponent }  from './../modal-pi/modal-pi.component';
import { ModalPiNextComponent }  from './../modal-pi-next/modal-pi-next.component';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import regression from 'regression';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface EnvelopeNode {
  name: string;
  children?: EnvelopeNode[];
}

const TREE_DATA: EnvelopeNode[] = [
  {
    name: 'Yield Strength Collapse (PYp)',
    children: [
      {name: 'Yield Strength (Yp)'},
      {name: 'D/t Ratios (D/t)'}
    ]
  }, {
    name: 'Plastic Collapse (Pp)',
    children: [
      { name: 'Yield Strength (Yp)' },
      {name: 'D/t Ratios (D/t)'},
      {name: 'A Factor (A)'},
      {name: 'B Factor (B)'},
      {name: 'C Factor (C)'}
    ]
  }
]

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-production-envelope',
  templateUrl: './production-envelope.component.html',
  styleUrls: ['./production-envelope.component.scss']
})
export class ProductionEnvelopeComponent implements OnInit {
  
  // Modal ts file
  constructor(public dialog: MatDialog) { this.dataSource.data = TREE_DATA; }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '250px',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
  
  name: string;
  color: string;
  /*---------------------------------------*/
   open_1Dialog(): void {
    const dialogRef = this.dialog.open(ModalPEComponent, {
      width: '250px',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }

  /*---------------------------------------*/
  open_2Dialog(): void {
    const dialogRef = this.dialog.open(ModalPPComponent, {
      width: '250px',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }

    /*---------------------------------------*/
    open_3Dialog(): void {
      const dialogRef = this.dialog.open(ModalPTComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }
  
        /*---------------------------------------*/
        open_4Dialog(): void {
          const dialogRef = this.dialog.open(ModalVEComponent, {
            width: '250px',
            data: { name: this.name, color: this.color }
          });
      
          dialogRef.afterClosed().subscribe(res => {
            this.color = res;
          });
        }
           /*---------------------------------------*/
           open_5Dialog(): void {
            const dialogRef = this.dialog.open(ModalPbComponent, {
              width: '250px',
              data: { name: this.name, color: this.color }
            });
        
            dialogRef.afterClosed().subscribe(res => {
              this.color = res;
            });
          }

  /*---------------------------------------*/
  open_6Dialog(): void {
    const dialogRef = this.dialog.open(ModalHPComponent, {
      width: '250px',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }

   /*---------------------------------------*/
   open_7Dialog(): void {
    const dialogRef = this.dialog.open(ModalAAPComponent, {
      width: '250px',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }

  /*---------------------------------------*/
  open_8Dialog(): void {
    const dialogRef = this.dialog.open(ModalBAPComponent, {
      width: '250px',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }

  /*---------------------------------------*/
  open_9Dialog(): void {
    const dialogRef = this.dialog.open(ModalDdComponent, {
      width: '250px',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
/*---------------------------------------*/
open_10Dialog(): void {
  const dialogRef = this.dialog.open(ModalDdihrComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}

/*---------------------------------------*/
open_11Dialog(): void {
  const dialogRef = this.dialog.open(ModalPiComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}


    /*---------------------------------------*/
    open_12Dialog(): void {
      const dialogRef = this.dialog.open(ModalVCComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }
    /*---------------------------------------*/
    open_13Dialog(): void {
      const dialogRef = this.dialog.open(ModalVSComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }

     /*---------------------------------------*/
     open_14Dialog(): void {
      const dialogRef = this.dialog.open(ModalPrComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }
 
      /*---------------------------------------*/
      open_15Dialog(): void {
        const dialogRef = this.dialog.open(ModalKhComponent, {
          width: '250px',
          data: { name: this.name, color: this.color }
        });
    
        dialogRef.afterClosed().subscribe(res => {
          this.color = res;
        });
      }
       /*---------------------------------------*/
       open_16Dialog(): void {
        const dialogRef = this.dialog.open(ModalSkComponent, {
          width: '250px',
          data: { name: this.name, color: this.color }
        });
    
        dialogRef.afterClosed().subscribe(res => {
          this.color = res;
        });
      }

       /*---------------------------------------*/
       open_21Dialog(): void {
        const dialogRef = this.dialog.open(ModalPiNextComponent, {
          width: '250px',
          data: { name: this.name, color: this.color }
        });
    
        dialogRef.afterClosed().subscribe(res => {
          this.color = res;
        });
      }
  //____________________________________________________________________//
  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;

    }
  }
  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  private doCalculation(op , secondOp){
    switch (op){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp; 
      case '=':
      return secondOp;
    }
  }
  public getOperation(op: string){
    console.log(op);

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
  }

  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  //______Add Remove Section"________________
  private _transformer = (node: EnvelopeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
//____________________________________________________________________________________

  limits : string [] =
  [
    'Yp',
    'D/t',
    'A',
    'B',
    'C',
    'F',
    'G',
    'pm',
    'c'
  ];

  
  onAdd() {
     // this.lims.push(lim);
     window.onload;
    }

  onRemove(limit) {
   let index= this.limits.indexOf(limit);
   this.limits.splice(index,1);
  }

  //________________Drag and Drop_______________________
  EnvelopeItems : string [] =
  [
      'Yield Strength Collapse - PYp',
      "   --- First Item: Yield Strength - Yp",
      "   --- Second Item: D/t Ratios - D/t",
    'D/t',
    'A',
    'B',
    'C',
    'F',
    'G',
    'pm',
    'c'
  ];

  Movies = [
    'Blade Runner',
    'Cool Hand Luke',
    'Heat',
    'Juice',
    'The Far Side of the World',
    'Morituri',
    'Napoleon Dynamite',
    'Pulp Fiction'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.Movies, event.previousIndex, event.currentIndex);
  }

  // Transfer Items Between Lists
  MoviesList = [
    'YIELD STRENGTH COLLAPSE (PYp):- Calc-Items: Yield Strength (Yp), Dt ratio (D/t)',
    'PLASTIC COLLASPE (Pp) :- Calc-Items: Yield Strength (Yp), Dt ratio (D/t), A Factor (A), B Factor (B), C Factor (C)',
    'TRANSITION COLLASPE (PT) :- Calc-Items: Yield Strength (Yp), Dt ratio (D/t), F Factor (F), G Factor (G)',
    'ELASTIC COLLASPE (PE) :- Calc-Items: Yield Strength (Yp), Dt ratio (D/t)',
    'EROSION VELOCITY (Ve) :- Calc-Items: C Factor (c), fluid density (pm)',
    'BURST PRESSURE (PB):- Calc-Items:  Yield Strength (Yp), nominal wall thickness (t), in.,D = nominal outside pipe diameter, in.' ,
    'HYDROSTATIC HEAD (P):- Calc-Items:  Height of the hydrostatic Head (h), accelaration of graviyt (g), density (pm)' ,
    'A-ANNULUS PRESSURE (A-Ap) : Calc-Items: Burst Pressure (Pb), fluid density (pm), hydrostatic head',
    'B-ANNULUS PRESSURE (B-Ap) : Calc-Items: Burst Pressure (Pb), fluid density (pm), hydrostatic head',
    'TOTAL DRAWDOWN (DD) : Calc-Items: Reservoir Pressure (Pr), Flowing Pressure(Pwf)',
    'DRAWDOWN 1 HOUR (DD1hr): Calc-Items: Pressure build up after 1hr (P1hr), Flowing Pressure(Pwf)',  
    'PRODUCTIVITY INDEX: Calc-Items: Flow Rate (Q), Total Drawdown (DD)',
    'CASING ENTRANCE VELOCITY (ft/sec) (Vc): Well Discharge (Q-gpm), radius of casing perforation -in (r),  length of well cased perf -ft- (b), percentage open area of the casing (P)',
    'SCREEN ENTRANCE VELOCITY (ft/sec) (Vc): Well Discharge (Q-gpm), radius of well screen -in (r),  length of well screen -ft- (b), percentage open area of the screen (P)', 
    'RESERVOIR PRESSURE (Pr): yIntercept of the straightline in the Horner Plot',    
    'PERMEABILITY-HEIGHT (KH): Flow Rate (q), Viscocity (u), Oil Formation Volune Factor (Bo), Slope (m)',
    'SKIN (SK): Flow PRESSURE 1HR (Pwf1hr), Flow Pressure (Pwf), Compressibility (c), Viscocity (u), Wellbore radius (rw), Porosity(phi)',   
  ];

  MoviesWatched = [
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  
  number1 : string;
  resultPr: number;
  
  pressData= [4675, 4705, 4733, 4750, 4757, 4761, 4763, 4766, 4770, 4773, 4775, 4777];
  timeData = [97.6, 98.1, 98.26, 98.6, 99.1, 99.6, 100.1, 100.6, 101.6, 103.6, 105.6, 107.6, 109.6 ];
  initialTime = [97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6 ];
  
  deltaTimeData = this.timeData.map((n,i) => n -this.initialTime[i]);
  derivativeTime = this.timeData.map((n, i) => n/this.deltaTimeData[i]);
  logDerivativeTime = this.derivativeTime.map((n,i) =>Math.log(+this.derivativeTime[i]).toFixed(2));
  logDerivativeTime_1 = this.logDerivativeTime.shift();
  deltaLogDerivativeTime = this.logDerivativeTime.slice(1);
  
  /* (x-x1) in the regression equation-----*/
  DeltaX = (this.logDerivativeTime.map((n, i) => (+n/+this.deltaLogDerivativeTime[i])));
  popped = this.DeltaX.pop()

   /* (y-y1) in the regression equation-----*/
   deltaPressData = this.pressData.slice(1)
   DeltaY = (this.deltaPressData.map((n, i) => n-this.pressData[i]));
   poppedY = this.DeltaY.pop()

   /* slope of straight line ******/
   SlopeYX = this.DeltaY.map((n,i)=> n/this.DeltaX[i]);

   /* return-array-elements-larger-than-a-number */
   isBigEnough(value) {
     return function(element, index, array) {
       return (element <= value);
     }
   }
   filteredSlopeYX = this.SlopeYX.filter(this.isBigEnough(4));

   /* PressData for line */
   pressDataForLine = [this.pressData[this.filteredSlopeYX.length], this.pressData[this.filteredSlopeYX.length+5]];

    /* logDerivativeTime for line */
  logDerivativeTimeForLine = [this.logDerivativeTime[this.filteredSlopeYX.length], this.logDerivativeTime[this.filteredSlopeYX.length+6]];

  pressDataWorkSpace = this.pressData[this.pressData.length-2] - this.pressData[this.pressData.length-6];
  timeDataWorkSpace = +this.logDerivativeTime[this.logDerivativeTime.length-6] - +this.logDerivativeTime[this.logDerivativeTime.length-1];


  SlopeWorkSpace = this.pressDataWorkSpace/this.timeDataWorkSpace;
  Intercept = this.pressData[this.pressData.length-6]-+this.logDerivativeTime[this.logDerivativeTime.length-6]*this.SlopeWorkSpace

  PressDataForLineWorkSpace = this.logDerivativeTime.map((n,i)=> +n*this.SlopeWorkSpace + this.Intercept);

  dataWork = this.PressDataForLineWorkSpace.sort();
  newArray = [[this.logDerivativeTime[0], this.dataWork[0]], [this.logDerivativeTime[this.logDerivativeTime.length-1], this.dataWork[this.logDerivativeTime.length-1]]];

  result = regression.linear(this.newArray, {precision: 8});
  gradient =this.result.equation[0];
  yIntercept = this.result.equation[1];
  
  title = 'Horner Plot';
  
   /*data = [{
           name: 'Pressure',
           data: [4675, 4705, 4733, 4750, 4757, 4761, 4763, 4766, 4770, 4773, 4775, 4777]
        },
        {
           data: this.pressDataForLine
        }
     ];
  */
   highcharts = Highcharts;
   chartOptions = {   
     chart: {
        type: "line"
     },
     title: {
        text: "Horner Plot"
     },
     xAxis:[   {
       title: {
       text:"Log of time derivative"
      },
    },
      {
        gridLineWidth: 0,
        categories:this.logDerivativeTime,
        crosshair:true,
     },
     {
        gridLineWidth: 1,
        categories:this.logDerivativeTimeForLine,
        opposite:true
     }
  ],
     yAxis: {          
        title:{
           text:"Pressure"
        } 
     },
     series: [{
        name: "Raw Pressure Data",
        data:[4675, 4705, 4733, 4750, 4757, 4761, 4763, 4766, 4770, 4773, 4775, 4777],
        type: "line"
     },
     {
        name: "Pressure Calculated from Straight Line",
        data: this.PressDataForLineWorkSpace,
        type: "line"
     }
  ]
   };

  ngOnInit() {
  console.log(this.PressDataForLineWorkSpace.sort())    
  }

}


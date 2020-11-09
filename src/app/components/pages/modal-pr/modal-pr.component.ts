import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import regression from 'regression';

@Component({
  selector: 'app-modal-pr',
  templateUrl: './modal-pr.component.html',
  styleUrls: ['./modal-pr.component.scss']
})
export class ModalPrComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultPr: number;

  constructor(
    public dialogRef: MatDialogRef<ModalPrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  pressData= [4675, 4705, 4733, 4750, 4757, 4761, 4763, 4766, 4770, 4773, 4775, 4777];
  timeData = [97.6, 98.1, 98.26, 98.6, 99.1, 99.6, 100.1, 100.6, 101.6, 103.6, 105.6, 107.6, 109.6 ];
  initialTime = [97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6 ];
  
  deltaTimeData = this.timeData.map((n,i) => n -this.initialTime[i]);
  derivativeTime = this.timeData.map((n, i) => n/this.deltaTimeData[i]);
  logDerivativeTime = this.derivativeTime.map((n,i) =>Math.log(this.derivativeTime[i]));
  logDerivativeTime_1 = this.logDerivativeTime.shift();
  deltaLogDerivativeTime = this.logDerivativeTime.slice(1);
  
  /* (x-x1) in the regression equation-----*/
  DeltaX = (this.logDerivativeTime.map((n, i) => n/this.deltaLogDerivativeTime[i]));
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
  timeDataWorkSpace = this.logDerivativeTime[this.logDerivativeTime.length-6] - this.logDerivativeTime[this.logDerivativeTime.length-1];


  SlopeWorkSpace = this.pressDataWorkSpace/this.timeDataWorkSpace;
  Intercept = this.pressData[this.pressData.length-6]-this.logDerivativeTime[this.logDerivativeTime.length-6]*this.SlopeWorkSpace

  PressDataForLineWorkSpace = this.logDerivativeTime.map((n,i)=> n*this.SlopeWorkSpace + this.Intercept);
  dataWork = this.PressDataForLineWorkSpace.sort();
  newArray = [[this.logDerivativeTime[0], this.dataWork[0]], [this.logDerivativeTime[this.logDerivativeTime.length-1], this.dataWork[this.logDerivativeTime.length-1]]];

  result = regression.linear(this.newArray, {precision: 8});
  gradient =this.result.equation[0];
  yIntercept = this.result.equation[1];

  calcPr() {
    this.resultPr = this.yIntercept;
    }


  ngOnInit() {
  }

}

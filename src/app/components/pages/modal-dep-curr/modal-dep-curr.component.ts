import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import regression from 'regression';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-dep-curr',
  templateUrl: './modal-dep-curr.component.html',
  styleUrls: ['./modal-dep-curr.component.scss']
})
export class ModalDepCurrComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultDep: number;
  resultDepCurr: number;

  constructor(
    public dialogRef: MatDialogRef<ModalDepCurrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /**----Current Flow Condition ***/
/**---------------------------- */
currentPressureData= [4675, 4705, 4733, 4750, 4757, 4761, 4763, 4766, 4770, 4773, 4775, 4777];
currentTimeData = [97.6, 98.1, 98.26, 98.6, 99.1, 99.6, 100.1, 100.6, 101.6, 103.6, 105.6, 107.6, 109.6 ];
currentInitialTime = [97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6 ];

// Generating log of derivative of time
deltaCurrentTimeData = this.currentTimeData.map((n,i) => n -this.currentInitialTime[i]);
derivativeCurrentTime = this.currentTimeData.map((n, i) => n/this.deltaCurrentTimeData[i]);
logDerivativeCurrentTime = this.derivativeCurrentTime.map((n,i) =>Math.log(this.derivativeCurrentTime[i]));
logDerivativeCurrentTimeShift = this.logDerivativeCurrentTime.shift();
deltaLogDerivativeCurrentTime = this.logDerivativeCurrentTime.slice(1);

/* (x-x1) in the regression equation-----*/
CurrentDeltaX = (this.logDerivativeCurrentTime.map((n, i) => n/this.deltaLogDerivativeCurrentTime[i]));
CurrentPopped = this.CurrentDeltaX.pop()

 /* (y-y1) in the regression equation-----*/
 deltaCurrentPressureData = this.currentPressureData.slice(1)
 CurrentDeltaY = (this.deltaCurrentPressureData.map((n, i) => n-this.currentPressureData[i]));
 CurrentPoppedY = this.CurrentDeltaY.pop()

 /* slope of straight line ******/
 CurrentSlopeYX = this.CurrentDeltaY.map((n,i)=> n/this.CurrentDeltaX[i]);

 /* return-array-elements-larger-than-a-number */
 isBigEnough(value) {
   return function(element, index, array) {
     return (element <= value);
   }
 }
 filteredCurrentSlopeYX = this.CurrentSlopeYX.filter(this.isBigEnough(4));

 /* PressData for line */
 currentPressureDataForLine = [this.currentPressureData[this.filteredCurrentSlopeYX.length], this.currentPressureData[this.filteredCurrentSlopeYX.length+5]];

  /* logDerivativeTime for line */
logDerivativeCurrentTimeForLine = [this.logDerivativeCurrentTime[this.filteredCurrentSlopeYX.length], this.logDerivativeCurrentTime[this.filteredCurrentSlopeYX.length+6]];

currentPressureDataWorkSpace = this.currentPressureData[this.currentPressureData.length-2] - this.currentPressureData[this.currentPressureData.length-6];
timeCurrentDataWorkSpace = this.logDerivativeCurrentTime[this.logDerivativeCurrentTime.length-6] - this.logDerivativeCurrentTime[this.logDerivativeCurrentTime.length-1];


CurrentSlopeWorkSpace = this.currentPressureDataWorkSpace/this.timeCurrentDataWorkSpace;
CurrentIntercept = this.currentPressureData[this.currentPressureData.length-6]-this.logDerivativeCurrentTime[this.logDerivativeCurrentTime.length-6]*this.CurrentSlopeWorkSpace

CurrentPressureDataForLineWorkSpace = this.logDerivativeCurrentTime.map((n,i)=> n*this.CurrentSlopeWorkSpace + this.CurrentIntercept);
CurrentDataWork = this.CurrentPressureDataForLineWorkSpace.sort();
currentNewArray = [[this.logDerivativeCurrentTime[0], this.CurrentDataWork[0]], [this.logDerivativeCurrentTime[this.logDerivativeCurrentTime.length-1], this.CurrentDataWork[this.logDerivativeCurrentTime.length-1]]];

currentResult = regression.linear(this.currentNewArray, {precision: 8});
currentGradient =this.currentResult.equation[0];
currentyIntercept = this.currentResult.equation[1];


 /*---Calculation of DD1hr ------*/
  // Delta1hr
  currentTimeAtZeroHr=this.currentTimeData[0];
  currentTimeAtOneHr = this.currentTimeAtZeroHr+1;
  DeltaCurrentTimeOneHr = this.currentTimeAtOneHr-this.currentTimeData[0];
  DerivativeCurrentTimeOneHr = (this.currentTimeAtOneHr + this.DeltaCurrentTimeOneHr)/this.DeltaCurrentTimeOneHr;
  logDerivativeCurrentTimeOneHr = Math.log(this.DerivativeCurrentTimeOneHr);

  //Extrapolate straight line to logDerivativeTimeOneHr (this will give you pwf1hr)
  Pwf1hr = this.currentGradient*this.logDerivativeCurrentTimeOneHr + this.currentyIntercept;


calcDepCurr() {
  this.resultDepCurr = Number((this.currentyIntercept-(this.logDerivativeCurrentTime[0]*this.currentGradient+ this.currentyIntercept)).toFixed(2));

  const resultDepcurr = this.currentyIntercept-(this.logDerivativeCurrentTime[0]*this.currentGradient+ this.currentyIntercept);
  const signPostFlagDepcurr = 0.75*(this.currentyIntercept-(this.logDerivativeCurrentTime[0]*this.currentGradient+ this.currentyIntercept));

  this.router.navigate(['completion-envelope'], { state: { resultDepcurr } });
  this.router.navigate(['completion-envelope'], { state: { signPostFlagDepcurr } });

  // or
  this.sharedService.storeDepCurrValue = Math.round(resultDepcurr);
  this.sharedService.signPostFlagDepcurrValue = Math.round(signPostFlagDepcurr);
  }


  ngOnInit() {
  }

}

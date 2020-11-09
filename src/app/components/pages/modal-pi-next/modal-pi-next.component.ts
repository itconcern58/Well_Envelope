import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import regression from 'regression';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-pi-next',
  templateUrl: './modal-pi-next.component.html',
  styleUrls: ['./modal-pi-next.component.scss']
})
export class ModalPiNextComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultPIcurr: number;
  resultPInext: number;

  constructor(
    public dialogRef: MatDialogRef<ModalPiNextComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  /**----Current Flow Condition ***/
/**---------------------------- */
nextPressureData= [4675, 4705, 4733, 4750, 4757, 4761, 4763, 4766, 4770, 4773, 4775, 4777];
nextTimeData = [97.6, 98.1, 98.26, 98.6, 99.1, 99.6, 100.1, 100.6, 101.6, 103.6, 105.6, 107.6, 109.6 ];
nextInitialTime = [97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6 ];

// Generating log of derivative of time
deltaNextTimeData = this.nextTimeData.map((n,i) => n -this.nextInitialTime[i]);
derivativeNextTime = this.nextTimeData.map((n, i) => n/this.deltaNextTimeData[i]);
logDerivativeNextTime = this.derivativeNextTime.map((n,i) =>Math.log(this.derivativeNextTime[i]));
logDerivativeNextTimeShift = this.logDerivativeNextTime.shift();
deltaLogDerivativeNextTime = this.logDerivativeNextTime.slice(1);

/* (x-x1) in the regression equation-----*/
NextDeltaX = (this.logDerivativeNextTime.map((n, i) => n/this.deltaLogDerivativeNextTime[i]));
NextPopped = this.NextDeltaX.pop()

 /* (y-y1) in the regression equation-----*/
 deltaNextPressureData = this.nextPressureData.slice(1)
 NextDeltaY = (this.deltaNextPressureData.map((n, i) => n-this.nextPressureData[i]));
 NextPoppedY = this.NextDeltaY.pop()

 /* slope of straight line ******/
 NextSlopeYX = this.NextDeltaY.map((n,i)=> n/this.NextDeltaX[i]);

 /* return-array-elements-larger-than-a-number */
 isNextBigEnough(value) {
   return function(element, index, array) {
     return (element <= value);
   }
 }
 filteredNextSlopeYX = this.NextSlopeYX.filter(this.isNextBigEnough(4));

 /* PressData for line */
 nextPressureDataForLine = [this.nextPressureData[this.filteredNextSlopeYX.length], this.nextPressureData[this.filteredNextSlopeYX.length+5]];

  /* logDerivativeTime for line */
logDerivativeNextTimeForLine = [this.logDerivativeNextTime[this.filteredNextSlopeYX.length], this.logDerivativeNextTime[this.filteredNextSlopeYX.length+6]];

nextPressureDataWorkSpace = this.nextPressureData[this.nextPressureData.length-2] - this.nextPressureData[this.nextPressureData.length-6];
timeNextDataWorkSpace = this.logDerivativeNextTime[this.logDerivativeNextTime.length-6] - this.logDerivativeNextTime[this.logDerivativeNextTime.length-1];


NextSlopeWorkSpace = this.nextPressureDataWorkSpace/this.timeNextDataWorkSpace;
NextIntercept = this.nextPressureData[this.nextPressureData.length-6]-this.logDerivativeNextTime[this.logDerivativeNextTime.length-6]*this.NextSlopeWorkSpace

NextPressureDataForLineWorkSpace = this.logDerivativeNextTime.map((n,i)=> n*this.NextSlopeWorkSpace + this.NextIntercept);
NextDataWork = this.NextPressureDataForLineWorkSpace.sort();
nextNewArray = [[this.logDerivativeNextTime[0], this.NextDataWork[0]], [this.logDerivativeNextTime[this.logDerivativeNextTime.length-1], this.NextDataWork[this.logDerivativeNextTime.length-1]]];

nextResult = regression.linear(this.nextNewArray, {precision: 8});
nextGradient =this.nextResult.equation[0];
nextyIntercept = this.nextResult.equation[1];


 /*---Calculation of DD1hr ------*/
  // Delta1hr
  nextTimeAtZeroHr=this.nextTimeData[0];
  nextTimeAtOneHr = this.nextTimeAtZeroHr+1;
  DeltaNextTimeOneHr = this.nextTimeAtOneHr-this.nextTimeData[0];
  DerivativeNextTimeOneHr = (this.nextTimeAtOneHr + this.DeltaNextTimeOneHr)/this.DeltaNextTimeOneHr;
  logDerivativeNextTimeOneHr = Math.log(this.DerivativeNextTimeOneHr);

  //Extrapolate straight line to logDerivativeTimeOneHr (this will give you pwf1hr)
  NextPwf1hr = this.nextGradient*this.logDerivativeNextTimeOneHr + this.nextyIntercept;


calcPInext() {
  this.resultPInext = Number((parseFloat(this.number1)/(this.nextyIntercept-this.nextPressureData[0])));

  const resultPinext = parseFloat(this.number1)/(this.nextyIntercept-this.nextPressureData[0]);
  this.router.navigate(['completion-envelope'], { state: { resultPinext } });
  // or
  this.sharedService.storePinextValue = Math.round(resultPinext);
  }

  ngOnInit() {
  }

}

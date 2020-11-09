import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import regression from 'regression';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-dd',
  templateUrl: './modal-dd.component.html',
  styleUrls: ['./modal-dd.component.scss']
})
export class ModalDdComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultDD: number;
  resultDDnext: number;

  constructor(
    public dialogRef: MatDialogRef<ModalDdComponent>,
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


  calcDDcurr() {
    this.resultDD = Number((this.currentyIntercept-this.currentPressureData[0]).toFixed(2));

    const resultDd = this.currentyIntercept-this.currentPressureData[0];;
    this.router.navigate(['completion-envelope'], { state: { resultDd } });
    // or
    this.sharedService.storeDdValue = Math.round(resultDd);
    }

    /**----Current Flow Condition ***/
/**---------------------------- */
  nextPressureData= [4675, 4705, 4733, 4750, 4757, 4761, 4763, 4766, 4770, 4773, 4775, 4777];
  nextTimeData = [97.6, 98.1, 98.26, 98.6, 99.1, 99.6, 100.1, 100.6, 101.6, 103.6, 105.6, 107.6, 109.6 ];
  nextInitialTime = [97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6, 97.6 ];
  
  // Generating log of derivative of time
  deltaNextTimeData = this.currentTimeData.map((n,i) => n -this.currentInitialTime[i]);
  derivativeNextTime = this.currentTimeData.map((n, i) => n/this.deltaCurrentTimeData[i]);
  logDerivativeNextTime = this.derivativeCurrentTime.map((n,i) =>Math.log(this.derivativeCurrentTime[i]));
  logDerivativeNextTimeShift = this.logDerivativeCurrentTime.shift();
  deltaLogDerivativeNextTime = this.logDerivativeCurrentTime.slice(1);
  
  /* (x-x1) in the regression equation-----*/
  NextDeltaX = (this.logDerivativeNextTime.map((n, i) => n/this.deltaLogDerivativeNextTime[i]));
  NextPopped = this.NextDeltaX.pop()

   /* (y-y1) in the regression equation-----*/
   deltaNextPressureData = this.nextPressureData.slice(1)
   NextDeltaY = (this.deltaCurrentPressureData.map((n, i) => n-this.nextPressureData[i]));
   NextPoppedY = this.CurrentDeltaY.pop()

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


  calcDDnext() {
    this.resultDDnext = Number((this.nextyIntercept-this.nextPressureData[0]).toFixed(2));

    const resultDdnext = this.nextyIntercept-this.nextPressureData[0];
    this.router.navigate(['completion-envelope'], { state: { resultDdnext } });
    // or
    this.sharedService.storeDdnextValue = Math.round(resultDdnext);
    }

 ngOnInit() {
  }

}

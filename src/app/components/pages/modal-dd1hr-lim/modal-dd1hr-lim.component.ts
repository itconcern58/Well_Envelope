import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import regression from 'regression';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-dd1hr-lim',
  templateUrl: './modal-dd1hr-lim.component.html',
  styleUrls: ['./modal-dd1hr-lim.component.scss']
})
export class ModalDd1hrLimComponent implements OnInit {
  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultDD1hrLim: number;

  constructor(
    public dialogRef: MatDialogRef<ModalDd1hrLimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
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

  
   /*---Calculation of DD1hr ------*/

    // Delta1hr
    timeAtZeroHr=this.timeData[0];
    timeAtOneHr = this.timeAtZeroHr+1;
    DeltaTimeOneHr = this.timeAtOneHr-this.timeData[0];
    DerivativeTimeOneHr = (this.timeAtOneHr + this.DeltaTimeOneHr)/this.DeltaTimeOneHr;
    logDerivativeTimeOneHr = Math.log(this.DerivativeTimeOneHr);

    //Extrapolate straight line to logDerivativeTimeOneHr (this will give you pwf1hr)
    Pwf1hr = this.gradient*this.logDerivativeTimeOneHr + this.yIntercept;


  calcDDihrLim() {
    this.resultDD1hrLim = Number((this.Pwf1hr-parseFloat(this.number1)).toFixed(2));
    const resultDD1hrlim = this.Pwf1hr-parseFloat(this.number1);
    const signPostFlagDD1hrlim = 0.75*( this.Pwf1hr-parseFloat(this.number1));

    this.router.navigate(['completion-envelope'], { state: { resultDD1hrlim } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagDD1hrlim } });
    // or
    this.sharedService.storeDd1hrlimValue = Math.round(resultDD1hrlim);
    this.sharedService.signPostFlagDd1hrlimValue = Math.round(signPostFlagDD1hrlim);
    }


  ngOnInit() {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-fwht-lim',
  templateUrl: './modal-fwht-lim.component.html',
  styleUrls: ['./modal-fwht-lim.component.scss']
})
export class ModalFwhtLimComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultFWHTLim: number;

  constructor(
    public dialogRef: MatDialogRef<ModalFwhtLimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  calcFWHTLim() {
    this.resultFWHTLim = Number((parseFloat(this.number1)).toFixed(2));
    const resultFwhtlim = (parseFloat(this.number1));
    const signPostFlagFwhtlim = 0.75*(parseFloat(this.number1));

    this.router.navigate(['completion-envelope'], { state: { resultFwhtlim } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagFwhtlim } });
    // or
    this.sharedService.storeFwhtLimValue = Math.round(resultFwhtlim);
    this.sharedService.signPostFlagFwhtLimValue = Math.round(signPostFlagFwhtlim);
  }


  ngOnInit() {
  }

}

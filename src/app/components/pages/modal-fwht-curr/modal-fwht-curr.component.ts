import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-fwht-curr',
  templateUrl: './modal-fwht-curr.component.html',
  styleUrls: ['./modal-fwht-curr.component.scss']
})
export class ModalFwhtCurrComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultFWHTCurr: number;

  constructor(
    public dialogRef: MatDialogRef<ModalFwhtCurrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  calcFWHTCurr() {
    this.resultFWHTCurr = Number((parseFloat(this.number1)).toFixed(2));
    const resultFwhtcurr = (parseFloat(this.number1));
    const signPostFlagFwhtcurr = 0.75*(parseFloat(this.number1));

    this.router.navigate(['completion-envelope'], { state: { resultFwhtcurr } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagFwhtcurr } });
    // or
    this.sharedService.storeFwhtCurrValue = Math.round(resultFwhtcurr);
    this.sharedService.signPostFlagFwhtCurrValue = Math.round(signPostFlagFwhtcurr);
  }


  ngOnInit() {
  }

}

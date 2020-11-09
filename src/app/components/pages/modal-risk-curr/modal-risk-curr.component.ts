import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';


@Component({
  selector: 'app-modal-risk-curr',
  templateUrl: './modal-risk-curr.component.html',
  styleUrls: ['./modal-risk-curr.component.scss']
})
export class ModalRiskCurrComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultRiskCurr: string
  constructor(
    public dialogRef: MatDialogRef<ModalRiskCurrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcRiskCurr() {
    this.resultRiskCurr = this.number1;

    const resultRiskcurr = this.number1;
    const signPostFlagRiskCurr = "";
    this.router.navigate(['completion-envelope'], { state: { resultRiskcurr } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagRiskCurr } });
    // or
    this.sharedService.storeRiskCurrValue = resultRiskcurr;
    this.sharedService.signPostFlagRiskLimValue = 'M';
  }

  ngOnInit() {
  }

}

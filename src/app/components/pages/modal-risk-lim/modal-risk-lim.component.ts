import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-risk-lim',
  templateUrl: './modal-risk-lim.component.html',
  styleUrls: ['./modal-risk-lim.component.scss']
})
export class ModalRiskLimComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultRiskLim: string

  constructor(
    public dialogRef: MatDialogRef<ModalRiskLimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcRiskLim() {
    this.resultRiskLim = 'H'

    const resultRisklim = 'H';
    const signPostFlagRiskLim = "M";
    this.router.navigate(['completion-envelope'], { state: { resultRisklim } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagRiskLim } });
    // or
    this.sharedService.storeRiskLimValue = 'H';
    this.sharedService.signPostFlagRiskLimValue = 'M';
  }



  ngOnInit() {
  }

}

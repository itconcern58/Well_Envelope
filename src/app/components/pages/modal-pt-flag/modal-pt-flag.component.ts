import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../../pages/my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-pt-flag',
  templateUrl: './modal-pt-flag.component.html',
  styleUrls: ['./modal-pt-flag.component.scss']
})
export class ModalPtFlagComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultPt: number;
  resultPTFlag: number;

  constructor(
    public dialogRef: MatDialogRef<ModalPtFlagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData, 
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

ngOnInit() {
  }

  calcPtFlag() {
    this.resultPTFlag = Number((parseFloat(this.number1)*parseFloat(this.number2)).toFixed(2));

    const resultPtFlag  = parseFloat(this.number1)*parseFloat(this.number2);
    this.router.navigate(['completion-envelope'], { state: { resultPtFlag} });
    // or
    this.sharedService.storePtFlagValue = Math.round(resultPtFlag);

  }

}

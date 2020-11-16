import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../../pages/my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-mbhp-flag',
  templateUrl: './modal-mbhp-flag.component.html',
  styleUrls: ['./modal-mbhp-flag.component.scss']
})
export class ModalMbhpFlagComponent implements OnInit {
  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultMBHPFlag: number;

  constructor(
    public dialogRef: MatDialogRef<ModalMbhpFlagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData, 
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

ngOnInit() {
  }

  calcMbhpFlag() {
    this.resultMBHPFlag = Number((parseFloat(this.number1)*parseFloat(this.number2)).toFixed(2));

    const resultMbhpFlag  = parseFloat(this.number1)*parseFloat(this.number2);
    this.router.navigate(['completion-envelope'], { state: { resultMbhpFlag} });
    // or
    this.sharedService.storeMbhpFlagValue = Math.round(resultMbhpFlag);

  }

}

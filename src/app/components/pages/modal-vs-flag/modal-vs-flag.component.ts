import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../../pages/my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-vs-flag',
  templateUrl: './modal-vs-flag.component.html',
  styleUrls: ['./modal-vs-flag.component.scss']
})
export class ModalVsFlagComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultVSFlag: number;

  constructor(
    public dialogRef: MatDialogRef<ModalVsFlagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData, 
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

ngOnInit() {
  }

  calcVsFlag() {
    this.resultVSFlag = Number((parseFloat(this.number1)*parseFloat(this.number2)).toFixed(2));

    const resultVsFlag  = parseFloat(this.number1)*parseFloat(this.number2);
    this.router.navigate(['completion-envelope'], { state: { resultVsFlag} });
    // or
    this.sharedService.storeVsFlagValue = Math.round(resultVsFlag);
  }
}
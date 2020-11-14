import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../../pages/my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-a-ap-flag',
  templateUrl: './modal-a-ap-flag.component.html',
  styleUrls: ['./modal-a-ap-flag.component.scss']
})
export class ModalAApFlagComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultAApFlag: number;

  constructor(
    public dialogRef: MatDialogRef<ModalAApFlagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData, 
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

ngOnInit() {
  }

  calcAapFlag() {
    this.resultAApFlag = Number((parseFloat(this.number1)*parseFloat(this.number2)).toFixed(2));

    const resultAapFlag  = parseFloat(this.number1)*parseFloat(this.number2);
    this.router.navigate(['completion-envelope'], { state: { resultAapFlag} });
    // or
    this.sharedService.storeAApFlagValue = Math.round(resultAapFlag);

  }
}

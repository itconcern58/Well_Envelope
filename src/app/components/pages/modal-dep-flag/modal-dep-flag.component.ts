import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../../pages/my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-dep-flag',
  templateUrl: './modal-dep-flag.component.html',
  styleUrls: ['./modal-dep-flag.component.scss']
})
export class ModalDepFlagComponent implements OnInit {
  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultDEPFlag: number;

  constructor(
    public dialogRef: MatDialogRef<ModalDepFlagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData, 
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

ngOnInit() {
  }

  calcDepFlag() {
    this.resultDEPFlag = Number((parseFloat(this.number1)*parseFloat(this.number2)).toFixed(2));

    const resultDepFlag  = parseFloat(this.number1)*parseFloat(this.number2);
    this.router.navigate(['completion-envelope'], { state: { resultDepFlag} });
    // or
    this.sharedService.storeDepFlagValue = Math.round(resultDepFlag);

  }

}

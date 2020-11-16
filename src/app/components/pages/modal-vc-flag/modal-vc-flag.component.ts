import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../../pages/my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-vc-flag',
  templateUrl: './modal-vc-flag.component.html',
  styleUrls: ['./modal-vc-flag.component.scss']
})
export class ModalVcFlagComponent implements OnInit {
  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultVCFlag: number;

  constructor(
    public dialogRef: MatDialogRef<ModalVcFlagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData, 
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

ngOnInit() {
  }

  calcVcFlag() {
    this.resultVCFlag = Number((parseFloat(this.number1)*parseFloat(this.number2)).toFixed(2));

    const resultVcFlag  = parseFloat(this.number1)*parseFloat(this.number2);
    this.router.navigate(['completion-envelope'], { state: { resultVcFlag} });
    // or
    this.sharedService.storeVcFlagValue = Math.round(resultVcFlag);
  }
}

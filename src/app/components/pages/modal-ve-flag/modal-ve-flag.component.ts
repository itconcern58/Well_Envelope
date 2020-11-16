import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../../pages/my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-ve-flag',
  templateUrl: './modal-ve-flag.component.html',
  styleUrls: ['./modal-ve-flag.component.scss']
})
export class ModalVeFlagComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultVEFlag: number;

  constructor(
    public dialogRef: MatDialogRef<ModalVeFlagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData, 
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

ngOnInit() {
  }

  calcVeFlag() {
    this.resultVEFlag = Number((parseFloat(this.number1)*parseFloat(this.number2)).toFixed(2));

    const resultVeFlag  = parseFloat(this.number1)*parseFloat(this.number2);
    this.router.navigate(['completion-envelope'], { state: { resultVeFlag} });
    // or
    this.sharedService.storePeFlagValue = Math.round(resultVeFlag);

  }
}

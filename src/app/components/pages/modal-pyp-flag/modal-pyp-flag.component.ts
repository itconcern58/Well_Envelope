import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../../pages/my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-pyp-flag',
  templateUrl: './modal-pyp-flag.component.html',
  styleUrls: ['./modal-pyp-flag.component.scss']
})
export class ModalPypFlagComponent implements OnInit {
  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultPYp: number;
  resultPYpFlag: number;

  constructor(
    public dialogRef: MatDialogRef<ModalPypFlagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData, 
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

ngOnInit() {
  }

  calcPYpFlag() {
    this.resultPYpFlag = Number((parseFloat(this.number1)*parseFloat(this.number2)).toFixed(2));

    const resultPypFlag  = parseFloat(this.number1)*parseFloat(this.number2);
    this.router.navigate(['completion-envelope'], { state: { resultPypFlag} });
    // or
    this.sharedService.storePypFlagValue = Math.round(resultPypFlag);

  }
}

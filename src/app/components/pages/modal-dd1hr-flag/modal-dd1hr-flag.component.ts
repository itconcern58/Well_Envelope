import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../../pages/my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';


@Component({
  selector: 'app-modal-dd1hr-flag',
  templateUrl: './modal-dd1hr-flag.component.html',
  styleUrls: ['./modal-dd1hr-flag.component.scss']
})
export class ModalDd1hrFlagComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultDD1hrFlag: number;

  constructor(
    public dialogRef: MatDialogRef<ModalDd1hrFlagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData, 
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

ngOnInit() {
  }

  calcDD1hrFlag() {
    this.resultDD1hrFlag = Number((parseFloat(this.number1)*parseFloat(this.number2)).toFixed(2));

    const resultDd1hrFlag  = parseFloat(this.number1)*parseFloat(this.number2);
    this.router.navigate(['completion-envelope'], { state: { resultDd1hrFlag} });
    // or
    this.sharedService.storeDD1hrFlagValue = Math.round(resultDd1hrFlag);

  }

}

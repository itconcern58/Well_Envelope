import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from '../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../../shared-service.services';

@Component({
  selector: 'app-modal-b-ap-flag',
  templateUrl: './modal-b-ap-flag.component.html',
  styleUrls: ['./modal-b-ap-flag.component.scss']
})
export class ModalBapFlagComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultBApFlag : number;

  constructor(
    public dialogRef: MatDialogRef<ModalBapFlagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData, 
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

ngOnInit() {
  }

  calcBapFlag() {
    this.resultBApFlag = Number((parseFloat(this.number1)*parseFloat(this.number2)).toFixed(2));

    const resultbapFlag  = parseFloat(this.number1)*parseFloat(this.number2);
    this.router.navigate(['completion-envelope'], { state: { resultbapFlag} });
    // or
    this.sharedService.storeBapFlagValue = Math.round(resultbapFlag);

  }

}

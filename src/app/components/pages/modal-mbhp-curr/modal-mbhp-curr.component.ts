import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-mbhp-curr',
  templateUrl: './modal-mbhp-curr.component.html',
  styleUrls: ['./modal-mbhp-curr.component.scss']
})
export class ModalMbhpCurrComponent implements OnInit {

  
  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultMBHPCurr: number;

  constructor(
    public dialogRef: MatDialogRef<ModalMbhpCurrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcMBHPCurr() {
    this.resultMBHPCurr = Number((parseFloat(this.number1)).toFixed(2));
    const resultMbhpcurr = (parseFloat(this.number1));
    const signPostFlagMbhpcurr = 0.75*(parseFloat(this.number1));

    this.router.navigate(['completion-envelope'], { state: { resultMbhpcurr } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagMbhpcurr } });
    // or
    this.sharedService.storeMbhpCurrValue = Math.round(resultMbhpcurr);
    this.sharedService.signPostFlagMbhpCurrValue = Math.round(signPostFlagMbhpcurr);
  }

  ngOnInit() {
  }

}

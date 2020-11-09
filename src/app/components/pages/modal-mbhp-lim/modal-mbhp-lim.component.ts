import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-mbhp-lim',
  templateUrl: './modal-mbhp-lim.component.html',
  styleUrls: ['./modal-mbhp-lim.component.scss']
})
export class ModalMbhpLimComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultMBHPLim: number;

  constructor(
    public dialogRef: MatDialogRef<ModalMbhpLimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  calcMBHPLim() {
    this.resultMBHPLim = Number((parseFloat(this.number1)).toFixed(2));
    const resultMbhplim = (parseFloat(this.number1));
    const signPostFlagMbhplim = 0.75*(parseFloat(this.number1));

    this.router.navigate(['completion-envelope'], { state: { resultMbhplim } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagMbhplim } });
    // or
    this.sharedService.storeMbhpLimValue = Math.round(resultMbhplim);
    this.sharedService.signPostFlagMbhpLimValue = Math.round(signPostFlagMbhplim);
  }

  ngOnInit() {
  }

}

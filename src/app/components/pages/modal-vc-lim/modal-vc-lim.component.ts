import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import regression from 'regression';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-vc-lim',
  templateUrl: './modal-vc-lim.component.html',
  styleUrls: ['./modal-vc-lim.component.scss']
})
export class ModalVcLimComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultVC: number;
  resultVCLim: number;

  constructor(
    public dialogRef: MatDialogRef<ModalVcLimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
   public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  calcVCLim() {
    this.resultVCLim = Number((parseFloat(this.number1)/(235*parseFloat(this.number2)*parseFloat(this.number3)*parseFloat(this.number4))).toFixed(2));
    const resultVcLim = parseFloat(this.number1)/(235*parseFloat(this.number2)*parseFloat(this.number3)*parseFloat(this.number4));
    const signPostFlagVcLim = 0.75*(parseFloat(this.number1)/(235*parseFloat(this.number2)*parseFloat(this.number3)*parseFloat(this.number4)));

    this.router.navigate(['completion-envelope'], { state: { resultVcLim } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagVcLim } });
    // or
    this.sharedService.storeVcLimValue = Math.round(resultVcLim);
    this.sharedService.signPostFlagVcLimValue = Math.round(signPostFlagVcLim);
  }

  ngOnInit() {
  }

}

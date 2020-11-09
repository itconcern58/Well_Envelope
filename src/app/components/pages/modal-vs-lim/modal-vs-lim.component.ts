import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import regression from 'regression';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-vs-lim',
  templateUrl: './modal-vs-lim.component.html',
  styleUrls: ['./modal-vs-lim.component.scss']
})
export class ModalVsLimComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultVS: number;
  resultVSLim: number;

  constructor(
    public dialogRef: MatDialogRef<ModalVsLimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
   public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  calcVSLim() {
    this.resultVSLim = Number((parseFloat(this.number1)/(235*parseFloat(this.number2)*parseFloat(this.number3)*parseFloat(this.number4))).toFixed(2));
    const resultVsLim = parseFloat(this.number1)/(235*parseFloat(this.number2)*parseFloat(this.number3)*parseFloat(this.number4));
    const signPostFlagVsLim = 0.75*(parseFloat(this.number1)/(235*parseFloat(this.number2)*parseFloat(this.number3)*parseFloat(this.number4)));

    this.router.navigate(['completion-envelope'], { state: { resultVsLim } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagVsLim } });
    // or
    this.sharedService.storeVsLimValue = Number((resultVsLim).toFixed(2));
    this.sharedService.signPostFlagVsLimValue = Number((signPostFlagVsLim).toFixed(2));
  }


  ngOnInit() {
  }

}

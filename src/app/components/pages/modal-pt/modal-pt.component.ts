import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-pt',
  templateUrl: './modal-pt.component.html',
  styleUrls: ['./modal-pt.component.scss']
})
export class ModalPTComponent implements OnInit {
  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultPT: number;

  constructor(
    public dialogRef: MatDialogRef<ModalPTComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService
  ) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcPT() {
    this.resultPT = Number((parseFloat(this.number1)*(parseFloat(this.number3)/parseFloat(this.number2)-parseFloat(this.number4))).toFixed(2));
    const resultPt = parseFloat(this.number1)*(parseFloat(this.number3)/parseFloat(this.number2)-parseFloat(this.number4));
    const signPostFlagPt = 0.75*(parseFloat(this.number1)*(parseFloat(this.number3)/parseFloat(this.number2)-parseFloat(this.number4)));
    this.router.navigate(['completion-envelope'], { state: { resultPt } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagPt } });
    // or
    this.sharedService.storePtValue = Math.round(resultPt);
    this.sharedService.signPostFlagPtValue = Math.round(signPostFlagPt);
  }

  ngOnInit() {
  }

}

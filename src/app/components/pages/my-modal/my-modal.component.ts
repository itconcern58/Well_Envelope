import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})

export class MyModalComponent implements OnInit {
  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultPYp: number;
  signPostFlagPYp: number;

  constructor(
    public dialogRef: MatDialogRef<MyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData, 
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

 /* calcPYp() {
    this.resultPYp = 2*parseFloat(this.number1)*((parseFloat(this.number2)-1)/Math.pow(parseFloat(this.number2),2))
  }*/

ngOnInit() {
  }

  calcPYp() {
    this.resultPYp = Number((2*parseFloat(this.number1)*((parseFloat(this.number2)-1)/Math.pow(parseFloat(this.number2),2))).toFixed(2));

    const resultPYp = 2*parseFloat(this.number1)*((parseFloat(this.number2)-1)/Math.pow(parseFloat(this.number2),2));
    const signPostFlagPYp = 0.75*(2*parseFloat(this.number1)*((parseFloat(this.number2)-1)/Math.pow(parseFloat(this.number2),2)));
    this.router.navigate(['completion-envelope'], { state: { resultPYp } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagPYp } });
    // or
    this.sharedService.storePYpValue = Math.round(resultPYp);
    this.sharedService.signPostFlagPYpValue = Math.round(signPostFlagPYp);

  }

}
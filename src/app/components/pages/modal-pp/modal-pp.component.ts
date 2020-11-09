import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-pp',
  templateUrl: './modal-pp.component.html',
  styleUrls: ['./modal-pp.component.scss']
})
export class ModalPPComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultPP: number;

  constructor(
    public dialogRef: MatDialogRef<ModalPPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcPP() {
    this.resultPP = Number((parseFloat(this.number1)*(parseFloat(this.number3)/parseFloat(this.number2)-parseFloat(this.number4))-parseFloat(this.number5)).toFixed(2));
    const resultPp = parseFloat(this.number1)*(parseFloat(this.number3)/parseFloat(this.number2)-parseFloat(this.number4))-parseFloat(this.number5);
    const signPostFlagPp = 0.75*(parseFloat(this.number1)*(parseFloat(this.number3)/parseFloat(this.number2)-parseFloat(this.number4))-parseFloat(this.number5));
    this.router.navigate(['completion-envelope'], { state: { resultPp } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagPp } });
    // or
    this.sharedService.storePpValue = Math.round(resultPp);
    this.sharedService.signPostFlagPpValue = Math.round(signPostFlagPp);
    }

  ngOnInit() {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-ve',
  templateUrl: './modal-ve.component.html',
  styleUrls: ['./modal-ve.component.scss']
})
export class ModalVEComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultVE: number;

  constructor(
    public dialogRef: MatDialogRef<ModalVEComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcVE() {
    this.resultVE = Number((parseFloat(this.number2)/Math.sqrt(parseFloat(this.number2))).toFixed(2));

    const resultVe = parseFloat(this.number2)/Math.sqrt(parseFloat(this.number2));
    const signPostFlagVe = 0.75*(parseFloat(this.number2)/Math.sqrt(parseFloat(this.number2)));
    this.router.navigate(['completion-envelope'], { state: { resultVe } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagVe } });
    // or
    this.sharedService.storeVeValue = Math.round(resultVe);
    this.sharedService.signPostFlagVeValue = Math.round(signPostFlagVe);
  }

  ngOnInit() {
  }

}

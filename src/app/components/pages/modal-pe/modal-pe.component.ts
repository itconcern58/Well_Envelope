import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-pe',
  templateUrl: './modal-pe.component.html',
  styleUrls: ['./modal-pe.component.scss']
})
export class ModalPEComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultPE: number;

  constructor(
    public dialogRef: MatDialogRef<ModalPEComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcPE() {
    this.resultPE = Number((46.95*Math.pow(10,6)/parseFloat(this.number1)/Math.pow(parseFloat(this.number1)-1,2)).toFixed(2));

    const resultPe = 46.95*Math.pow(10,6)/parseFloat(this.number1)/Math.pow(parseFloat(this.number1)-1,2);
    const signPostFlagPe = 0.75*(46.95*Math.pow(10,6)/parseFloat(this.number1)/Math.pow(parseFloat(this.number1)-1,2));
    this.router.navigate(['completion-envelope'], { state: { resultPe } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagPe } });
    // or
    this.sharedService.storePeValue = Math.round(resultPe);
    this.sharedService.signPostFlagPeValue = Math.round(signPostFlagPe);
  }
  ngOnInit() {
  }

}
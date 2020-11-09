import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-a-ap',
  templateUrl: './modal-a-ap.component.html',
  styleUrls: ['./modal-a-ap.component.scss']
})
export class ModalAAPComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  number6: string = '1';
  resultAAP: number;

  constructor(
    public dialogRef: MatDialogRef<ModalAAPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcAAP() {
    this.resultAAP = Number(((0.875*(2*parseFloat(this.number1)*parseFloat(this.number2)/parseFloat(this.number3))
    -parseFloat(this.number4)*parseFloat(this.number5)*parseFloat(this.number6))).toFixed(2));

    const resultAAp = (0.875*(2*parseFloat(this.number1)*parseFloat(this.number2)/parseFloat(this.number3))
    -parseFloat(this.number4)*parseFloat(this.number5)*parseFloat(this.number6));
    const signPostFlagAAp = 0.75*(parseFloat(this.number1)-parseFloat(this.number2));
    this.router.navigate(['completion-envelope'], { state: { resultAAp } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagAAp } });
    // or
    this.sharedService.storeAApValue = Math.round(resultAAp);
    this.sharedService.signPostFlagAApValue = Math.round(signPostFlagAAp);
  }


  ngOnInit() {
  }

}

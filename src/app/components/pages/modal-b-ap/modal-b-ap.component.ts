import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-b-ap',
  templateUrl: './modal-b-ap.component.html',
  styleUrls: ['./modal-b-ap.component.scss']
})
export class ModalBAPComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  number6: string = '1';
  resultBAP: number;

  constructor(
    public dialogRef: MatDialogRef<ModalBAPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcBAP() {
    this.resultBAP = Number(((0.875*(2*parseFloat(this.number1)*parseFloat(this.number2)/parseFloat(this.number3))
    -parseFloat(this.number4)*parseFloat(this.number5)*parseFloat(this.number6))).toFixed(2));

    const resultBAp = (0.875*(2*parseFloat(this.number1)*parseFloat(this.number2)/parseFloat(this.number3))
    -parseFloat(this.number4)*parseFloat(this.number5)*parseFloat(this.number6));
  
    this.resultBAP = (parseFloat(this.number1)-parseFloat(this.number2));

    const signPostFlagBAp = 0.75*(parseFloat(this.number1)-parseFloat(this.number2));
    this.router.navigate(['completion-envelope'], { state: { resultBAp } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagBAp } });
    // or
    this.sharedService.storeBApValue = Math.round(resultBAp);
    this.sharedService.signPostFlagBApValue = Math.round(signPostFlagBAp);
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-vc',
  templateUrl: './modal-vc.component.html',
  styleUrls: ['./modal-vc.component.scss']
})
export class ModalVCComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultVC: number;
  resultVCcurr: number;

  constructor(
    public dialogRef: MatDialogRef<ModalVCComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcVC() {
    this.resultVCcurr = Number((parseFloat(this.number1)/(235*parseFloat(this.number2)*parseFloat(this.number3)*parseFloat(this.number4))).toFixed(2));
    const resultVccurr = parseFloat(this.number1)/(235*parseFloat(this.number2)*parseFloat(this.number3)*parseFloat(this.number4));
    const signPostFlagVccurr = 0.75*(parseFloat(this.number1)/(235*parseFloat(this.number2)*parseFloat(this.number3)*parseFloat(this.number4)));
    
    this.router.navigate(['completion-envelope'], { state: { resultVccurr } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagVccurr } });
    // or
    this.sharedService.storeVccurrValue = Math.round(resultVccurr);
    this.sharedService.signPostFlagVccurrValue = Math.round(signPostFlagVccurr);
 
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-vs',
  templateUrl: './modal-vs.component.html',
  styleUrls: ['./modal-vs.component.scss']
})
export class ModalVSComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultVS: number;
  resultVScurr: number;

  constructor(
    public dialogRef: MatDialogRef<ModalVSComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcVS() {
    this.resultVScurr = Number((parseFloat(this.number1)/(235*parseFloat(this.number2)*parseFloat(this.number3)*parseFloat(this.number4))).toFixed(2));
    const resultVscurr = parseFloat(this.number1)/(235*parseFloat(this.number2)*parseFloat(this.number3)*parseFloat(this.number4));
    const signPostFlagVscurr = 0.75*(parseFloat(this.number1)/(235*parseFloat(this.number2)*parseFloat(this.number3)*parseFloat(this.number4)));

    this.router.navigate(['completion-envelope'], { state: { resultVscurr } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagVscurr } });
    // or
    this.sharedService.storeVscurrValue = Number((resultVscurr).toFixed(2));
    this.sharedService.signPostFlagVscurrValue = Number((signPostFlagVscurr).toFixed(2));
 
  }

  ngOnInit() {
  }

}

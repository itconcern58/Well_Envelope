import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-flow-curr',
  templateUrl: './modal-flow-curr.component.html',
  styleUrls: ['./modal-flow-curr.component.scss']
})
export class ModalFlowCurrComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultFLOWCurr: number;

  constructor(
    public dialogRef: MatDialogRef<ModalFlowCurrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  calcFlowCurr() {
    this.resultFLOWCurr = Number((parseFloat(this.number1)).toFixed(2));
    const resultFlowcurr = (parseFloat(this.number1));

    this.router.navigate(['completion-envelope'], { state: { resultFlowcurr } });
    // or
    this.sharedService.storeFlowCurrValue = Math.round(resultFlowcurr);
  }


  ngOnInit() {
  }

}

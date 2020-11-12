import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';


@Component({
  selector: 'app-modal-flow-next',
  templateUrl: './modal-flow-next.component.html',
  styleUrls: ['./modal-flow-next.component.scss']
})
export class ModalFlowNextComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultFLOWNext: number;

  constructor(
    public dialogRef: MatDialogRef<ModalFlowNextComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  calcFlowNext() {
    this.resultFLOWNext = Number((parseFloat(this.number1)).toFixed(2));
    const resultFlownext = (parseFloat(this.number1));

    this.router.navigate(['completion-envelope'], { state: { resultFlownext } });
    // or
    this.sharedService.storeFlowNextValue = Math.round(resultFlownext);
  }


  ngOnInit() {
  }

}

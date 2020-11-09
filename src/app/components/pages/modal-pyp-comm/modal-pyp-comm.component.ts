import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-pyp-comm',
  templateUrl: './modal-pyp-comm.component.html',
  styleUrls: ['./modal-pyp-comm.component.scss']
})
export class ModalPypCommComponent implements OnInit {
  number1: string = 'Placeholder';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultRiskLim: string

  constructor(
    public dialogRef: MatDialogRef<ModalPypCommComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcPypComm() {
    const resultPypComm = this.number1;
    this.router.navigate(['completion-envelope'], { state: { resultPypComm } });
    // or
    this.sharedService.storePypCommValue = resultPypComm;
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-pe-comm',
  templateUrl: './modal-pe-comm.component.html',
  styleUrls: ['./modal-pe-comm.component.scss']
})
export class ModalPeCommComponent implements OnInit {

  number1: string = 'Placeholder';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultPeComm: number;

  constructor(
    public dialogRef: MatDialogRef<ModalPeCommComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcPeComm() {
    const resultPeComm = this.number1;
    this.router.navigate(['completion-envelope'], { state: { resultPeComm } });
    // or
    this.sharedService.storePeCommValue = resultPeComm;
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-a-ap-comm',
  templateUrl: './modal-a-ap-comm.component.html',
  styleUrls: ['./modal-a-ap-comm.component.scss']
})
export class ModalAApCommComponent implements OnInit {

  number1: string = 'Placeholder';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';

  constructor(
    public dialogRef: MatDialogRef<ModalAApCommComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcAapComm() {
    const resultAapComm = this.number1;
    this.router.navigate(['completion-envelope'], { state: { resultAapComm } });
    // or
    this.sharedService.storeAapCommValue = resultAapComm;
  }

  ngOnInit() {
  }

}

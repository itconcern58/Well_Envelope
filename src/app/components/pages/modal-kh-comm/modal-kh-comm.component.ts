import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-kh-comm',
  templateUrl: './modal-kh-comm.component.html',
  styleUrls: ['./modal-kh-comm.component.scss']
})
export class ModalKhCommComponent implements OnInit {

  number1: string = 'Placeholder';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';

  constructor(
    public dialogRef: MatDialogRef<ModalKhCommComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcKHComm() {
    const resultKhComm = this.number1;
    this.router.navigate(['completion-envelope'], { state: { resultKhComm } });
    // or
    this.sharedService.storeKHCommValue = resultKhComm;
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-dd1hr-comm',
  templateUrl: './modal-dd1hr-comm.component.html',
  styleUrls: ['./modal-dd1hr-comm.component.scss']
})
export class ModalDd1hrCommComponent implements OnInit {

  number1: string = 'Placeholder';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';

  constructor(
    public dialogRef: MatDialogRef<ModalDd1hrCommComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcDD1hrComm() {
    const resultDd1hrComm = this.number1;
    this.router.navigate(['completion-envelope'], { state: { resultDd1hrComm } });
    // or
    this.sharedService.storeDD1hrCommValue = resultDd1hrComm;
  }

  ngOnInit() {
  }

}

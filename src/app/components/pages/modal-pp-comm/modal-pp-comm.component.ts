import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-pp-comm',
  templateUrl: './modal-pp-comm.component.html',
  styleUrls: ['./modal-pp-comm.component.scss']
})
export class ModalPpCommComponent implements OnInit {

  number1: string = 'Placeholder';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultPpComm: string

  constructor(
    public dialogRef: MatDialogRef<ModalPpCommComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService)  
    { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  
    calcPpComm() {
      const resultPpComm = this.number1;
      this.router.navigate(['completion-envelope'], { state: { resultPpComm } });
      // or
      this.sharedService.storePpCommValue = resultPpComm;
    }
  
  ngOnInit() {
  }

}

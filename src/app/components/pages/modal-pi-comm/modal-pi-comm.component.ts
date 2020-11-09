import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-pi-comm',
  templateUrl: './modal-pi-comm.component.html',
  styleUrls: ['./modal-pi-comm.component.scss']
})
export class ModalPiCommComponent implements OnInit {

  number1: string = 'Placeholder';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';

  constructor(
    public dialogRef: MatDialogRef<ModalPiCommComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcPiComm() {
    const resultPiComm = this.number1;
    this.router.navigate(['completion-envelope'], { state: { resultPiComm } });
    // or
    this.sharedService.storePiCommValue = resultPiComm;
  }

  ngOnInit() {
  }

}

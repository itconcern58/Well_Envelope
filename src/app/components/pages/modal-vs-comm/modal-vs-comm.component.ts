import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from '../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../../shared-service.services';

@Component({
  selector: 'app-modal-vs-comm',
  templateUrl: './modal-vs-comm.component.html',
  styleUrls: ['./modal-vs-comm.component.scss']
})
export class ModalVsCommComponent implements OnInit {

  number1: string = 'Placeholder';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';

  constructor(
    public dialogRef: MatDialogRef<ModalVsCommComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcVsComm() {
    const resultVsComm = this.number1;
    this.router.navigate(['completion-envelope'], { state: { resultVsComm } });
    // or
    this.sharedService.storeVsCommValue = resultVsComm;
  }

  ngOnInit() {
  }

}

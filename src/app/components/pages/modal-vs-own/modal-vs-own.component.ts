import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-vs-own',
  templateUrl: './modal-vs-own.component.html',
  styleUrls: ['./modal-vs-own.component.scss']
})
export class ModalVsOwnComponent implements OnInit {
  number1: string = 'Placeholder';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';

  constructor(
    public dialogRef: MatDialogRef<ModalVsOwnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcVsOwn() {
    const resultVsOwn = this.number1;
    this.router.navigate(['completion-envelope'], { state: { resultVsOwn } });
    // or
    this.sharedService.storeVsOwnValue = resultVsOwn;
  }


  ngOnInit() {
  }

}

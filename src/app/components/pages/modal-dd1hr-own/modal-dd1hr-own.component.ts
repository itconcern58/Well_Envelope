import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-dd1hr-own',
  templateUrl: './modal-dd1hr-own.component.html',
  styleUrls: ['./modal-dd1hr-own.component.scss']
})
export class ModalDd1hrOwnComponent implements OnInit {

  number1: string = 'Placeholder';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';

  constructor(
    public dialogRef: MatDialogRef<ModalDd1hrOwnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcDd1hrOwn() {
    const resultDd1hrOwn = this.number1;
    this.router.navigate(['completion-envelope'], { state: { resultDd1hrOwn } });
    // or
    this.sharedService.storeDd1hrOwnValue = resultDd1hrOwn;
  }

  ngOnInit() {
  }

}

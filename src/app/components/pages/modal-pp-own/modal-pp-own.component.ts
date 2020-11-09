import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-pp-own',
  templateUrl: './modal-pp-own.component.html',
  styleUrls: ['./modal-pp-own.component.scss']
})
export class ModalPpOwnComponent implements OnInit {

  number1: string = 'Placeholder';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';

  constructor(
    public dialogRef: MatDialogRef<ModalPpOwnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcPpOwn() {
    const resultPpOwn = this.number1;
    this.router.navigate(['completion-envelope'], { state: { resultPpOwn } });
    // or
    this.sharedService.storePpOwnValue = resultPpOwn;
  }


  ngOnInit() {
  }

}

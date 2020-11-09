import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-kh-lim',
  templateUrl: './modal-kh-lim.component.html',
  styleUrls: ['./modal-kh-lim.component.scss']
})
export class ModalKhLimComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultKHLim: string

  constructor(
    public dialogRef: MatDialogRef<ModalKhLimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  calcKHLim() {
    this.resultKHLim = 'Rapid Increasing';
    const resultKhlim = 'Rapid Increeasing';
    const signPostFlagKhLim = "Slight Increeasing";

    this.router.navigate(['completion-envelope'], { state: { resultKhlim } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagKhLim } });
    // or
    this.sharedService.storeKhLimValue = 'Rapid Increasing';
    this.sharedService.signPostFlagKhLimValue = 'Slight Increasing';
  }


  ngOnInit() {
  }

}

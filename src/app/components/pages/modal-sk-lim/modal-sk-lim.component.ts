import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-sk-lim',
  templateUrl: './modal-sk-lim.component.html',
  styleUrls: ['./modal-sk-lim.component.scss']
})

export class ModalSkLimComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultSKLim: string

  constructor(
    public dialogRef: MatDialogRef<ModalSkLimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  calcSKLim() {
    this.resultSKLim = 'Rapid Increasing';
    const resultSkinLim = 'Rapid Increasing';
    const signPostFlagSkinLim = "Slight Increasing";

    this.router.navigate(['completion-envelope'], { state: { resultSkinLim } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagSkinLim } });
    // or
    this.sharedService.storeSkinLimValue = 'Rapid Increasing';
    this.sharedService.signPostFlagSkinLimValue = 'Slight Increasing';
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-accous-curr',
  templateUrl: './modal-accous-curr.component.html',
  styleUrls: ['./modal-accous-curr.component.scss']
})
export class ModalAccousCurrComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultACOUCurr: string

  constructor(
    public dialogRef: MatDialogRef<ModalAccousCurrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcACOUCurr() {
    this.resultACOUCurr = this.number1;
    const resultAcoucurr = this.number1;

    this.router.navigate(['completion-envelope'], { state: { resultAcoucurr } });
    // or
    this.sharedService.storeAcouCurrValue = resultAcoucurr;
  }


  ngOnInit() {
  }

}

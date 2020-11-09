import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-accous-sand',
  templateUrl: './modal-accous-sand.component.html',
  styleUrls: ['./modal-accous-sand.component.scss']
})
export class ModalAccousSandComponent implements OnInit {


  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultACOULim: string

  constructor(
    public dialogRef: MatDialogRef<ModalAccousSandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  calcACOULim() {
    this.resultACOULim = 'Spiking';
    const resultAcoulim = 'Spiking';
    const signPostFlagAcouLim = "Unstable";

    this.router.navigate(['completion-envelope'], { state: { resultAcoulim } });
    this.router.navigate(['completion-envelope'], { state: { signPostFlagAcouLim } });
    // or
    this.sharedService.storeAcouLimValue = 'Spiking';
    this.sharedService.signPostFlagAcouLimValue = 'Unstable';
  }


  ngOnInit() {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';
import regression from 'regression';
import { Router } from '@angular/router';
import { SharedServiceService } from './../../../shared-service.services';

@Component({
  selector: 'app-modal-pi-lim',
  templateUrl: './modal-pi-lim.component.html',
  styleUrls: ['./modal-pi-lim.component.scss']
})
export class ModalPiLimComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalPiLimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public router: Router, public sharedService: SharedServiceService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcPILim() {
      this.sharedService.storePiLimValue = "Decreasing";
      this.sharedService.storeSignPostFlagPiLimValue = "Slightly Decreasing";
    };
  ngOnInit() {
  }

}

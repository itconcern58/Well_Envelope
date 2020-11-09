import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';

@Component({
  selector: 'app-modal-hp',
  templateUrl: './modal-hp.component.html',
  styleUrls: ['./modal-hp.component.scss']
})
export class ModalHPComponent implements OnInit {

  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultHP: number;

  constructor(
    public dialogRef: MatDialogRef<ModalHPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcHP() {
    this.resultHP = parseFloat(this.number1)*parseFloat(this.number2)*parseFloat(this.number3)
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './../my-modal/modal-data';

@Component({
  selector: 'app-modal-pb',
  templateUrl: './modal-pb.component.html',
  styleUrls: ['./modal-pb.component.scss']
})

export class ModalPbComponent implements OnInit {
  number1: string = '1';
  number2: string = '1';
  number3: string = '1';
  number4: string = '1';
  number5: string = '1';
  resultPB: number;

  constructor(
    public dialogRef: MatDialogRef<ModalPbComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calcPB() {
    this.resultPB = 0.875*(2*parseFloat(this.number1)*parseFloat(this.number2)/parseFloat(this.number3))
  }

  ngOnInit() {
  }

}

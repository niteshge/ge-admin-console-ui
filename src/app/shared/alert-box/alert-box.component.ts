import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {
  value:any;
  constructor(public dialogRef: MatDialogRef<AlertBoxComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log("The data in the add popup is : ", this.data);
    this.value = this.data;
  }

}

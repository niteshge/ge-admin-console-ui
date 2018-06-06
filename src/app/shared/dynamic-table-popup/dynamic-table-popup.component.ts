import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dynamic-table-popup',
  templateUrl: './dynamic-table-popup.component.html',
  styleUrls: ['./dynamic-table-popup.component.css']
})
export class DynamicTablePopupComponent {

  constructor(public dialogRef: MatDialogRef<DynamicTablePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

 
  onNoClick(): void {
    this.dialogRef.close();
  }
}

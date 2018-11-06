import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dynamic-table-add',
  templateUrl: './dynamic-table-add.component.html',
  styleUrls: ['./dynamic-table-add.component.css']
})
export class DynamicTableAddComponent implements OnInit {
  rowData;
  listOfElementsToDisable:string[] = ['ID','CREATED BY','CREATED TIMESTAMP','DELETED BY','DELETED TIMESTAMP','MODIFIED BY','MODIFIED TIMESTAMP'];
  constructor(public dialogRef: MatDialogRef<DynamicTableAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log("The data in the add popup is : ", this.data);
    this.rowData = this.data;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onchangeEventRowData(key, value) {
    console.log("The onchange value is ", value);
    this.rowData[key] = value;
    console.log("The change object is ", this.rowData);
  }

}

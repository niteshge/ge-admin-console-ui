import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '../../../../../node_modules/@angular/material';
import { BusinessPriorityService } from '../../../core/business-priority.service';

@Component({
  selector: 'app-business-priority-edit',
  templateUrl: './business-priority-edit.component.html',
  styleUrls: ['./business-priority-edit.component.css']
})
export class BusinessPriorityEditComponent implements OnInit {
  rowData;
  constructor(
    public dialogRef: MatDialogRef<BusinessPriorityEditComponent>,
    public businessPriorityCoreService: BusinessPriorityService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log('The data in the edit popup is : ', this.data);
    this.rowData = this.data;
  }
  onchangeEventRowData(key, value) {
    value = value.trim();
    console.log('The onchange value is ', value);
    this.rowData[key] = value;
    console.log('The change object is ', this.rowData);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

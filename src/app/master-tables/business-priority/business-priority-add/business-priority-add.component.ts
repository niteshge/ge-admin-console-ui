import { Component, OnInit, Inject } from '@angular/core';
import { BusinessPriorityService } from '../../../core/business-priority.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-business-priority-add',
  templateUrl: './business-priority-add.component.html',
  styleUrls: ['./business-priority-add.component.css']
})
export class BusinessPriorityAddComponent implements OnInit {
  rowData;
  constructor(
    public dialogRef: MatDialogRef<BusinessPriorityAddComponent>,
    private businessPriorityCoreServices: BusinessPriorityService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log('The data in the add popup is : ', this.data);
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

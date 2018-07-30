import { Component, OnInit, Inject } from '@angular/core';
import { HorizontalTechnologyService } from '../../../core/horizontal-technologies.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-horizontal-technology-add',
  templateUrl: './horizontal-technology-add.component.html',
  styleUrls: ['./horizontal-technology-add.component.css']
})
export class HorizontalTechnologyAddComponent implements OnInit {

  rowData;

  constructor(
    public dialogRef: MatDialogRef<HorizontalTechnologyAddComponent>,
    private horizontalService: HorizontalTechnologyService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
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

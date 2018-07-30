import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';
import { MasterService } from '../../../core/master.service';

@Component({
  selector: 'app-solution-priority-association-add',
  templateUrl: './solution-priority-association-add.component.html',
  styleUrls: ['./solution-priority-association-add.component.css']
})
export class SolutionPriorityAssociationAddComponent implements OnInit {
  rowData;
  industrySubSegmentDisableParam = false;
  businessPrioritySubSegmentDisableParam = false;
  constructor(
    public dialogRef: MatDialogRef<SolutionPriorityAssociationAddComponent>,
    private masterTableService: MasterService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log('The data in the edit popup is : ', this.data);
    this.rowData = this.data;
  }
  changeIndustries(key, value) {
    if (this.rowData[key] !== value) {
      let randomValue = Math.random();
      console.log('The changed Industry is ', value);
      this.rowData[key] = value;
      let listOfSubIndustries: any = [];
      this.masterTableService
        .getIndustriesSubSegment(value, randomValue)
        .subscribe((response: Response) => {
          listOfSubIndustries = response;
          if (listOfSubIndustries.length > 0) {
            this.industrySubSegmentDisableParam = false;
            this.rowData['ALL SUB INDUSTRIES'] = listOfSubIndustries;
            this.rowData['INDUSTRY SEGMENT 1'] = '';
            this.rowData['INDUSTRY SEGMENT 2'] = '';
            this.rowData['INDUSTRY SEGMENT 3'] = '';
          } else {
            this.industrySubSegmentDisableParam = true;
          }
        });
    }
  }
  changeBusinessPriority(key, value) {
    if (this.rowData[key] !== value) {
      let randomValue = Math.random();
      console.log('The changed value of business priority is ', value);
      this.rowData[key] = value;
      let listOfSubBusinessPriorities: any = [];
      this.masterTableService
        .getSubSegmentBusinessPriorityByBusinessPriorityName(value, randomValue)
        .subscribe((response: Response) => {
          listOfSubBusinessPriorities = response;
          if (listOfSubBusinessPriorities.length > 0) {
            this.businessPrioritySubSegmentDisableParam = false;
            this.rowData[
              'ALL SUB BUSINESS PRIORITIES'
            ] = listOfSubBusinessPriorities;
            this.rowData['BUSINESS PRIORITY 2'] = '';
            this.rowData['BUSINESS PRIORITY 3'] = '';
          } else {
            this.businessPrioritySubSegmentDisableParam = true;
          }
        });
    }
  }
  onchangeEventRowData(key, value) {
    if (
      key === 'ORDER OF BUSINESS PRIORITY 1' ||
      key === 'ORDER OF BUSINESS PRIORITY 2' ||
      key === 'ORDER OF BUSINESS PRIORITY 3' ||
      key === 'ORDER OF SOLUTION'
    ) {
      value = Number(value);
    }
    value = value.trim();
    console.log('The onchange value is ', value);
    this.rowData[key] = value;
    console.log('The change object is ', this.rowData);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';
import { MasterService } from '../../../core/master.service';
import { SolutionPriorityAssociationService } from '../../../core/solution-priority-association.service';

@Component({
  selector: 'app-solution-priority-association-add',
  templateUrl: './solution-priority-association-add.component.html',
  styleUrls: ['./solution-priority-association-add.component.css']
})
export class SolutionPriorityAssociationAddComponent implements OnInit {
  rowData;
  industrySubSegment1DisableParam = false;
  industrySubSegment2DisableParam = false;
  industrySubSegment3DisableParam = false;
  businessPrioritySubSegment2DisableParam  = false;
  businessPrioritySubSegment3DisableParam  = false;
  constructor(
    public dialogRef: MatDialogRef<SolutionPriorityAssociationAddComponent>,
    private solutionPriorityAssocService: SolutionPriorityAssociationService,
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
      let listOfSubIndustries1: any = [];
      this.solutionPriorityAssocService
        .getIndustrySubSegment1(value, randomValue)
        .subscribe((response: Response) => {
          listOfSubIndustries1 = response;
          if (listOfSubIndustries1.length > 0) {
            this.industrySubSegment1DisableParam = false;
            this.industrySubSegment2DisableParam = true;
            this.industrySubSegment3DisableParam = true;
            this.rowData['ALL SUB INDUSTRIES 1'] = listOfSubIndustries1;
            this.rowData['INDUSTRY SEGMENT 1'] = '';
            this.rowData['INDUSTRY SEGMENT 2'] = '';
            this.rowData['INDUSTRY SEGMENT 3'] = '';
          } else {
            this.industrySubSegment1DisableParam = true;
            this.industrySubSegment2DisableParam = true;
            this.industrySubSegment3DisableParam = true;
          }
        });
    }
  }
  changeIndustriesSubSegment1(key, value) {
    if (this.rowData[key] !== value) {
      let randomValue = Math.random();
      console.log('The changed Industry Sub Segment 1 is ', value);
      this.rowData[key] = value;
      let listOfSubIndustries2: any = [];
      this.solutionPriorityAssocService
        .getIndustrySubSegmentChild(this.rowData['INDUSTRY'], value, randomValue)
        .subscribe((response: Response) => {
          listOfSubIndustries2 = response;
          if (listOfSubIndustries2.length > 0) {
            this.industrySubSegment2DisableParam = false;
            this.industrySubSegment3DisableParam = true;
            this.rowData['ALL SUB INDUSTRIES 2'] = listOfSubIndustries2;
            this.rowData['INDUSTRY SEGMENT 2'] = '';
            this.rowData['INDUSTRY SEGMENT 3'] = '';
          } else {
            this.industrySubSegment2DisableParam = true;
            this.industrySubSegment3DisableParam = true;
          }
        });
    }
  }

  changeIndustriesSubSegment2(key, value) {
    if (this.rowData[key] !== value) {
      let randomValue = Math.random();
      console.log('The changed Industry Sub Segment 2 is ', value);
      this.rowData[key] = value;
      let listOfSubIndustries2: any = [];
      this.solutionPriorityAssocService
        .getIndustrySubSegmentChild(this.rowData['INDUSTRY'], value, randomValue)
        .subscribe((response: Response) => {
          listOfSubIndustries2 = response;
          if (listOfSubIndustries2.length > 0) {
            this.industrySubSegment3DisableParam = false;
            this.rowData['ALL SUB INDUSTRIES 3'] = listOfSubIndustries2;
            this.rowData['INDUSTRY SEGMENT 3'] = '';
          } else {
            this.industrySubSegment3DisableParam = true;
          }
        });
    }
  }
  changeBusinessPriority1(key, value) {
    if (this.rowData[key] !== value) {
      let randomValue = Math.random();
      console.log('The changed value of business priority is ', value);
      this.rowData[key] = value;
      let listOfSubBusinessPriorities2: any = [];
      this.solutionPriorityAssocService
        .getBusinessPrioritySubSegment1(value, randomValue)
        .subscribe((response: Response) => {
          listOfSubBusinessPriorities2 = response;
          if (listOfSubBusinessPriorities2.length > 0) {
            this.businessPrioritySubSegment2DisableParam  = false;
            this.rowData[
              'ALL SUB BUSINESS PRIORITIES 2'
            ] = listOfSubBusinessPriorities2;
            this.rowData['BUSINESS PRIORITY 2'] = '';
            this.rowData['BUSINESS PRIORITY 3'] = '';
          } else {
            this.businessPrioritySubSegment2DisableParam  = true;
            this.businessPrioritySubSegment3DisableParam  = true;
          }
        });
    }
  }

  changeBusinessPriority2(key, value) {
    if (this.rowData[key] !== value) {
      let randomValue = Math.random();
      console.log('The changed value of business priority is ', value);
      this.rowData[key] = value;
      let listOfSubBusinessPriorities3: any = [];
      this.solutionPriorityAssocService
        .getBusinessPrioritySubSegmentChild(this.rowData['BUSINESS PRIORITY 1'], value, randomValue)
        .subscribe((response: Response) => {
          listOfSubBusinessPriorities3 = response;
          if (listOfSubBusinessPriorities3.length > 0) {
            this.businessPrioritySubSegment3DisableParam  = false;
            this.rowData[
              'ALL SUB BUSINESS PRIORITIES 3'
            ] = listOfSubBusinessPriorities3;
            this.rowData['BUSINESS PRIORITY 3'] = '';
          } else {
            this.businessPrioritySubSegment3DisableParam  = true;
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

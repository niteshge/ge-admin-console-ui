import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '../../../../../node_modules/@angular/material';
import { SolutionPriorityAssociationService } from '../../../core/solution-priority-association.service';
import { MasterService } from '../../../core/master.service';

@Component({
  selector: 'app-solution-priority-association-edit',
  templateUrl: './solution-priority-association-edit.component.html',
  styleUrls: ['./solution-priority-association-edit.component.css']
})
export class SolutionPriorityAssociationEditComponent implements OnInit {
  rowData;
  technology1 = null;
  technology2 = null;
  technology3 = null;
  technology4 = null;
  industrySubSegment1DisableParam = false;
  industrySubSegment2DisableParam = false;
  industrySubSegment3DisableParam = false;
  businessPrioritySubSegment2DisableParam = false;
  businessPrioritySubSegment3DisableParam = false;
  constructor(
    public dialogRef: MatDialogRef<SolutionPriorityAssociationEditComponent>,
    private solutionPriorityAssocService: SolutionPriorityAssociationService,
    private masterTableService: MasterService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log('The data in the edit popup is : ', this.data);
    this.rowData = this.data;
    this.rowData['ALL BUSINESS SOLUTION 1'] = '';
    this.rowData['ALL BUSINESS SOLUTION 2'] = '';
    this.rowData['ALL BUSINESS SOLUTION 3'] = '';
    this.rowData['ALL BUSINESS SOLUTION 4'] = '';
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
        .getIndustrySubSegmentChild(
          this.rowData['INDUSTRY'],
          value,
          randomValue
        )
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
        .getIndustrySubSegmentChild(
          this.rowData['INDUSTRY'],
          value,
          randomValue
        )
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
            this.businessPrioritySubSegment2DisableParam = false;
            this.rowData[
              'ALL SUB BUSINESS PRIORITIES 2'
            ] = listOfSubBusinessPriorities2;
            this.rowData['BUSINESS PRIORITY 2'] = '';
            this.rowData['BUSINESS PRIORITY 3'] = '';
          } else {
            this.businessPrioritySubSegment2DisableParam = true;
            this.businessPrioritySubSegment3DisableParam = true;
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
        .getBusinessPrioritySubSegmentChild(
          this.rowData['BUSINESS PRIORITY 1'],
          value,
          randomValue
        )
        .subscribe((response: Response) => {
          listOfSubBusinessPriorities3 = response;
          if (listOfSubBusinessPriorities3.length > 0) {
            this.businessPrioritySubSegment3DisableParam = false;
            this.rowData[
              'ALL SUB BUSINESS PRIORITIES 3'
            ] = listOfSubBusinessPriorities3;
            this.rowData['BUSINESS PRIORITY 3'] = '';
          } else {
            this.businessPrioritySubSegment3DisableParam = true;
          }
        });
    }
  }
  onChangeOfTechnology(key, value) {
    let randomValue = Math.random();
    if (key === 'TECHNOLOGY 1') {
      this.technology1 = value;
      this.masterTableService
        .getAllBusinessSolutionByTech(randomValue, value)
        .subscribe((response: Response) => {
          if(!response['errorMessage']){
          this.rowData['ALL BUSINESS SOLUTION 1'] = response;
          }else{
            this.rowData['ALL BUSINESS SOLUTION 1'] = '';
          }
        });
    } else if (key === 'TECHNOLOGY 2') {
      this.technology2 = value;
      this.masterTableService
        .getAllBusinessSolutionByTech(randomValue, value)
        .subscribe((response: Response) => {
          if(!response['errorMessage']){
            this.rowData['ALL BUSINESS SOLUTION 2'] = response;
          }else{
            this.rowData['ALL BUSINESS SOLUTION 2'] = '';
          }
        });
    } else if (key === 'TECHNOLOGY 3') {
      this.technology3 = value;
      this.masterTableService
        .getAllBusinessSolutionByTech(randomValue, value)
        .subscribe((response: Response) => {
          if(!response['errorMessage']){
          this.rowData['ALL BUSINESS SOLUTION 3'] = response;
          }else{
            this.rowData['ALL BUSINESS SOLUTION 3'] = '';
          }
        });
    } else if (key === 'TECHNOLOGY 4') {
      this.technology4 = value;
      this.masterTableService
        .getAllBusinessSolutionByTech(randomValue, value)
        .subscribe((response: Response) => {
          if(!response['errorMessage']){
          this.rowData['ALL BUSINESS SOLUTION 4'] = response;
          }else{
            this.rowData['ALL BUSINESS SOLUTION 4'] = '';
          }
        });
    }
  }

  onChangeOfSolutions(key,value){
    if(key==='SOLUTION 1'){
      if(value!==null && value!==''){
        let solution1WithTech = value.trim()+'^'+this.technology1;
        this.rowData[key] = solution1WithTech;
      }else{
        this.rowData[key] = null;
      }
     
    }else if(key==='SOLUTION 2'){
      if(value!==null && value!==''){
      let solution2WithTech = value.trim()+'^'+this.technology2;
      this.rowData[key] = solution2WithTech;
      }else{
        this.rowData[key] = null;
      }
    } else if(key==='SOLUTION 3'){
      if(value!==null && value!==''){
      let solution3WithTech = value.trim()+'^'+this.technology3;
      this.rowData[key] = solution3WithTech;
      }else{
        this.rowData[key] = null;
      }
    }else if(key==='SOLUTION 4'){
      if(value!==null && value!==''){
      let solution4WithTech = value.trim()+'^'+this.technology4;
      this.rowData[key] = solution4WithTech;
      }else{
        this.rowData[key] = null;
      }
    }
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

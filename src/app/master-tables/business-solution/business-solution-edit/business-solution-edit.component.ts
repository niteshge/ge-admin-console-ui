import {
  Component,
  OnInit,
  Inject,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BusinessSolutionsService } from '../../../core/business-solutions.service';

@Component({
  selector: 'app-business-solution-edit',
  templateUrl: './business-solution-edit.component.html',
  styleUrls: ['./business-solution-edit.component.css']
})
export class BusinessSolutionEditComponent implements OnInit {
  rowData;
  industriesDisableStatus: boolean = false;
  subIndustriesDisableStatus: boolean = false;
  techDisableStatus: boolean = false;
  subTechDisableStatus: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<BusinessSolutionEditComponent>,
    private businessSolutionCoreServices: BusinessSolutionsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log('The data in the edit popup is : ', this.data);
    this.rowData = this.data;
    if (this.rowData['TECH OR INDUSTRY'] == 'Industry') {
      this.techDisableStatus = true;
      this.subTechDisableStatus = true;
      this.rowData['TECHNOLOGY'] = '';
      this.rowData['TECHNOLOGY SEGMENT'] = '';
    } else if (this.rowData['TECH OR INDUSTRY'] == 'Technology') {
      this.industriesDisableStatus = true;
      this.subIndustriesDisableStatus = true;
      this.rowData['INDUSTRY'] = '';
      this.rowData['INDUSTRY SEGMENT'] = '';
    }
  }

  techChange(key, value) {
    this.rowData[key] = value;
    let randomValue = Math.random() * 10;
    this.businessSolutionCoreServices
      .getTechnologiesSubSegment(this.rowData[key], randomValue)
      .subscribe((response: Response) => {
        let listOfSubTech: any = [];
        listOfSubTech = response;
        if (listOfSubTech.length > 0) {
          this.rowData['ALL SUB TECHNOLOGY'] = listOfSubTech;
          this.subTechDisableStatus = false;
        } else {
          this.rowData['ALL SUB TECHNOLOGY'] = null;
          this.rowData['TECHNOLOGY SEGMENT'] = '';
          this.subTechDisableStatus = true;
        }
      });
  }

  industryChange(key, value) {
    this.rowData[key] = value;
    let randomValue = Math.random() * 10;
    this.businessSolutionCoreServices
      .getIndustriesSubSegment(this.rowData[key], randomValue)
      .subscribe((response: Response) => {
        let listOfSubIndustries: any = [];
        listOfSubIndustries = response;
        if (listOfSubIndustries.length > 0) {
          this.rowData['ALL SUB INDUSTRIES'] = listOfSubIndustries;
          this.subIndustriesDisableStatus = false;
        } else {
          this.rowData['ALL SUB INDUSTRIES'] = null;
          this.rowData['INDUSTRY SEGMENT'] = '';
          this.subIndustriesDisableStatus = true;
        }
      });
  }
  techOrIndustryChange(key, value) {
    this.rowData[key] = value;
    let randomValue = Math.random() * 10;
    if (value == 'Industry') {
      this.businessSolutionCoreServices
        .getIndustries(randomValue)
        .subscribe((response: Response) => {
          let listOfIndustries: any = [];
          listOfIndustries = response;
          if (listOfIndustries.length > 0) {
            this.rowData['ALL INDUSTRIES'] = listOfIndustries;
            this.rowData['TECHNOLOGY'] = '';
            this.rowData['TECHNOLOGY SEGMENT'] = '';
            this.rowData['ALL SUB TECHNOLOGY'] = null;
            this.rowData['ALL TECHNOLOGY'] = null;
            this.techDisableStatus = true;
            this.subTechDisableStatus = true;
            this.industriesDisableStatus = false;
            this.subIndustriesDisableStatus = false;
          }
        });
    } else if (value == 'Technology') {
      this.businessSolutionCoreServices
        .getTechnologies(randomValue)
        .subscribe((response: Response) => {
          let listOfTech: any = [];
          listOfTech = response;
          if (listOfTech.length > 0) {
            this.rowData['ALL TECHNOLOGY'] = listOfTech;
            this.rowData['INDUSTRY'] = '';
            this.rowData['INDUSTRY SEGMENT'] = '';
            this.rowData['ALL SUB INDUSTRIES'] = null;
            this.rowData['ALL INDUSTRIES'] = null;
            this.industriesDisableStatus = true;
            this.subIndustriesDisableStatus = true;
            this.techDisableStatus = false;
            this.subTechDisableStatus = false;
          }
        });
    }
  }
  onChangeName(value) {
    console.log('The previous value of name is ', this.rowData['NAME']);
    console.log('The changed value is ', value);
    let previousNameValue: string = this.rowData['NAME'];
    console.log('The stored previous value is ', previousNameValue);

    let listOfSearchText: string[] = this.splitSearchText(
      this.rowData['SEARCH TEXT']
    );

    if (listOfSearchText.indexOf(previousNameValue) > -1) {
      console.log(listOfSearchText.indexOf(previousNameValue));
      listOfSearchText.splice(listOfSearchText.indexOf(previousNameValue), 1);
      console.log('The search text array is ', listOfSearchText);
      value = value.trim();
      listOfSearchText.push(value);
      this.rowData['SEARCH TEXT'] = this.concatenateSearchText(
        listOfSearchText
      );
    }
  }
  radioChange(event) {
    if (event.value == 1) {
      this.rowData['TAGGING APPROACH'] = 'T';
      this.rowData['SEARCH APPROACH'] = '';
    } else if (event.value == 2) {
      this.rowData['TAGGING APPROACH'] = '';
      this.rowData['SEARCH APPROACH'] = 'T';
    }
    console.log(event.value);
  }
  splitSearchText(value: string) {
    let searchTextArray = value.split(',').map(function(item) {
      return item.trim();
    });
    return searchTextArray;
  }
  concatenateSearchText(listOfSearchText: string[]) {
    let searchText = '';
    if (listOfSearchText.length > 0) {
      searchText = listOfSearchText.join(', ');
    }
    return searchText;
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

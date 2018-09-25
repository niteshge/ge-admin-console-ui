import { Component, OnInit, Inject } from '@angular/core';
import { MasterService } from '../../../core/master.service';
import { BusinessTractionAndIndustryDisruptionService } from '../../../core/business-traction-and-industry-disruption.service';
import { IndustryService } from '../../../core/industry.service';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '../../../../../node_modules/@angular/material';
import { HorizontalTechnologyService } from '../../../core/horizontal-technologies.service';

@Component({
  selector: 'app-sub-technology-table-add',
  templateUrl: './sub-technology-table-add.component.html',
  styleUrls: ['./sub-technology-table-add.component.css']
})
export class SubTechnologyTableAddComponent implements OnInit {
  rowData = null;
  constructor(
    private masterTableService: MasterService,
    private businessTractionAndIndustryDisruption: BusinessTractionAndIndustryDisruptionService,
    private industryService: IndustryService,
    private horizontalService:HorizontalTechnologyService,
    public dialogRef: MatDialogRef<SubTechnologyTableAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.initialization();
  }

  initialization() {
    this.rowData = this.data;
    let randomValue = Math.random();
    let horizontalId = this.rowData['TECH ID'];
    let technologySegmentId = this.rowData['TECH SUB ID'];
    this.rowData['TYPE'] = null;
    this.masterTableService
      .getTechnologyNameById(horizontalId, randomValue)
      .subscribe((response: Response) => {
        console.log(response);
          this.rowData['TECHNOLOGY'] = response['NAME'];
      });

    this.rowData['INDUSTRY'] = [];
    this.rowData['INDUSTRY SEGMENT'] = [];
    this.rowData['TECHNOLOGY SEGMENT'] = null;
    this.rowData['START UP TYPE'] = null;
    this.rowData['PRODUCT TYPE'] = null;
    this.rowData['COMPANY REVENUE MODEL MAPPING'] = null;
    this.rowData['INDUSTRY BEING DISRUPTION'] = [];
    this.rowData['INDUSTRY SEGMENT BEING DISRUPTION'] = [];
    this.rowData['INCLUDE KEYWORD FOR ABOUT US SEG 1'] = null;
    this.rowData['INCLUDE KEYWORD FOR ABOUT US SEG 2'] = null;
    this.rowData['INCLUDE KEYWORD FOR ABOUT US SEG 3'] = null;
    this.rowData['INCLUDE KEYWORD FOR ABOUT US SEG 4'] = null;
    this.rowData['FOUNDER YEAR FILTER'] = 0;
    this.rowData['EXCLUSION TECHNOLOGY'] = null;
    this.rowData['INNOVATION'] = null;
    this.rowData['DISRUPTION'] = null;

    this.horizontalService
    .getTechnologiesNames(randomValue)
    .subscribe((response:Response) => {
      if(!response['errorMessage']){
        this.rowData['ALL TECHNOLOGIES'] = response;
        console.log('ALL THE TECHNOLOGIES ',this.rowData['ALL TECHNOLOGIES']);
      }
    });

    this.industryService
      .getIndustriesNames(randomValue)
      .subscribe((response: Response) => {
        if (!response['errorMessage']) {
          this.rowData['ALL INDUSTRIES'] = response;
          console.log('ALL THE INDUSTRIES ', this.rowData['ALL INDUSTRIES']);
        }
      });
    this.rowData['ALL INDUSTRY SUB'] = [];

    this.rowData['ALL INDUSTRY SEGMENT BEING DISRUPTION'] = [];
    this.masterTableService
      .getAllRevenueModel(randomValue)
      .subscribe((response: Response) => {
        if (!response['errorMessage']) {
          this.rowData['ALL REVENUE MODELS'] = response;
        } else {
          this.rowData['ALL REVENUE MODELS'] = ['None'];
        }
      });
    this.rowData['ALL BUSINESS TYPE'] = ['B2C', 'B2B', 'Both'];
    this.rowData['ALL START UP TYPE'] = ['Product', 'Service', 'Both'];
    this.rowData['ALL PRODUCT TYPE'] = ['Software', 'Hardware', 'Both'];
    this.rowData['ALL TYPE'] = ['Technology', 'Industry'];
  }
  industryChange(key, value) {
    console.log(
      'From the business traction.... the changed values of industry is  ',
      value
    );
    this.rowData[key] = value;
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
  onClickGetIndustrySub() {
    let listOfIndustries = [];
    let copyIndustry = Object.assign([], this.rowData['INDUSTRY']);
    for (let i of copyIndustry) {
      console.log('the industry for encode is ', i);
      listOfIndustries.push(encodeURIComponent(i));
    }
    let randomValue = Math.random() * 10;
    this.industryService
      .getIndustriesSubNamesByListOfIndutriesNames(
        listOfIndustries,
        randomValue
      )
      .subscribe((response: Response) => {
        if (!response['errorMessage']) {
          this.rowData['ALL INDUSTRY SUB'] = response;
        } else {
          this.rowData['ALL INDUSTRY SUB'] = ['None'];
        }
      });
  }

  industryBeingDisruptionChange(key, value) {
    console.log(
      'From the business traction.... the changed values of industry being disrupted is  ',
      value
    );
    this.rowData[key] = value;
  }
  onClickGetIndustrySubBeingDisrupted() {
    let listOfIndustriesBeingDisruption = [];
    let copyIndustry = Object.assign(
      [],
      this.rowData['INDUSTRY BEING DISRUPTION']
    );
    for (let i of copyIndustry) {
      console.log('the industry being disruption for encode is ', i);
      listOfIndustriesBeingDisruption.push(encodeURIComponent(i));
    }
    let randomValue = Math.random() * 10;
    this.industryService
      .getIndustriesSubNamesByListOfIndutriesNames(
        listOfIndustriesBeingDisruption,
        randomValue
      )
      .subscribe((response: Response) => {
        if (!response['errorMessage']) {
          this.rowData['ALL INDUSTRY SEGMENT BEING DISRUPTION'] = response;
        } else {
          this.rowData['ALL INDUSTRY SEGMENT BEING DISRUPTION'] = ['None'];
        }
      });
  }
}

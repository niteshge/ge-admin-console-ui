import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '../../../../../node_modules/@angular/material';
import { BusinessTractionAndIndustryDisruptionService } from '../../../core/business-traction-and-industry-disruption.service';
import { IndustryService } from '../../../core/industry.service';
import { MasterService } from '../../../core/master.service';
import { HorizontalTechnologyService } from '../../../core/horizontal-technologies.service';
import { SubTechnologyService } from '../../../core/sub-technology.service';

@Component({
  selector: 'app-sub-technology-table-edit',
  templateUrl: './sub-technology-table-edit.component.html',
  styleUrls: ['./sub-technology-table-edit.component.css']
})
export class SubTechnologyTableEditComponent implements OnInit {
  conditionAboutUsSegment1 = null;
  conditionAboutUsSegment2 = null;
  conditionAboutUsSegment3 = null;
  conditionAboutUsSegment4 = null;
  
  rowData = null;
  constructor(
    private masterTableService: MasterService,
    private businessTractionAndIndustryDisruption: BusinessTractionAndIndustryDisruptionService,
    private industryService: IndustryService,
    private horizontalTechnologyService: HorizontalTechnologyService,
    private subTechnologyService: SubTechnologyService,
    public dialogRef: MatDialogRef<SubTechnologyTableEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.initialization();
  }

  initialization() {
    let businessTractionIndustryDisruptionModel;
    let randomValue = Math.random();
    console.log('The data in the edit popup is : ', this.data);
    this.rowData = this.data;

    if(this.rowData['LEVEL']===1){
      this.conditionAboutUsSegment1 = 1;
    }else if(this.rowData['LEVEL'] === 2){
      this.conditionAboutUsSegment2 = 2;
    }else if(this.rowData['LEVEL'] === 3){
      this.conditionAboutUsSegment3 = 3;
    }else if(this.rowData['LEVEL'] === 4){
      this.conditionAboutUsSegment4 = 4;
    }
    let horizontalId = this.rowData['TECH ID'];
    let technologySegmentId = this.rowData['TECH SUB ID'];

    this.businessTractionAndIndustryDisruption
      .getAllBusinessTractionAndIndustrySegDisruption(
        horizontalId,
        technologySegmentId,
        randomValue
      )
      .subscribe((response: Response) => {
        console.log(
          'The response from the business traction and industry segment disruption is ',
          response
        );
        if (response['errorMessage']) {
          console.log('something went wrong');
        } else {
          businessTractionIndustryDisruptionModel = response;
          console.log(
            'the business traction and industry disruption model is ',
            businessTractionIndustryDisruptionModel
          );
          this.horizontalTechnologyService
          .getTechnologiesNames(randomValue)
          .subscribe((response:Response) => {
            if(!response['errorMessage']){
              this.rowData['ALL TECHNOLOGIES'] = response;
              console.log('ALL THE TECHNOLOGIES ',this.rowData['ALL TECHNOLOGIES']);
            }
          });
          this.rowData['TYPE'] =
            businessTractionIndustryDisruptionModel['TYPE'];
          this.rowData['TECHNOLOGY'] =
            businessTractionIndustryDisruptionModel['TECHNOLOGY'];
          this.rowData['TECHNOLOGY SEGMENT'] =
            businessTractionIndustryDisruptionModel['TECHNOLOGY SEGMENT'];
          this.rowData['INCLUDE KEYWORD FOR ABOUT US SEG 1'] = 
            businessTractionIndustryDisruptionModel['INCLUDE KEYWORD FOR ABOUT US SEG 1'];
            this.rowData['INCLUDE KEYWORD FOR ABOUT US SEG 2'] = 
            businessTractionIndustryDisruptionModel['INCLUDE KEYWORD FOR ABOUT US SEG 2'];
            this.rowData['INCLUDE KEYWORD FOR ABOUT US SEG 3'] = 
            businessTractionIndustryDisruptionModel['INCLUDE KEYWORD FOR ABOUT US SEG 3'];
            this.rowData['INCLUDE KEYWORD FOR ABOUT US SEG 4'] = 
            businessTractionIndustryDisruptionModel['INCLUDE KEYWORD FOR ABOUT US SEG 4'];
            this.rowData['FOUNDER YEAR FILTER'] = 
            businessTractionIndustryDisruptionModel['FOUNDER YEAR FILTER'];
            this.rowData['EXCLUSION TECHNOLOGY'] = 
            businessTractionIndustryDisruptionModel['EXCLUSION TECHNOLOGY'];
          if (businessTractionIndustryDisruptionModel['TECHNOLOGY'] === null) {
            this.horizontalTechnologyService
              .getHorizontalNameByHorizontalId(horizontalId, randomValue)
              .subscribe((techResponse: Response) => {
                if (techResponse['errorMessage']) {
                  //DO NOTHING
                } else {
                  this.rowData['TECHNOLOGY'] = techResponse['NAME'];
                }
              });
          }
          if (
            businessTractionIndustryDisruptionModel['TECHNOLOGY SEGMENT'] ===
            null
          ) {
            this.subTechnologyService
              .getTechnologyNameByTechnologyId(technologySegmentId, randomValue)
              .subscribe((techSubResponse: Response) => {
                if (techSubResponse['errorMessage']) {
                  //DO NOTHING...
                } else {
                  this.rowData['TECHNOLOGY SEGMENT'] = techSubResponse['item'];
                }
              });
          }
          if (businessTractionIndustryDisruptionModel['INDUSTRY'] === null) {
            this.rowData['INDUSTRY'] = [];
          } else {
            this.rowData['INDUSTRY'] =
              businessTractionIndustryDisruptionModel['INDUSTRY'];
          }
          if (
            businessTractionIndustryDisruptionModel['INDUSTRY SEGMENT'] === null
          ) {
            this.rowData['INDUSTRY SEGMENT'] = [];
          } else {
            this.rowData['INDUSTRY SEGMENT'] =
              businessTractionIndustryDisruptionModel['INDUSTRY SEGMENT'];
          }

          this.rowData['START UP TYPE'] =
            businessTractionIndustryDisruptionModel['START UP TYPE'];
          this.rowData['PRODUCT TYPE'] =
            businessTractionIndustryDisruptionModel['PRODUCT TYPE'];
          this.rowData['COMPANY REVENUE MODEL MAPPING'] =
            businessTractionIndustryDisruptionModel[
              'COMPANY REVENUE MODEL MAPPING'
            ];
          this.rowData['BUSINESS TYPE'] =
            businessTractionIndustryDisruptionModel['BUSINESS TYPE'];
          if (
            businessTractionIndustryDisruptionModel[
              'INDUSTRY BEING DISRUPTION'
            ] !== null
          ) {
            this.rowData['INDUSTRY BEING DISRUPTION'] =
              businessTractionIndustryDisruptionModel[
                'INDUSTRY BEING DISRUPTION'
              ];
          } else {
            this.rowData['INDUSTRY BEING DISRUPTION'] = [];
          }

          if (
            businessTractionIndustryDisruptionModel[
              'INDUSTRY SEGMENT BEING DISRUPTION'
            ] !== null
          ) {
            this.rowData['INDUSTRY SEGMENT BEING DISRUPTION'] =
              businessTractionIndustryDisruptionModel[
                'INDUSTRY SEGMENT BEING DISRUPTION'
              ];
          } else {
            this.rowData['INDUSTRY SEGMENT BEING DISRUPTION'] = [];
          }

          this.rowData['INNOVATION'] =
            businessTractionIndustryDisruptionModel['INNOVATION'];
          this.rowData['DISRUPTION'] =
            businessTractionIndustryDisruptionModel['DISRUPTION'];

          this.industryService
            .getIndustriesNames(randomValue)
            .subscribe((response: Response) => {
              if (!response['errorMessage']) {
                this.rowData['ALL INDUSTRIES'] = response;
                console.log(
                  'ALL THE INDUSTRIES ',
                  this.rowData['ALL INDUSTRIES']
                );
              }
            });
          this.industryService
            .getIndustriesSubNamesByListOfIndutriesNames(
              this.rowData['INDUSTRY'],
              randomValue
            )
            .subscribe((response: Response) => {
              if (!response['errorMessage']) {
                this.rowData['ALL INDUSTRY SUB'] = response;
                console.log(
                  'ALL THE INDUSTRY SUB',
                  this.rowData['ALL INDUSTRY SUB']
                );
              }
            });

          this.industryService
            .getIndustriesSubNamesByListOfIndutriesNames(
              this.rowData['INDUSTRY BEING DISRUPTION'],
              randomValue
            )
            .subscribe((response: Response) => {
              if (!response['errorMessage']) {
                this.rowData[
                  'ALL INDUSTRY SEGMENT BEING DISRUPTION'
                ] = response;
                console.log(
                  'ALL INDUSTRY SEGMENT BEING DISRUPTION',
                  this.rowData['ALL INDUSTRY SEGMENT BEING DISRUPTION']
                );
              }
            });
        }
      });
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

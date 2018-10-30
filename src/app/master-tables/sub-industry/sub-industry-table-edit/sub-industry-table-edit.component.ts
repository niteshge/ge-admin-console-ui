import { Component, OnInit, Inject } from '@angular/core';
import { IndustryService } from '../../../core/industry.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HorizontalTechnologyService } from '../../../core/horizontal-technologies.service';
import { ConditionFourService } from '../../../core/condition-four.service';
import { IndustrySubSegmentService } from '../../../core/industry-sub-segment.service';
export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
  level: number[];
  id: number[];
}
@Component({
  selector: 'app-sub-industry-table-edit',
  templateUrl: './sub-industry-table-edit.component.html',
  styleUrls: ['./sub-industry-table-edit.component.css']
})
export class SubIndustryTableEditComponent implements OnInit {
  rowData = null;
  conditionAboutUsSegment1 = null;
  conditionAboutUsSegment2 = null;
  conditionAboutUsSegment3 = null;
  conditionAboutUsSegment4 = null;
  
  constructor(
    private industryService: IndustryService,
    public dialogRef: MatDialogRef<SubIndustryTableEditComponent>,
    private horizontalTechnologyService: HorizontalTechnologyService,
    private conditionFourService: ConditionFourService,
    private industrySubService: IndustrySubSegmentService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.initialization();
    this.rowData['CONDITION FOUR ID'] = null;
    this.rowData['INCLUDE KEYWORDS FROM ABOUT US FOR SEG1'] = '';
    this.rowData['INCLUDE KEYWORDS FROM ABOUT US FOR SEG2'] = '';
    this.rowData['INCLUDE KEYWORDS FROM ABOUT US FOR SEG3'] = '';
    this.rowData['INCLUDE KEYWORDS FROM ABOUT US FOR SEG4'] = '';
    this.rowData['FOUNDED YEAR FILTER'] = 0;
    this.rowData['EXCLUSION TECHNOLOGY'] = '';
  }

  initialization() {
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
    let industryId = this.rowData['INDUSTRY ID'];
    let industrySegmentId = this.rowData['INDUSTRY SUB ID'];
    this.industryService
      .getIndustryById(industryId, randomValue)
      .subscribe((response: Response) => {
        this.rowData['INDUSTRY'] = response['NAME'];
        console.log('the industry is ', this.rowData['INDUSTRY']);
        this.rowData['INDUSTRY SUB SEGMENT'] = this.rowData['Edit Item'];
        let marketMapIndustry = this.rowData['MARKET MAP'];
        console.log("the market map of the industry is :", marketMapIndustry);
            this.conditionFourService
              .getConditionFourForIndustryType(
                marketMapIndustry,
                randomValue
              )
              .subscribe((response: Response) => {
                console.log("THE RESPONSE FROM THE CONDITION 4 IS :",response);
                if(response['ID']!==null){
                  this.rowData['CONDITION FOUR ID'] = response['ID'];
                }
                if(response['INCLUDE KEYWORDS FROM ABOUT US FOR SEG1']!==null){
                this.rowData['INCLUDE KEYWORDS FROM ABOUT US FOR SEG1'] =
                  response['INCLUDE KEYWORDS FROM ABOUT US FOR SEG1'];
                }
                if(response['INCLUDE KEYWORDS FROM ABOUT US FOR SEG2']!==null){
                this.rowData['INCLUDE KEYWORDS FROM ABOUT US FOR SEG2'] =
                  response['INCLUDE KEYWORDS FROM ABOUT US FOR SEG2'];
                }
                if(response['INCLUDE KEYWORDS FROM ABOUT US FOR SEG3']!==null){
                this.rowData['INCLUDE KEYWORDS FROM ABOUT US FOR SEG3'] =
                  response['INCLUDE KEYWORDS FROM ABOUT US FOR SEG3'];
                }
                if(response['INCLUDE KEYWORDS FROM ABOUT US FOR SEG4']!==null){
                this.rowData['INCLUDE KEYWORDS FROM ABOUT US FOR SEG4'] =
                  response['INCLUDE KEYWORDS FROM ABOUT US FOR SEG4'];
                }
                if(response['FOUNDED YEAR FILTER']!==null){
                this.rowData['FOUNDED YEAR FILTER'] =
                  response['FOUNDED YEAR FILTER'];
                }
                if(response['EXCLUSION TECHNOLOGY']!==null){
                this.rowData['EXCLUSION TECHNOLOGY'] =
                  response['EXCLUSION TECHNOLOGY'];
                }

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
              });
         
      });
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

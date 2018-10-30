import { Component, OnInit, Inject } from '@angular/core';
import { IndustryService } from '../../../core/industry.service';
import { SubIndustryTableEditComponent } from '../sub-industry-table-edit/sub-industry-table-edit.component';
import { HorizontalTechnologyService } from '../../../core/horizontal-technologies.service';
import { ConditionFourService } from '../../../core/condition-four.service';
import { IndustrySubSegmentService } from '../../../core/industry-sub-segment.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-sub-industry-table-add',
  templateUrl: './sub-industry-table-add.component.html',
  styleUrls: ['./sub-industry-table-add.component.css']
})
export class SubIndustryTableAddComponent implements OnInit {
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
    this.rowData['INDUSTRY SUB SEGMENT'] = '';
  }

  initialization() {
    let randomValue = Math.random();
    console.log('The data in the edit popup is : ', this.data);
    this.rowData = this.data;
    if(this.rowData['LEVEL']===0){
      this.conditionAboutUsSegment1 = 1;
    }else if(this.rowData['LEVEL'] === 1){
      this.conditionAboutUsSegment2 = 2;
    }else if(this.rowData['LEVEL'] === 2){
      this.conditionAboutUsSegment3 = 3;
    }else if(this.rowData['LEVEL'] === 3){
      this.conditionAboutUsSegment4 = 4;
    }
    let industryId = this.rowData['INDUSTRY ID'];
    let industrySegmentId = null;
    this.industryService
      .getIndustryById(industryId, randomValue)
      .subscribe((response: Response) => {
        this.rowData['INDUSTRY'] = response['NAME'];
        console.log('the industry is ', this.rowData['INDUSTRY']);
        let marketMapIndustry = this.rowData['MARKET MAP'];
        console.log('the market map of the industry is :', marketMapIndustry);
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

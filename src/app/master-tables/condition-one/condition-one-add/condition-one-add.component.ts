import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConditionOneService } from '../../../core/condition-one.service';
import { IndustrySubSegmentService } from '../../../core/industry-sub-segment.service';
import { MasterService } from '../../../core/master.service';
import { SubTechnologyService } from '../../../core/sub-technology.service';
import { HorizontalTechnologyService } from '../../../core/horizontal-technologies.service';

@Component({
  selector: 'app-condition-one-add',
  templateUrl: './condition-one-add.component.html',
  styleUrls: ['./condition-one-add.component.css']
})
export class ConditionOneAddComponent implements OnInit {
  rowData;
  segmentOneDisableParam: boolean = false;
  segmentTwoDisableParam: boolean = false;
  segmentThreeDisableParam: boolean = false;
  segmentFourDisableParam: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ConditionOneAddComponent>,
    private conditionOneService: ConditionOneService,
    private masterTableService: MasterService,
    private industrySubSegmentService: IndustrySubSegmentService,
    private subTechnologyService: SubTechnologyService,
    private horizontalTechnologyService: HorizontalTechnologyService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log('The data in the edit popup is : ', this.data);
    this.rowData = this.data;
    this.horizontalTechnologyService
      .getTechnologiesNames(Math.random())
      .subscribe((response: Response) => {
        this.rowData['ALL EXCLUSION TECHNOLOGY'] = response;
      });
  }

  onChangeOfTechOrIndustry(key, value) {
    if (this.rowData[key] !== value) {
      let randomValue = Math.random();
      console.log(`Tech or industry changed to : ${value}`);
      this.rowData[key] = value;
      this.segmentOneDisableParam = true;
      this.segmentTwoDisableParam = true;
      this.segmentThreeDisableParam = true;
      this.segmentFourDisableParam = true;
      this.rowData['GE DEFINATION CATEGORY'] = '';
      this.rowData['SEGMENT ONE'] = '';
      this.rowData['SEGMENT TWO'] = '';
      this.rowData['SEGMENT THREE'] = '';
      this.rowData['SEGMENT FOUR'] = '';
      if (this.rowData[key] === 'Industry/Sector') {
        this.masterTableService
          .getAllIndustriesNames(randomValue)
          .subscribe((response: Response) => {
            this.rowData['ALL GE DEFINATION CATEGORY'] = response;
          });
      } else if (this.rowData[key] === 'Technology') {
        this.horizontalTechnologyService
          .getTechnologiesNames(randomValue)
          .subscribe((response: Response) => {
            this.rowData['ALL GE DEFINATION CATEGORY'] = response;
          });
      }
    }
  }

  onChangeOfGEDefinationCategory(key, value) {
    if (this.rowData[key] !== value) {
      let randomValue = Math.random();
      console.log(`GE Defination category changed to : ${value}`);
      this.rowData[key] = value;
      this.segmentOneDisableParam = false;
      this.segmentTwoDisableParam = true;
      this.segmentThreeDisableParam = true;
      this.segmentFourDisableParam = true;
      this.rowData['SEGMENT ONE'] = '';
      this.rowData['SEGMENT TWO'] = '';
      this.rowData['SEGMENT THREE'] = '';
      this.rowData['SEGMENT FOUR'] = '';
      if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Industry/Sector') {
        if (
          this.rowData['GE DEFINATION CATEGORY'] !== null &&
          this.rowData['GE DEFINATION CATEGORY'] !== ''
        ) {
          this.industrySubSegmentService
            .getIndustrySubSegment1(
              this.rowData['GE DEFINATION CATEGORY'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment one ${response}`);
              this.rowData['ALL SEGMENT ONE'] = response;
              if (this.rowData['ALL SEGMENT ONE'] === []) {
                this.segmentOneDisableParam = true;
              }
            });
        } else {
          this.segmentOneDisableParam = true;
        }
      } else if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Technology') {
        if (
          this.rowData['GE DEFINATION CATEGORY'] !== null &&
          this.rowData['GE DEFINATION CATEGORY'] !== ''
        ) {
          this.subTechnologyService
            .getTechnologySubSegment1ByHorizontalName(
              this.rowData['GE DEFINATION CATEGORY'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment one ${response}`);
              this.rowData['ALL SEGMENT ONE'] = response;
              if (this.rowData['ALL SEGMENT ONE'] === []) {
                this.segmentOneDisableParam = true;
              }
            });
        } else {
          this.segmentOneDisableParam = true;
        }
      }
    }
  }

  onchangeOfSegmentOne(key, value) {
    if (this.rowData[key] !== value) {
      let randomValue = Math.random();
      console.log(`Segment one changed to : ${value}`);
      this.rowData[key] = value;
      this.segmentOneDisableParam = false;
      this.segmentTwoDisableParam = false;
      this.segmentThreeDisableParam = true;
      this.segmentFourDisableParam = true;
      this.rowData['SEGMENT TWO'] = '';
      this.rowData['SEGMENT THREE'] = '';
      this.rowData['SEGMENT FOUR'] = '';
      if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Industry/Sector') {
        if (
          this.rowData['SEGMENT ONE'] !== null &&
          this.rowData['SEGMENT ONE'] !== ''
        ) {
          this.industrySubSegmentService
            .getIndustrySubSegmentChild(
              this.rowData['GE DEFINATION CATEGORY'],
              this.rowData['SEGMENT ONE'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment two ${response}`);
              this.rowData['ALL SEGMENT TWO'] = response;
              if (this.rowData['ALL SEGMENT TWO'] === []) {
                this.segmentTwoDisableParam = true;
              }
            });
        } else {
          this.segmentTwoDisableParam = true;
        }
      } else if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Technology') {
        if (
          this.rowData['SEGMENT ONE'] !== null &&
          this.rowData['SEGMENT ONE'] !== ''
        ) {
          this.subTechnologyService
            .getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
              this.rowData['GE DEFINATION CATEGORY'],
              this.rowData['SEGMENT ONE'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment two ${response}`);
              this.rowData['ALL SEGMENT TWO'] = response;
              if (this.rowData['ALL SEGMENT TWO'] === []) {
                this.segmentTwoDisableParam = true;
              }
            });
        } else {
          this.segmentTwoDisableParam = true;
        }
      }
    }
  }
  onchangeOfSegmentTwo(key, value) {
    if (this.rowData[key] !== value) {
      let randomValue = Math.random();
      console.log(`Segment two changed to : ${value}`);
      this.rowData[key] = value;
      this.segmentOneDisableParam = false;
      this.segmentTwoDisableParam = false;
      this.segmentThreeDisableParam = false;
      this.segmentFourDisableParam = true;
      this.rowData['SEGMENT THREE'] = '';
      this.rowData['SEGMENT FOUR'] = '';
      if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Industry/Sector') {
        if (
          this.rowData['SEGMENT TWO'] !== null &&
          this.rowData['SEGMENT TWO'] !== ''
        ) {
          this.industrySubSegmentService
            .getIndustrySubSegmentChild(
              this.rowData['GE DEFINATION CATEGORY'],
              this.rowData['SEGMENT TWO'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment three ${response}`);
              this.rowData['ALL SEGMENT THREE'] = response;
              if (this.rowData['ALL SEGMENT THREE'] === []) {
                this.segmentThreeDisableParam = true;
              }
            });
        } else {
          this.segmentThreeDisableParam = true;
        }
      } else if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Technology') {
        if (
          this.rowData['SEGMENT TWO'] !== null &&
          this.rowData['SEGMENT TWO'] !== ''
        ) {
          this.subTechnologyService
            .getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
              this.rowData['GE DEFINATION CATEGORY'],
              this.rowData['SEGMENT TWO'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment three ${response}`);
              this.rowData['ALL SEGMENT THREE'] = response;
              if (this.rowData['ALL SEGMENT THREE'] === []) {
                this.segmentThreeDisableParam = true;
              }
            });
        } else {
          this.segmentThreeDisableParam = true;
        }
      }
    }
  }
  onchangeOfSegmentThree(key, value) {
    if (this.rowData[key] !== value) {
      let randomValue = Math.random();
      console.log(`Segment three changed to : ${value}`);
      this.rowData[key] = value;
      this.segmentOneDisableParam = false;
      this.segmentTwoDisableParam = false;
      this.segmentThreeDisableParam = false;
      this.segmentFourDisableParam = false;
      this.rowData['SEGMENT FOUR'] = '';
      if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Industry/Sector') {
        if (
          this.rowData['SEGMENT THREE'] !== null &&
          this.rowData['SEGMENT THREE'] !== ''
        ) {
          this.industrySubSegmentService
            .getIndustrySubSegmentChild(
              this.rowData['GE DEFINATION CATEGORY'],
              this.rowData['SEGMENT THREE'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment four ${response}`);
              this.rowData['ALL SEGMENT FOUR'] = response;
              if (this.rowData['ALL SEGMENT FOUR'] === []) {
                this.segmentFourDisableParam = true;
              }
            });
        } else {
          this.segmentFourDisableParam = true;
        }
      } else if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Technology') {
        if (
          this.rowData['SEGMENT THREE'] !== null &&
          this.rowData['SEGMENT THREE'] !== ''
        ) {
          this.subTechnologyService
            .getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
              this.rowData['GE DEFINATION CATEGORY'],
              this.rowData['SEGMENT THREE'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment four ${response}`);
              this.rowData['ALL SEGMENT FOUR'] = response;
              if (this.rowData['ALL SEGMENT FOUR'] === []) {
                this.segmentFourDisableParam = true;
              }
            });
        } else {
          this.segmentFourDisableParam = true;
        }
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

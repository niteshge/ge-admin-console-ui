import { Component, OnInit, Inject } from '@angular/core';
import { ConditionFourService } from '../../../core/condition-four.service';
import { IndustrySubSegmentService } from '../../../core/industry-sub-segment.service';
import { MasterService } from '../../../core/master.service';
import { SubTechnologyService } from '../../../core/sub-technology.service';
import { HorizontalTechnologyService } from '../../../core/horizontal-technologies.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-condition-four-edit',
  templateUrl: './condition-four-edit.component.html',
  styleUrls: ['./condition-four-edit.component.css']
})
export class ConditionFourEditComponent implements OnInit {
  rowData;
  segmentOneDisableParam: boolean = false;
  segmentTwoDisableParam: boolean = false;
  segmentThreeDisableParam: boolean = false;
  segmentFourDisableParam: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ConditionFourEditComponent>,
    private conditionTwoService: ConditionFourService,
    private masterTableService: MasterService,
    private industrySubSegmentService: IndustrySubSegmentService,
    private subTechnologyService: SubTechnologyService,
    private horizontalTechnologyService: HorizontalTechnologyService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

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
      this.rowData['ROUND FOUR FINAL TECHNOLOGY'] = '';
      this.rowData['ROUND FOUR SEGMENT ONE'] = '';
      this.rowData['ROUND FOUR SEGMENT TWO'] = '';
      this.rowData['ROUND FOUR SEGMENT THREE'] = '';
      this.rowData['ROUND FOUR SEGMENT FOUR'] = '';
      if (this.rowData[key] === 'Industry/Sector') {
        this.masterTableService
          .getAllIndustriesNames(randomValue)
          .subscribe((response: Response) => {
            this.rowData['ALL INDUSTRY OR TECHNOLOGY DEFINATION'] = response;
          });
      } else if (this.rowData[key] === 'Technology') {
        this.horizontalTechnologyService
          .getTechnologiesNames(randomValue)
          .subscribe((response: Response) => {
            this.rowData['ALL INDUSTRY OR TECHNOLOGY DEFINATION'] = response;
          });
      }
    }
  }

  onChangeOfRoundThreeFinalTechnology(key, value) {
    if (this.rowData[key] !== value) {
      let randomValue = Math.random();
      console.log(`round THREE final technology category changed to : ${value}`);
      this.rowData[key] = value;
      this.segmentOneDisableParam = false;
      this.segmentTwoDisableParam = true;
      this.segmentThreeDisableParam = true;
      this.segmentFourDisableParam = true;
      this.rowData['ROUND FOUR SEGMENT ONE'] = '';
      this.rowData['ROUND FOUR SEGMENT TWO'] = '';
      this.rowData['ROUND FOUR SEGMENT THREE'] = '';
      this.rowData['ROUND FOUR SEGMENT FOUR'] = '';
      if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Industry/Sector') {
        if (
          this.rowData['ROUND FOUR FINAL TECHNOLOGY'] !== null &&
          this.rowData['ROUND FOUR FINAL TECHNOLOGY'] !== ''
        ) {
          this.industrySubSegmentService
            .getIndustrySubSegment1(
              this.rowData['ROUND FOUR FINAL TECHNOLOGY'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all round two segment one ${response}`);
              this.rowData['ALL ROUND FOUR SEGMENT ONE'] = response;
              if (this.rowData['ALL ROUND FOUR SEGMENT ONE'] === []) {
                this.segmentOneDisableParam = true;
              }
            });
        } else {
          this.segmentOneDisableParam = true;
        }
      } else if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Technology') {
        if (
          this.rowData['ROUND FOUR FINAL TECHNOLOGY'] !== null &&
          this.rowData['ROUND FOUR FINAL TECHNOLOGY'] !== ''
        ) {
          this.subTechnologyService
            .getTechnologySubSegment1ByHorizontalName(
              this.rowData['ROUND FOUR FINAL TECHNOLOGY'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment one ${response}`);
              this.rowData['ALL ROUND FOUR SEGMENT ONE'] = response;
              if (this.rowData['ALL ROUND FOUR SEGMENT ONE'] === []) {
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
      console.log(`round THREE Segment one changed to : ${value}`);
      this.rowData[key] = value;
      this.segmentOneDisableParam = false;
      this.segmentTwoDisableParam = false;
      this.segmentThreeDisableParam = true;
      this.segmentFourDisableParam = true;
      this.rowData['ROUND FOUR SEGMENT TWO'] = '';
      this.rowData['ROUND FOUR SEGMENT THREE'] = '';
      this.rowData['ROUND FOUR SEGMENT FOUR'] = '';
      if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Industry/Sector') {
        if (
          this.rowData['ROUND FOUR SEGMENT ONE'] !== null &&
          this.rowData['ROUND FOUR SEGMENT ONE'] !== ''
        ) {
          this.industrySubSegmentService
            .getIndustrySubSegmentChild(
              this.rowData['ROUND FOUR FINAL TECHNOLOGY'],
              this.rowData['ROUND FOUR SEGMENT ONE'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment two ${response}`);
              this.rowData['ALL ROUND FOUR SEGMENT TWO'] = response;
              if (this.rowData['ALL ROUND FOUR SEGMENT TWO'] === []) {
                this.segmentTwoDisableParam = true;
              }
            });
        } else {
          this.segmentTwoDisableParam = true;
        }
      } else if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Technology') {
        if (
          this.rowData['ROUND FOUR SEGMENT ONE'] !== null &&
          this.rowData['ROUND FOUR SEGMENT ONE'] !== ''
        ) {
          this.subTechnologyService
            .getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
              this.rowData['ROUND FOUR FINAL TECHNOLOGY'],
              this.rowData['ROUND FOUR SEGMENT ONE'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment two ${response}`);
              this.rowData['ALL ROUND FOUR SEGMENT TWO'] = response;
              if (this.rowData['ALL ROUND FOUR SEGMENT TWO'] === []) {
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
      console.log(`round THREE Segment two changed to : ${value}`);
      this.rowData[key] = value;
      this.segmentOneDisableParam = false;
      this.segmentTwoDisableParam = false;
      this.segmentThreeDisableParam = false;
      this.segmentFourDisableParam = true;
      this.rowData['ROUND FOUR SEGMENT THREE'] = '';
      this.rowData['ROUND FOUR SEGMENT FOUR'] = '';
      if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Industry/Sector') {
        if (
          this.rowData['ROUND FOUR SEGMENT TWO'] !== null &&
          this.rowData['ROUND FOUR SEGMENT TWO'] !== ''
        ) {
          this.industrySubSegmentService
            .getIndustrySubSegmentChild(
              this.rowData['ROUND FOUR FINAL TECHNOLOGY'],
              this.rowData['ROUND FOUR SEGMENT TWO'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment three ${response}`);
              this.rowData['ALL ROUND FOUR SEGMENT THREE'] = response;
              if (this.rowData['ALL ROUND FOUR SEGMENT THREE'] === []) {
                this.segmentThreeDisableParam = true;
              }
            });
        } else {
          this.segmentThreeDisableParam = true;
        }
      } else if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Technology') {
        if (
          this.rowData['ROUND FOUR SEGMENT TWO'] !== null &&
          this.rowData['ROUND FOUR SEGMENT TWO'] !== ''
        ) {
          this.subTechnologyService
            .getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
              this.rowData['ROUND FOUR FINAL TECHNOLOGY'],
              this.rowData['ROUND FOUR SEGMENT TWO'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment three ${response}`);
              this.rowData['ALL ROUND FOUR SEGMENT THREE'] = response;
              if (this.rowData['ALL ROUND FOUR SEGMENT THREE'] === []) {
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
      console.log(`round two Segment three changed to : ${value}`);
      this.rowData[key] = value;
      this.segmentOneDisableParam = false;
      this.segmentTwoDisableParam = false;
      this.segmentThreeDisableParam = false;
      this.segmentFourDisableParam = false;
      this.rowData['ROUND FOUR SEGMENT FOUR'] = '';
      if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Industry/Sector') {
        if (
          this.rowData['ROUND FOUR SEGMENT THREE'] !== null &&
          this.rowData['ROUND FOUR SEGMENT THREE'] !== ''
        ) {
          this.industrySubSegmentService
            .getIndustrySubSegmentChild(
              this.rowData['ROUND FOUR FINAL TECHNOLOGY'],
              this.rowData['ROUND FOUR SEGMENT THREE'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment four ${response}`);
              this.rowData['ALL ROUND FOUR SEGMENT FOUR'] = response;
              if (this.rowData['ALL ROUND FOUR SEGMENT FOUR'] === []) {
                this.segmentFourDisableParam = true;
              }
            });
        } else {
          this.segmentFourDisableParam = true;
        }
      } else if (this.rowData['INDUSTRY OR TECHNOLOGY'] === 'Technology') {
        if (
          this.rowData['ROUND FOUR SEGMENT THREE'] !== null &&
          this.rowData['ROUND FOUR SEGMENT THREE'] !== ''
        ) {
          this.subTechnologyService
            .getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
              this.rowData['ROUND FOUR FINAL TECHNOLOGY'],
              this.rowData['ROUND FOUR SEGMENT THREE'],
              randomValue
            )
            .subscribe((response: Response) => {
              console.log(`The all segment four ${response}`);
              this.rowData['ALL ROUND FOUR SEGMENT FOUR'] = response;
              if (this.rowData['ALL ROUND FOUR SEGMENT FOUR'] === []) {
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

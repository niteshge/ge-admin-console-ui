import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConditionOneService } from '../../core/condition-one.service';
import { DynamicTablePopupComponent } from '../../shared/dynamic-table-popup/dynamic-table-popup.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { MasterService } from '../../core/master.service';
import { IndustrySubSegmentService } from '../../core/industry-sub-segment.service';
import { SubTechnologyService } from '../../core/sub-technology.service';
import { ConditionOneEditComponent } from './condition-one-edit/condition-one-edit.component';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { HorizontalTechnologyService } from '../../core/horizontal-technologies.service';
import { ConditionOneAddComponent } from './condition-one-add/condition-one-add.component';

@Component({
  selector: 'app-condition-one',
  templateUrl: './condition-one.component.html',
  styleUrls: ['./condition-one.component.css']
})
export class ConditionOneComponent implements OnInit {
  rowValue: any = {};
  conditionOneMaster;
  action;

  constructor(
    private conditionOneService: ConditionOneService,
    private masterTableService: MasterService,
    private industrySubSegmentService: IndustrySubSegmentService,
    private subTechnologyService: SubTechnologyService,
    private horizontalTechnologyService: HorizontalTechnologyService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllConditionOneMaster();
  }

  getAllConditionOneMaster() {
    let randomValue = Math.random();
    this.conditionOneService
      .getAllConditionOne(randomValue)
      .subscribe((response: Response) => {
        console.log(response);
        this.conditionOneMaster = response;
      });
  }

  openDialog(value): void {
    console.log(value);
    this.rowValue = value;
    console.log('this is the row value ', this.rowValue);
    let dialogRef = this.dialog.open(DynamicTablePopupComponent, {
      width: '500px',
      data: {
        clonePopup: false,
        textData: value.ID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.action = result;
      console.log('The action to take is ', this.action);
      this.takeAction(this.action);
    });
  }

  takeAction(value) {
    if (value === '1') {
      this.editRow(this.rowValue);
    } else if (value === '3') {
      console.log('delete On ', this.rowValue.ID);
      let dialogConfirm = this.dialog.open(DynamicYesNoPopupComponent, {
        width: '300px',
        data: { textValue: 'Are you sure you want to remove' }
      });
      dialogConfirm.afterClosed().subscribe(result => {
        console.log('The dialog confirm is closed with a action:', result);
        if (result == 100) {
          this.removeData(this.rowValue.ID);
        }
      });
    }
  }

  editRow(rowData) {
    let randomValue = Math.random();
    rowData['INDUSTRY_TECH'] = ['Technology', 'Industry/Sector'];
    if (rowData['INDUSTRY OR TECHNOLOGY'] === 'Industry/Sector') {
      this.masterTableService
        .getAllIndustriesNames(randomValue)
        .subscribe((response: Response) => {
          console.log('The industries are ', response);
          rowData['ALL GE DEFINATION CATEGORY'] = response;
        });
      if (
        rowData['GE DEFINATION CATEGORY'] !== null &&
        rowData['GE DEFINATION CATEGORY'] !== ''
      ) {
        this.industrySubSegmentService
          .getIndustrySubSegment1(
            rowData['GE DEFINATION CATEGORY'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL SEGMENT ONE'] = response;
          });
      } else {
        rowData['ALL SEGMENT ONE'] = [];
      }

      if (rowData['SEGMENT ONE'] !== null && rowData['SEGMENT ONE'] !== '') {
        this.industrySubSegmentService
          .getIndustrySubSegmentChild(
            rowData['GE DEFINATION CATEGORY'],
            rowData['SEGMENT ONE'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL SEGMENT TWO'] = response;
          });
      } else {
        rowData['ALL SEGMENT TWO'] = [];
      }
      if (rowData['SEGMENT TWO'] !== null && rowData['SEGMENT TWO'] !== '') {
        this.industrySubSegmentService
          .getIndustrySubSegmentChild(
            rowData['GE DEFINATION CATEGORY'],
            rowData['SEGMENT TWO'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL SEGMENT THREE'] = response;
          });
      } else {
        rowData['ALL SEGMENT THREE'] = [];
      }
      if (
        rowData['SEGMENT THREE'] !== null &&
        rowData['SEGMENT THREE'] !== ''
      ) {
        this.industrySubSegmentService
          .getIndustrySubSegmentChild(
            rowData['GE DEFINATION CATEGORY'],
            rowData['SEGMENT THREE'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL SEGMENT FOUR'] = response;
          });
      } else {
        rowData['ALL SEGMENT FOUR'] = [];
      }
    } else if (rowData['INDUSTRY OR TECHNOLOGY'] === 'Technology') {
      this.horizontalTechnologyService
        .getTechnologiesNames(randomValue)
        .subscribe((response: Response) => {
          console.log('The technologies are ', response);
          rowData['ALL GE DEFINATION CATEGORY'] = response;
        });
      if (
        rowData['GE DEFINATION CATEGORY'] !== null &&
        rowData['GE DEFINATION CATEGORY'] !== ''
      ) {
        this.subTechnologyService
          .getTechnologySubSegment1ByHorizontalName(
            rowData['GE DEFINATION CATEGORY'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL SEGMENT ONE'] = response;
          });
      } else {
        rowData['ALL SEGMENT ONE'] = [];
      }

      if (rowData['SEGMENT ONE'] !== null && rowData['SEGMENT ONE'] !== '') {
        this.subTechnologyService
          .getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
            rowData['GE DEFINATION CATEGORY'],
            rowData['SEGMENT ONE'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL SEGMENT TWO'] = response;
          });
      } else {
        rowData['ALL SEGMENT TWO'] = [];
      }
      if (rowData['SEGMENT TWO'] !== null && rowData['SEGMENT TWO'] !== '') {
        this.subTechnologyService
          .getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
            rowData['GE DEFINATION CATEGORY'],
            rowData['SEGMENT TWO'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL SEGMENT THREE'] = response;
          });
      } else {
        rowData['ALL SEGMENT THREE'] = [];
      }
      if (
        rowData['SEGMENT THREE'] !== null &&
        rowData['SEGMENT THREE'] !== ''
      ) {
        this.subTechnologyService
          .getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
            rowData['GE DEFINATION CATEGORY'],
            rowData['SEGMENT THREE'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL SEGMENT FOUR'] = response;
          });
      } else {
        rowData['ALL SEGMENT FOUR'] = [];
      }
    }
    this.conditionOneService
      .getAllCrunchbaseKeywords(randomValue)
      .subscribe((response: Response) => {
        rowData['ALL CRUNCHBASE KEYWORDS'] = response;
      });
    console.log('The json going to the edit popup is ', rowData);
    let dialogEdit = this.dialog.open(ConditionOneEditComponent, {
      width: '1200px',
      height: '500px',
      data: rowData
    });
    dialogEdit.afterClosed().subscribe(result => {
      // TODO: Use the change detector or some other method to only append the changed data in the datasource
      console.log('The value changed in the edit process is ', result);
      if (result != null) {
        let temp = null;
        console.log('The result is ', result);
        this.conditionOneService
          .updateConditionOne(result)
          .subscribe((response: Response) => {
            if (response['errorMessage']) {
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: response['errorMessage']
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            } else {
              this.conditionOneMaster = response;
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: 'Sucessfull'
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            }
          });
      }
    });
  }
  removeData(id: Number) {
    let randomValue = Math.random();
    this.conditionOneService
      .deleteBusinessSolutions(id)
      .subscribe((response: Response) => {
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: response['errorMessage']
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        } else {
          this.conditionOneMaster = response;
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: 'Sucessfully Deleted the record ' + id
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        }
      });
  }

  addRow() {
    console.log('Adding the row data');
    let rowDataJson = {};
    for (let key in this.conditionOneMaster[0]) {
      if (key.toUpperCase() != 'ID') {
        console.log('      key:', key);
        rowDataJson[key] = null;
      }
    }
    let randomValue = Math.random();
    this.conditionOneService
      .getAllCrunchbaseKeywords(randomValue)
      .subscribe((response: Response) => {
        rowDataJson['ALL CRUNCHBASE KEYWORDS'] = response;
      });
    rowDataJson['INDUSTRY_TECH'] = ['Technology', 'Industry/Sector'];

    let dialogAdd = this.dialog.open(ConditionOneAddComponent, {
      width: '1200px',
      height: '500px',
      data: rowDataJson
    });
    dialogAdd.afterClosed().subscribe(result => {
      console.log('The value changed in the add process is ', result);
      if (result != null) {
        console.log('The result is ', result);
        this.conditionOneService
          .saveBusinessSolutions(result)
          .subscribe((response: Response) => {
            if (response['errorMessage']) {
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: response['errorMessage']
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            } else {
              this.conditionOneMaster = response;
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: 'Sucessfull'
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            }
          });
      }
    });
  }
}

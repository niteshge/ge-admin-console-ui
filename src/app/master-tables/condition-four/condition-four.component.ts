import { Component, OnInit } from '@angular/core';
import { ConditionFourService } from '../../core/condition-four.service';
import { MasterService } from '../../core/master.service';
import { IndustrySubSegmentService } from '../../core/industry-sub-segment.service';
import { SubTechnologyService } from '../../core/sub-technology.service';
import { HorizontalTechnologyService } from '../../core/horizontal-technologies.service';
import { ConditionKeywordService } from '../../core/condition-keyword.service';
import { MatDialog } from '@angular/material';
import { DynamicTablePopupComponent } from '../../shared/dynamic-table-popup/dynamic-table-popup.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { ConditionFourEditComponent } from './condition-four-edit/condition-four-edit.component';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { ConditionFourAddComponent } from './condition-four-add/condition-four-add.component';

@Component({
  selector: 'app-condition-four',
  templateUrl: './condition-four.component.html',
  styleUrls: ['./condition-four.component.css']
})
export class ConditionFourComponent implements OnInit {
  rowValue: any = {};
  conditionFourMaster;
  action;
  constructor(
    private conditionFourService: ConditionFourService,
    private masterTableService: MasterService,
    private industrySubSegmentService: IndustrySubSegmentService,
    private subTechnologyService: SubTechnologyService,
    private horizontalTechnologyService: HorizontalTechnologyService,
    private condtionKeywordService: ConditionKeywordService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.getAllConditionThreeMaster();
  }

  getAllConditionThreeMaster() {
    let randomValue = Math.random();
    this.conditionFourService
      .getAllConditionFour(randomValue)
      .subscribe((response: Response) => {
        console.log(response);
        this.conditionFourMaster = response;
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
          rowData['ALL INDUSTRY OR TECHNOLOGY DEFINATION'] = response;
        });
      if (
        rowData['ROUND FOUR FINAL TECHNOLOGY'] !== null &&
        rowData['ROUND FOUR FINAL TECHNOLOGY'] !== ''
      ) {
        this.industrySubSegmentService
          .getIndustrySubSegment1(
            rowData['ROUND FOUR FINAL TECHNOLOGY'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL ROUND FOUR SEGMENT ONE'] = response;
          });
      } else {
        rowData['ALL ROUND FOUR SEGMENT ONE'] = [];
      }

      if (
        rowData['ROUND FOUR SEGMENT ONE'] !== null &&
        rowData['ROUND FOUR SEGMENT ONE'] !== ''
      ) {
        this.industrySubSegmentService
          .getIndustrySubSegmentChild(
            rowData['ROUND FOUR FINAL TECHNOLOGY'],
            rowData['ROUND FOUR SEGMENT ONE'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL ROUND FOUR SEGMENT TWO'] = response;
          });
      } else {
        rowData['ALL ROUND FOUR SEGMENT TWO'] = [];
      }
      if (
        rowData['ROUND FOUR SEGMENT TWO'] !== null &&
        rowData['ROUND FOUR SEGMENT TWO'] !== ''
      ) {
        this.industrySubSegmentService
          .getIndustrySubSegmentChild(
            rowData['ROUND FOUR FINAL TECHNOLOGY'],
            rowData['ROUND FOUR SEGMENT TWO'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL ROUND FOUR SEGMENT THREE'] = response;
          });
      } else {
        rowData['ALL ROUND FOUR SEGMENT THREE'] = [];
      }
      if (
        rowData['ROUND FOUR SEGMENT THREE'] !== null &&
        rowData['ROUND FOUR SEGMENT THREE'] !== ''
      ) {
        this.industrySubSegmentService
          .getIndustrySubSegmentChild(
            rowData['ROUND FOUR FINAL TECHNOLOGY'],
            rowData['ROUND FOUR SEGMENT THREE'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL ROUND FOUR SEGMENT FOUR'] = response;
          });
      } else {
        rowData['ALL ROUND FOUR SEGMENT FOUR'] = [];
      }
    } else if (rowData['INDUSTRY OR TECHNOLOGY'] === 'Technology') {
      this.horizontalTechnologyService
        .getTechnologiesNames(randomValue)
        .subscribe((response: Response) => {
          console.log('The technologies are ', response);
          rowData['ALL INDUSTRY OR TECHNOLOGY DEFINATION'] = response;
        });
      if (
        rowData['ROUND FOUR FINAL TECHNOLOGY'] !== null &&
        rowData['ROUND FOUR FINAL TECHNOLOGY'] !== ''
      ) {
        this.subTechnologyService
          .getTechnologySubSegment1ByHorizontalName(
            rowData['ROUND FOUR FINAL TECHNOLOGY'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL ROUND FOUR SEGMENT ONE'] = response;
          });
      } else {
        rowData['ALL ROUND FOUR SEGMENT ONE'] = [];
      }

      if (
        rowData['ROUND FOUR SEGMENT ONE'] !== null &&
        rowData['ROUND FOUR SEGMENT ONE'] !== ''
      ) {
        this.subTechnologyService
          .getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
            rowData['ROUND FOUR FINAL TECHNOLOGY'],
            rowData['ROUND FOUR SEGMENT ONE'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL ROUND FOUR SEGMENT TWO'] = response;
          });
      } else {
        rowData['ALL ROUND FOUR SEGMENT TWO'] = [];
      }
      if (
        rowData['ROUND FOUR SEGMENT TWO'] !== null &&
        rowData['ROUND FOUR SEGMENT TWO'] !== ''
      ) {
        this.subTechnologyService
          .getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
            rowData['ROUND FOUR FINAL TECHNOLOGY'],
            rowData['ROUND FOUR SEGMENT TWO'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL ROUND FOUR SEGMENT THREE'] = response;
          });
      } else {
        rowData['ALL ROUND FOUR SEGMENT THREE'] = [];
      }
      if (
        rowData['ROUND FOUR SEGMENT THREE'] !== null &&
        rowData['ROUND FOUR SEGMENT THREE'] !== ''
      ) {
        this.subTechnologyService
          .getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
            rowData['ROUND FOUR FINAL TECHNOLOGY'],
            rowData['ROUND FOUR SEGMENT THREE'],
            randomValue
          )
          .subscribe((response: Response) => {
            rowData['ALL ROUND FOUR SEGMENT FOUR'] = response;
          });
      } else {
        rowData['ALL ROUND FOUR SEGMENT FOUR'] = [];
      }
    }
    this.condtionKeywordService
      .getAllConditionKeywordNames(randomValue)
      .subscribe((response: Response) => {
        rowData['ALL CRUNCHBASE KEYWORDS'] = response;
      });
    console.log('The json going to the edit popup is ', rowData);
    let dialogEdit = this.dialog.open(ConditionFourEditComponent, {
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
        this.conditionFourService
          .updateConditionFour(result)
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
              this.conditionFourMaster = response;
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
    this.conditionFourService
      .deleteConditionFour(id)
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
          this.conditionFourMaster = response;
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
    for (let key in this.conditionFourMaster[0]) {
      if (key.toUpperCase() != 'ID') {
        console.log('      key:', key);
        rowDataJson[key] = null;
      }
    }
    let randomValue = Math.random();
    this.condtionKeywordService
      .getAllConditionKeywordNames(randomValue)
      .subscribe((response: Response) => {
        rowDataJson['ALL CRUNCHBASE KEYWORDS'] = response;
      });
    rowDataJson['INDUSTRY_TECH'] = ['Technology', 'Industry/Sector'];

    let dialogAdd = this.dialog.open(ConditionFourAddComponent, {
      width: '1200px',
      height: '500px',
      data: rowDataJson
    });
    dialogAdd.afterClosed().subscribe(result => {
      console.log('The value changed in the add process is ', result);
      if (result != null) {
        console.log('The result is ', result);
        this.conditionFourService
          .saveConditionFour(result)
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
              this.conditionFourMaster = response;
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

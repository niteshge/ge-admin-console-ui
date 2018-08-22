import { Component, OnInit } from '@angular/core';
import { ConditionKeywordService } from '../../core/condition-keyword.service';
import { MatDialog } from '@angular/material';
import { DynamicTablePopupComponent } from '../../shared/dynamic-table-popup/dynamic-table-popup.component';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { DynamicTableEditComponent } from '../../shared/dynamic-table-edit/dynamic-table-edit.component';
import { DynamicTableAddComponent } from '../../shared/dynamic-table-add/dynamic-table-add.component';

@Component({
  selector: 'app-condition-keywords',
  templateUrl: './condition-keywords.component.html',
  styleUrls: ['./condition-keywords.component.css']
})
export class ConditionKeywordsComponent implements OnInit {
  rowValue: any = {};
  conditionKeywords;
  action;
  constructor(
    private conditionKeywordService: ConditionKeywordService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllConditionKeywords();
  }

  getAllConditionKeywords() {
    let randomValue = Math.random();
    this.conditionKeywordService
      .getAllConditionKeywords(randomValue)
      .subscribe((response: Response) => {
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: response['errorMessage']
          });
          dialogAlert.afterClosed().subscribe(result => {
            // window.location.reload();
          });
        } else {
          this.conditionKeywords = response;
        }
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
          this.removeData(this.rowValue);
        }
      });
    }
  }

  editRow(value): void {
    let randomValue = Math.random();
    let tempRowObject = Object.assign({}, value);
    console.log('The json going to the edit popup is ', value);
    let dialogEdit = this.dialog.open(DynamicTableEditComponent, {
      width: '1100px',
      data: value
    });
    dialogEdit.afterClosed().subscribe(result => {
      console.log('The value changed in the edit process is ', result);
      if (result != null) {
        this.conditionKeywordService
          .updateConditionKeywords(result)
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
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: 'Sucessfull'
              });
              this.conditionKeywords = response;
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            }
          });
      }
    });
  }
  removeData(rowValue) {
    let randomValue = Math.random();
    if (rowValue != null) {
      this.conditionKeywordService
        .deleteConditionKeywords(rowValue.ID)
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
            this.conditionKeywords = response;
            let dialogAlert = this.dialog.open(AlertBoxComponent, {
              width: '300px',
              data: 'Sucessfully Deleted the record ' + rowValue.ID
            });
            dialogAlert.afterClosed().subscribe(result => {
              window.location.reload();
            });
          }
        });
    }
  }
  addRow() {
    console.log('Adding the row data');
    let rowDataJson = {};
    for (let key in this.conditionKeywords[0]) {
      if (key.toUpperCase() != 'ID') {
        console.log('      key:', key);
        rowDataJson[key] = null;
      }
    }
    console.log('The json going to the add popup is ', rowDataJson);
    let dialogAdd = this.dialog.open(DynamicTableAddComponent, {
      width: '400px',
      height: '200px',
      data: rowDataJson
    });
    dialogAdd.afterClosed().subscribe(result => {
      console.log('The value changed in the add process is ', result);
      if (result != null) {
        console.log('The result is ', result);
        this.conditionKeywordService
          .saveConditionKeywords(result)
          .subscribe((response: Response) => {
            if (response['errorMessage']) {
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: response['errorMessage']
              });
              dialogAlert.afterClosed().subscribe(result => {});
            } else {
              this.conditionKeywords = response;
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

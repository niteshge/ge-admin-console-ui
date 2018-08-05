import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HorizontalTechnologyService } from '../../core/horizontal-technologies.service';
import { DynamicTablePopupComponent } from '../../shared/dynamic-table-popup/dynamic-table-popup.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { DynamicTableEditComponent } from '../../shared/dynamic-table-edit/dynamic-table-edit.component';
import { HorizontalTechnologyAddComponent } from './horizontal-technology-add/horizontal-technology-add.component';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { HorizontalTechnologyEditComponent } from './horizontal-technology-edit/horizontal-technology-edit.component';
import { ConstantTextService } from '../constant-text.service';

@Component({
  selector: 'app-horizontal-technology',
  templateUrl: './horizontal-technology.component.html',
  styleUrls: ['./horizontal-technology.component.css']
})
export class HorizontalTechnologyComponent implements OnInit {
  rowValue: any = {};
  horizontalTechnology;
  action;
  constructor(
    private horizontalTechnologyCoreService: HorizontalTechnologyService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllHorizontal();
  }
  getAllHorizontal() {
    let randomValue = Math.random();
    this.horizontalTechnologyCoreService
      .getAllHorizontalTechnology(randomValue)
      .subscribe((response: Response) => {
        console.log(response);
        this.horizontalTechnology = response;
      });
  }

  openDialog(value) {
    console.log(value);
    this.rowValue = value;
    console.log('The row value id is ', this.rowValue, ' ', this.rowValue.ID);
    let dialogRef = this.dialog.open(DynamicTablePopupComponent, {
      width: '500px',
      data: { clonePopup: null, textData: this.rowValue.ID }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.action = result;
      console.log('The action to take is ', this.action);
      this.curdAction(this.action);
    });
  }

  curdAction(value) {
    if (value === '1') {
      console.log('Edit On ', this.rowValue.id);
      console.log('the selected row is ', this.rowValue);
      this.openEditDialog(this.rowValue);
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

  openEditDialog(value): void {
    let randomValue = Math.random();
    console.log('The json going to the edit popup is ', value);
    let tempRowObject = Object.assign({}, value);
    console.log('The json going to the edit popup is ', value);
    let dialogEdit = this.dialog.open(HorizontalTechnologyEditComponent, {
      width: '1100px',
      data: value
    });
    dialogEdit.afterClosed().subscribe(result => {
      console.log('The value changed in the edit process is ', result);
      if (result != null) {
        this.horizontalTechnologyCoreService
          .checkTechnologyExistInBusinessSolution(tempRowObject.NAME, 2, randomValue)
          .subscribe((response: Response) => {
            if (
              response['errorMessage'] == ConstantTextService.BusinessSolutionNoExistence
            ) {
              this.update(value);
            } else if (
              response['errorMessage'] ==
              ConstantTextService.BusinessSolutionUpdateStatusWithHorizontal
            ) {
              let dialogConfirm = this.dialog.open(DynamicYesNoPopupComponent, {
                width: '300px',
                data: { textValue: response['errorMessage'] }
              });
              dialogConfirm.afterClosed().subscribe(result => {
                console.log(
                  'The dialog confirm is closed with a action:',
                  result
                );
                if (result == 100) {
                  this.update(value);
                }
              });
            } else {
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: response['errorMessage']
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            }
          });
      }
    });
  }

  update(value) {
    console.log('The value changed in the edit inner process is ', value);
    this.horizontalTechnologyCoreService
      .updateHorizontalTechnology(value)
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
          this.horizontalTechnology = response;
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

  removeData(rowValue) {
    let randomValue = Math.random();
    this.horizontalTechnologyCoreService
      .checkTechnologyExistInBusinessSolution(rowValue.NAME, 3, randomValue)
      .subscribe((response: Response) => {
        if (response['errorMessage'] == ConstantTextService.BusinessSolutionNoExistence) {
          this.delete(rowValue.ID);
        } else if (
          response['errorMessage'] ==
          ConstantTextService.BusinessSolutionDeleteStatusWithHorizontal
        ) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            height: '400px',
            data: response['errorMessage']
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        }
      });
  }
  delete(id) {
    let randomValue = Math.random();
    this.horizontalTechnologyCoreService
      .deleteHorizontalTechnology(id, randomValue)
      .subscribe((response: Response) => {
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: 'Sorry, Something Went Wrong... Try Again.'
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        } else {
          this.horizontalTechnology = response;
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

  addRowData() {
    let randomValue = Math.random() * 10;
    console.log('Adding the row data');
    let rowDataJson = {};
    for (let key in this.horizontalTechnology[0]) {
      if (key.toUpperCase() != 'ID') {
        console.log('      key:', key);
        rowDataJson[key] = '';
      }
    }
    let dialogAdd = this.dialog.open(HorizontalTechnologyAddComponent, {
      width: '1000px',
      data: rowDataJson
    });
    dialogAdd.afterClosed().subscribe(result => {
      console.log('The value changed in the add process is ', result);
      if (result != null) {
        this.horizontalTechnologyCoreService
          .saveHorizontalTechnology(result)
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
              this.horizontalTechnology = response;
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

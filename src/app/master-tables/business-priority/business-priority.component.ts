import { Component, OnInit } from '@angular/core';
import { BusinessPriorityService } from '../../core/business-priority.service';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { BusinessPriorityAddComponent } from './business-priority-add/business-priority-add.component';
import { DynamicTablePopupComponent } from '../../shared/dynamic-table-popup/dynamic-table-popup.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { BusinessPriorityEditComponent } from './business-priority-edit/business-priority-edit.component';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';

@Component({
  selector: 'app-business-priority',
  templateUrl: './business-priority.component.html',
  styleUrls: ['./business-priority.component.css']
})
export class BusinessPriorityComponent implements OnInit {
  rowValue;
  businessPriorities;
  action;
  constructor(
    private businessPriorityCoreService: BusinessPriorityService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllBusinessPriorityMaster();
  }

  getAllBusinessPriorityMaster() {
    let randomValue = Math.random();
    this.businessPriorityCoreService
      .getAllBusinessPriorityMaster(randomValue)
      .subscribe((response: Response) => {
        console.log(response);
        this.businessPriorities = response;
      });
  }

  openDialog(value) {
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
        width: '500px',
        data: {
          textData: this.rowValue.ID
        }
      });
      dialogConfirm.afterClosed().subscribe(result => {
        console.log('The dialog confirm is closed with a action:', result);
        if (result == 100) {
          this.removeData(this.rowValue.ID);
        }
      });
    }
  }

  removeData(id) {
    let randomValue = Math.random();
    this.businessPriorityCoreService
      .deleteBusinessPriorityMaster(id)
      .subscribe((response: Response) =>{
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: 'Sorry, Something Went Wrong... Try Again.'
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        } else {
          this.businessPriorities = response;
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

  editRow(rowData) {
    console.log('The json going to the edit popup is ', rowData);
    let dialogEdit = this.dialog.open(BusinessPriorityEditComponent, {
      width: '500px',
      data: rowData
    });
    dialogEdit.afterClosed().subscribe(result => {
      console.log('The value changed in the edit process is ', result);
      if (result != null) {
        this.businessPriorityCoreService
          .updateBusinessPriorityMaster(result)
          .subscribe((response: Response) =>  {
            if (response['errorMessage']) {
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: 'Sorry, Something Went Wrong... Try Again.'
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            } else {
              this.businessPriorities = response;
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

  addRow() {
    let randomValue = Math.random() * 10;
    console.log('Adding the row data');
    let rowDataJson = {};
    for (let key in this.businessPriorities[0]) {
      if (key.toUpperCase() != 'ID') {
        console.log('      key:', key);
        rowDataJson[key] = '';
      }
    }
    let dialogAdd = this.dialog.open(BusinessPriorityAddComponent, {
      width: '400px',
      data: rowDataJson
    });
    dialogAdd.afterClosed().subscribe(result => {
      console.log('The value changed in the add process is ', result);
      if (result != null) {
        this.businessPriorityCoreService
          .saveBusinessPriorityMaster(result)
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
              this.businessPriorities = response;
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
export class BusinessPriorityMaster {
  public id: number = null;
  public businessPriority1: string = null;
}

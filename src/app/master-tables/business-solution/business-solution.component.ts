import { Component, OnInit } from '@angular/core';
import { BusinessSolutionsService } from '../../core/business-solutions.service';
import { MatDialog } from '@angular/material';
import { DynamicReportPopupComponent } from '../../shared/dynamic-report-popup/dynamic-report-popup.component';
import { DynamicTablePopupComponent } from '../../shared/dynamic-table-popup/dynamic-table-popup.component';
import { DynamicTableEditComponent } from '../../shared/dynamic-table-edit/dynamic-table-edit.component';
import { DynamicBusinessSolutionClonePopupComponent } from '../../shared/dynamic-business-solution-clone-popup/dynamic-business-solution-clone-popup.component';
import { DynamicTableAddComponent } from '../../shared/dynamic-table-add/dynamic-table-add.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';

@Component({
  selector: 'app-business-solution',
  templateUrl: './business-solution.component.html',
  styleUrls: ['./business-solution.component.css']
})
export class BusinessSolutionComponent implements OnInit {

  rowValue: any = {};
  businessSolutions;
  action;
  constructor(private businessSolutionCoreService: BusinessSolutionsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllBusinessSolutions()
  }

  getAllBusinessSolutions() {
    this.businessSolutionCoreService.getAllBusinessSolutons()
      .subscribe(
        (response: Response) => {
          console.log(response);
          this.businessSolutions = response;
        }
      )
  }

  openDialog(value): void {
    console.log(value);
    this.rowValue = value;
    let dialogRef = this.dialog.open(DynamicTablePopupComponent, {
      width: '1000px',
      data:"clone",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.action = result;
      console.log("The action to take is ", this.action);
      this.takeAction(this.action);
    });
  }
  takeAction(value) {
    if (value === '1') {
      console.log("Edit On ", this.rowValue.id);
      console.log("the selected row is ", this.rowValue);
      this.openEditDialog(this.rowValue);
      // let businessSolutionRow = this.businessSolutions.filter(businessSolution => businessSolution.id == this.rowValue.id);
      // console.log("The select row data is => ",businessSolutionRow);
    } else if (value === '2') {
      console.log("clone On ", this.rowValue.id);
      this.openCloneDialog(this.rowValue);

    }
    else if (value === '3') {
      console.log("delete On ", this.rowValue.id);
      let dialogConfirm = this.dialog.open(DynamicYesNoPopupComponent,{
        width:'300px',
        data: this.rowValue.id,
      });
      dialogConfirm.afterClosed().subscribe(result => {
        console.log("The dialog confirm is closed with a action:",result);
        if(result==100){
          this.removeData(this.rowValue.id);
        }
      });
    }
  }

  openCloneDialog(existingValue): void {
    let value = Object.assign({}, existingValue) //Cloning the actual object to the dummy object
    console.log("The json going to the clone popup is ", value);
    let dialogClone = this.dialog.open(DynamicBusinessSolutionClonePopupComponent, {
      width: '1000px',
      data: value,
    });
    dialogClone.afterClosed().subscribe(result => {
      console.log("The value changed in the edit process is ", result);
      if(result!=null){
        let randomValue = Math.random();
        this.businessSolutionCoreService.saveBusinessSolutions(result,randomValue)
        .subscribe(
          (response:Response) => {
            console.log(response);
          }
        )
      }
    });
  }
  openEditDialog(value): void {
    console.log("The json going to the edit popup is ", value);
    let dialogEdit = this.dialog.open(DynamicTableEditComponent, {
      width: '1000px',
      data: value,
    });
    dialogEdit.afterClosed().subscribe(result => {
      console.log("The value changed in the edit process is ", result);
      if(result!=null){
        this.businessSolutionCoreService.updateBusinessSolution(result)
        .subscribe(
          (response:Response) => {
          console.log(response);
          }
        );
      }
  });
}
  onchangeEventRowData(value) {
    console.log("The onchange evnet is in business", value);
  }

  addRowData() {
    console.log("Adding the row data");
    let columnNames = [];
    for (let key in this.businessSolutions[0]) {
      if (key != 'id') {
        console.log("      key:", key);
        columnNames.push(key);
      }
    }
    let dialogClone = this.dialog.open(DynamicTableAddComponent, {
      width: '1000px',
      data: columnNames,
    });
    dialogClone.afterClosed().subscribe(result => {
      console.log("The value changed in the add process is ", result);
      if(result!=null){
        let randomValue = Math.random();
        this.businessSolutionCoreService.saveBusinessSolutions(result,randomValue)
        .subscribe(
          (response:Response) => {
            console.log(response);
          }
        )
      }
    });
  }

  removeData(id){
    let randomValue = Math.random();
    this.businessSolutionCoreService.deleteBusinessSolutions(id,randomValue)
    .subscribe(
      (response:Response) => {
        console.log(response);
      }
    )
  }

}

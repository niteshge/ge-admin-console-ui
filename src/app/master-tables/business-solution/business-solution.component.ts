import { Component, OnInit } from '@angular/core';
import { BusinessSolutionsService } from '../../core/business-solutions.service';
import { MatDialog } from '@angular/material';
import { DynamicReportPopupComponent } from '../../shared/dynamic-report-popup/dynamic-report-popup.component';
import { DynamicTablePopupComponent } from '../../shared/dynamic-table-popup/dynamic-table-popup.component';
import { DynamicTableEditComponent } from '../../shared/dynamic-table-edit/dynamic-table-edit.component';

@Component({
  selector: 'app-business-solution',
  templateUrl: './business-solution.component.html',
  styleUrls: ['./business-solution.component.css']
})
export class BusinessSolutionComponent implements OnInit {

  rowValue:any = {};
  businessSolutions;
  action;
  constructor(private businessSolutionCoreService: BusinessSolutionsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllBusinessSolutions()
  }

  getAllBusinessSolutions(){
    this.businessSolutionCoreService.getAllBusinessSolutons()
    .subscribe(
      (response:Response) => {
          console.log(response);
          this.businessSolutions = response;
      }
    )
  }

  openDialog(value): void {
    console.log(value);
    this.rowValue = value;
    let dialogRef = this.dialog.open(DynamicTablePopupComponent, {
      width: '400px',
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
      console.log("delete On ", this.rowValue.id);
    }
  }

  openEditDialog(value):void{
    console.log("The json going to the edit popup is ",value);
    let dialogEdit = this.dialog.open(DynamicTableEditComponent,{
      width: '1000px',
      data: value,
    });
    dialogEdit.afterClosed().subscribe(result => {
      console.log("The value changed in the edit process is ", result);
    });
  }
  onchangeEventRowData(value){
    console.log("The onchange evnet is in business",value);
  }

}

import { Component, OnInit } from '@angular/core';
import { BusinessSolutionsService } from '../../core/business-solutions.service';
import { MatDialog } from '@angular/material';
import { DynamicReportPopupComponent } from '../../shared/dynamic-report-popup/dynamic-report-popup.component';

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
    let dialogRef = this.dialog.open(DynamicReportPopupComponent, {
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
      console.log("View On ", this.rowValue.id);
    } else if (value === '2') {
      console.log("delete On ", this.rowValue.id);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { InfocusReportService } from '../../core/infocus-report.service';
import { Observable } from 'rxjs';
import { InfocusMeta } from './infocus-report-view.model';
import { DynamicReportPopupComponent } from '../../shared/dynamic-report-popup/dynamic-report-popup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-infocus-report-view',
  templateUrl: './infocus-report-view.component.html',
  styleUrls: ['./infocus-report-view.component.css']
})
export class InfocusReportViewComponent implements OnInit {
  rowValue:any = {};
  modelData;
  action;
  constructor(private infocusCoreService: InfocusReportService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getInfocusMetadata();
  }

  getInfocusMetadata(){
    this.infocusCoreService.getAllInfocusMeta().subscribe(
      (response: Response) => {
        this.modelData = response;
      }
    );
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
      console.log("View On ", this.rowValue.report_id);
    } else if (value === '2') {
      console.log("delete On ", this.rowValue.id);
      this.deleteReport(this.rowValue.id);
    }
  }

  deleteReport(id:LongRange){
    this.infocusCoreService.deleteInfocusReportById(id)
    .subscribe(
      (response:Response) => {
        console.log(response);
        if(response.status === 200){
          this.getInfocusMetadata();
        }
      }
    )
  }

}
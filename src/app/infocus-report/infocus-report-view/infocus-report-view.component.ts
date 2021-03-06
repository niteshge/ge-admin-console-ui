import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { InfocusReportService } from '../../core/infocus-report.service';
import { Observable } from 'rxjs';
import { InfocusMeta } from './infocus-report-view.model';
import { DynamicReportPopupComponent } from '../../shared/dynamic-report-popup/dynamic-report-popup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import * as myGlobals from '../../app-globals';
import { HttpParams } from '@angular/common/http';
import { AuthService } from '../../core/auth/auth.service';

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
    let randomValue = Math.random();
    this.infocusCoreService.getAllInfocusMeta(randomValue).subscribe(
      (response: Response) => {
        this.modelData = response;
      }
    );
  }
  openDialog(value): void {
    console.log(value);
    this.rowValue = value;
    let dialogRef = this.dialog.open(DynamicReportPopupComponent, {
      width: '600px',
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
      console.log("View On ", this.rowValue.ID);
      this.viewPDF(this.rowValue.ID);
    } else if (value === '2') {
      console.log("delete On ", this.rowValue.ID);
      this.deleteReport(this.rowValue.ID);
    }else if (value === '3'){
      console.log("Publish Report ",this.rowValue.ID);
      let dialogConfirm = this.dialog.open(DynamicYesNoPopupComponent,{
        width:'300px',
      });
      dialogConfirm.afterClosed().subscribe(result => {
        console.log("The dialog confirm is closed with a action:",result);
        if(result==100){
          this.publishInfocusReport(this.rowValue.ID);
        }
      });
    }else if(value === '4'){
      console.log("View On ", this.rowValue.ID);
      this.viewPPT(this.rowValue.ID);
    }
  }

  viewPDF(id) {
    
    window.open('http://'+myGlobals.server+':8787/infocus/viewinfocuspdf/' + id + '.pdf' )
    this.infocusCoreService.getInfocusPDFbyId(id)
      .subscribe(
        (response: Response) => {

        }
      )
  }

  viewPPT(id) {
    window.open('http://'+myGlobals.server+':8787/infocus/viewinfocusppt/' + id + '.pptx' )
  }

  publishInfocusReport(reportMetaId){
    console.log("publish report with meta id: ",reportMetaId);
    let randomValue = Math.random();
    this.infocusCoreService.publishPdfById(reportMetaId,randomValue)
    .subscribe(
      (response:Response) => {
        console.log(response);
      }
    )
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
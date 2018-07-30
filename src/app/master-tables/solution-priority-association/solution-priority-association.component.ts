import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SolutionPriorityAssociationService } from '../../core/solution-priority-association.service';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { DynamicTablePopupComponent } from '../../shared/dynamic-table-popup/dynamic-table-popup.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { SolutionPriorityAssociationEditComponent } from './solution-priority-association-edit/solution-priority-association-edit.component';
import { MasterService } from '../../core/master.service';
import { BusinessPriorityService } from '../../core/business-priority.service';
import { SolutionPriorityAssociationAddComponent } from './solution-priority-association-add/solution-priority-association-add.component';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';

@Component({
  selector: 'app-solution-priority-association',
  templateUrl: './solution-priority-association.component.html',
  styleUrls: ['./solution-priority-association.component.css']
})
export class SolutionPriorityAssociationComponent implements OnInit {
  rowValue;
  solutionPriorityAssociation;
  action;
  constructor(
    private solutionPriorityAssociationService: SolutionPriorityAssociationService,
    private masterTableService: MasterService,
    private changeDetectorRefs: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllSolutionPriorityAssociation();
  }
  getAllSolutionPriorityAssociation() {
    let randomValue = Math.random();
    this.solutionPriorityAssociationService
      .getAllSolutionPriorityAssociation(randomValue)
      .subscribe((response: Response) => {
        this.solutionPriorityAssociation = response;
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
        width: '300px'
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
    this.masterTableService
      .getIndustries(randomValue)
      .subscribe((response: Response) => {
        console.log('The industries are ', response);
        rowData['ALL INDUSTRIES'] = response;
      });
    this.masterTableService
      .getIndustriesSubSegment(rowData['INDUSTRY'], randomValue)
      .subscribe((response: Response) => {
        rowData['ALL SUB INDUSTRIES'] = response;
      });
    this.masterTableService
      .getAllBusinessPrioritiesNames(randomValue)
      .subscribe((response: Response) => {
        rowData['ALL BUSINESS PRIORITY'] = response;
      });
    this.masterTableService
      .getSubSegmentBusinessPriorityByBusinessPriorityName(
        rowData['BUSINESS PRIORITY 1'],
        randomValue
      )
      .subscribe((response: Response) => {
        rowData['ALL SUB BUSINESS PRIORITIES'] = response;
      });
    this.masterTableService
      .getAllBusinessSolution(randomValue)
      .subscribe((response: Response) => {
        rowData['ALL BUSINESS SOLUTION'] = response;
      });
    console.log('The json going to the edit popup is ', rowData);
    let dialogEdit = this.dialog.open(
      SolutionPriorityAssociationEditComponent,
      {
        width: '1200px',
        height: '700px',
        data: rowData
      }
    );
    dialogEdit.afterClosed().subscribe(result => {
      // TODO: Use the change detector or some other method to only append the changed data in the datasource 
      console.log('The value changed in the edit process is ', result);
      if (result != null) {
        let temp = null;
        console.log('The result is ', result);
        this.solutionPriorityAssociationService
          .updateSolutionPriorityAssociation(result)
          .subscribe((response: Response) => {
            if(response['errorMessage']){
              let dialogAlert = this.dialog.open(AlertBoxComponent,{
                width: '300px',
                data: "Sorry, Something Went Wrong... Try Again.",
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            }else{
              //TODO: UNCOMMENT THE COMMENTED LINES AND COMMENT THE OTHER BELOW LINES AND MAKE SURE U ONLY APPEND THE EDITED/UPDATED ROW USING FILTER OR SOMETHING ELSE
            // this.solutionPriorityAssociation = response;
            // this.changeDetectorRefs.detectChanges();
            let dialogAlert = this.dialog.open(AlertBoxComponent,{
              width: '300px',
              data: "Sorry, Something Went Wrong... Try Again.",
            });
            dialogAlert.afterClosed().subscribe(result => {
              window.location.reload();
            });
            window.location.reload();
            }
          });
      }
    });
  }

  removeData(id: Number) {
    // TODO: Use the change detector or some other method to only append the changed data in the datasource 
    let randomValue = Math.random();
    this.solutionPriorityAssociationService
      .deleteSolutionPriorityAssociationById(id)
      .subscribe((response: Response) => {
        // this.solutionPriorityAssociation = response;
        // this.changeDetectorRefs.detectChanges();
        // window.location.reload();

        //TODO: COMMENT ALL THE BELOW LINES AND UNCOMMENT ABOVE ONCE
        if(response['errorMessage']){
          let dialogAlert = this.dialog.open(AlertBoxComponent,{
            width: '300px',
            data: "Sorry, Something Went Wrong... Try Again.",
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        }else{
          //TODO: UNCOMMENT THE COMMENTED LINES AND COMMENT THE OTHER BELOW LINES AND MAKE SURE U ONLY APPEND THE EDITED/UPDATED ROW USING FILTER OR SOMETHING ELSE
        // this.solutionPriorityAssociation = response;
        // this.changeDetectorRefs.detectChanges();
        let dialogAlert = this.dialog.open(AlertBoxComponent,{
          width: '300px',
          data: "Sorry, Something Went Wrong... Try Again.",
        });
        dialogAlert.afterClosed().subscribe(result => {
          window.location.reload();
        });
        window.location.reload();
        }
      });
  }

  addRow(){
    console.log('Adding the row data');
    let rowDataJson = {};
    for (let key in this.solutionPriorityAssociation[0]) {
      if (key != 'id') {
        console.log('      key:', key);
        rowDataJson[key] = null;
      }
    }
    let randomValue = Math.random();
    this.masterTableService
      .getIndustries(randomValue)
      .subscribe((response: Response) => {
        console.log('The industries are ', response);
        rowDataJson['ALL INDUSTRIES'] = response;
      });
      this.masterTableService
      .getAllBusinessPrioritiesNames(randomValue)
      .subscribe((response: Response) => {
        rowDataJson['ALL BUSINESS PRIORITY'] = response;
      });
      this.masterTableService
      .getAllBusinessSolution(randomValue)
      .subscribe((response: Response) => {
        rowDataJson['ALL BUSINESS SOLUTION'] = response;
      });
      console.log('The json going to the add popup is ', rowDataJson);
      let dialogAdd = this.dialog.open(
        SolutionPriorityAssociationAddComponent,
        {
          width: '1200px',
          height: '700px',
          data: rowDataJson
        }
      );
      dialogAdd.afterClosed().subscribe(result => {
        console.log('The value changed in the add process is ', result);
        if (result != null) {
          console.log('The result is ', result);
          this.solutionPriorityAssociationService
            .saveSolutionPriorityAssociation(result)
            .subscribe((response: Response) => {
              // this.solutionPriorityAssociation = response;
              if(response['errorMessage']){
                let dialogAlert = this.dialog.open(AlertBoxComponent,{
                  width: '300px',
                  data: "Sorry, Something Went Wrong... Try Again.",
                });
                dialogAlert.afterClosed().subscribe(result => {
                  window.location.reload();
                });
              }else{
                //TODO: UNCOMMENT THE COMMENTED LINES AND COMMENT THE OTHER BELOW LINES AND MAKE SURE U ONLY APPEND THE EDITED/UPDATED ROW USING FILTER OR SOMETHING ELSE
              // this.solutionPriorityAssociation = response;
              // this.changeDetectorRefs.detectChanges();
              let dialogAlert = this.dialog.open(AlertBoxComponent,{
                width: '300px',
                data: "Sorry, Something Went Wrong... Try Again.",
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
              window.location.reload();
              }
            });
        }
      });
  }
}

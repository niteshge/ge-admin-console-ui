import { Component, OnInit } from '@angular/core';
import { IndustryService } from '../../core/industry.service';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { DynamicTablePopupComponent } from '../../shared/dynamic-table-popup/dynamic-table-popup.component';
import { DynamicTableEditComponent } from '../../shared/dynamic-table-edit/dynamic-table-edit.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { DynamicTableAddComponent } from '../../shared/dynamic-table-add/dynamic-table-add.component';
import { ConstantTextService } from '../constant-text.service';
import { MasterService } from '../../core/master.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {
  rowValue: any = {};
  allUsernames;
  selectedUser:string = null;
  industries;
  action;
  constructor(
    private industryServiceCore: IndustryService,
    private masterService:MasterService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllUsernames();
    this.getAllIndustries();
  }
  getAllIndustries() {
    let randomValue = Math.random();
    this.industryServiceCore
      .getIndustries(randomValue)
      .subscribe((response: Response) => {
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: 'Sorry, Something Went Wrong... Try Again.'
          });
          dialogAlert.afterClosed().subscribe(result => {
            // window.location.reload();
          });
        } else {
          //TODO: UNCOMMENT THE COMMENTED LINES AND COMMENT THE OTHER BELOW LINES AND MAKE SURE U ONLY APPEND THE EDITED/UPDATED ROW USING FILTER OR SOMETHING ELSE
          this.industries = response;
          
          // this.changeDetectorRefs.detectChanges();
          // let dialogAlert = this.dialog.open(AlertBoxComponent,{
          // width: '300px',
          // data: "Sorry, Something Went Wrong... Try Again.",
          // });
          // dialogAlert.afterClosed().subscribe(result => {
          // window.location.reload();
          // });
          // window.location.reload();
        }
      });
  }
  getAllUsernames(){
    let randomValue = Math.random();
    this.masterService
    .getAllUsernames(randomValue)
    .subscribe((response:Response)=>{
      this.allUsernames = response;
    }
  )
  }
  usernameEntry(value){
    console.log("The username is :",value);
    this.selectedUser = value;
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
      // this.editRow(this.rowValue);
      this.furtureAlert();
      
    } else if (value === '3') {
      // console.log('delete On ', this.rowValue.ID);
      // let dialogConfirm = this.dialog.open(DynamicYesNoPopupComponent, {
      //   width: '300px',
      //   data: { textValue: 'Are you sure you want to remove' }
      // });
      // dialogConfirm.afterClosed().subscribe(result => {
      //   console.log('The dialog confirm is closed with a action:', result);
      //   if (result == 100) {
      //     this.removeData(this.rowValue);
      //   }
      // });
      this.furtureAlert();
    }
  }
  furtureAlert(){
    let dialogAlert = this.dialog.open(AlertBoxComponent, {
      width: '300px',
      data: 'This feature is under testing and will be coming soon on the next patch release'
    });
    dialogAlert.afterClosed().subscribe(result => {
      // do nothing;
    });
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
        this.industryServiceCore
          .checkIndustryExistInBusinessSolution(tempRowObject.NAME, 2, randomValue)
          .subscribe((response: Response) => {
            if (
              response['errorMessage'] == ConstantTextService.BusinessSolutionNoExistence
            ) {
              this.industryServiceCore.checkIndustryExistInSolutionPriorityAssociation(tempRowObject.NAME,2,randomValue)
              .subscribe((response:Response) => {
                if (
                  response['errorMessage'] == ConstantTextService.SoltionPriorityNoExistence
                ){
                  this.update(this.rowValue);
                }else if(response['errorMessage']==ConstantTextService.SolutionPriorityAssociationUpdateStatusWithIndustry){
                  let dialogConfirm = this.dialog.open(DynamicYesNoPopupComponent, {
                    width: '300px',
                    data: { textValue: 'This Industry Might Be Linked With Business Solution/Solution Priority Association Table... It Gets Updated Everywhere' }
                  });
                  dialogConfirm.afterClosed().subscribe(result => {
                    console.log(
                      'The dialog confirm is closed with a action:',
                      result
                    );
                    if (result == 100) {
                      this.rowValue['UPDATED USERNAME'] = this.selectedUser;
                      this.update(this.rowValue);
                    }
                  });
                }
              });
            } else if (
              response['errorMessage'] ==
              ConstantTextService.BusinessSolutionUpdateStatusWithIndustry
            ) {
              let dialogConfirm = this.dialog.open(DynamicYesNoPopupComponent, {
                width: '300px',
                data: { textValue: 'This Industry Might Be Linked With Business Solution/Solution Priority Association Table... It Gets Updated Everywhere' }
              });
              dialogConfirm.afterClosed().subscribe(result => {
                console.log(
                  'The dialog confirm is closed with a action:',
                  result
                );
                if (result == 100) {
                  this.rowValue['UPDATED USERNAME'] = this.selectedUser;
                  this.update(this.rowValue);
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

  update(result) {
    result['UPDATED USERNAME'] =this.selectedUser;
    console.log("THE UPDATING OF THE INDUSTRY :", result);
    this.industryServiceCore
      .updateIndustry(result)
      .subscribe((response: Response) => {
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            height: '400px',
            data: 'Sorry, Something Went Wrong... Try Again.'
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        } else {
          //TODO: UNCOMMENT THE COMMENTED LINES AND COMMENT THE OTHER BELOW LINES AND MAKE SURE U ONLY APPEND THE EDITED/UPDATED ROW USING FILTER OR SOMETHING ELSE
          this.industries = response;
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
    this.industryServiceCore
      .checkIndustryExistInBusinessSolution(rowValue.NAME, 3, randomValue)
      .subscribe((response: Response) => {
        if (response['errorMessage'] == ConstantTextService.BusinessSolutionNoExistence) {
          this.industryServiceCore.checkIndustryExistInSolutionPriorityAssociation(rowValue.NAME, 3, randomValue)
          .subscribe((response:Response) => {
            if (
              response['errorMessage'] == ConstantTextService.SoltionPriorityNoExistence
            ){
              this.delete(rowValue);
            }else{
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                height: '400px',
                data: 'This Industry Might Be Linked With Business Solution/Solution Priority Association Table... Please Clean Up To Delete Industry'
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            }
          });
        } else if(response['errorMessage']==ConstantTextService.BusinessSolutionDeleteStatusWithIndustry || response['errorMessage']== ConstantTextService.SolutionPriorityAssociationDeleteStatusWithIndustry){
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            height: '400px',
            data: 'This Industry Might Be Linked With Business Solution/Solution Priority Association Table... Please Clean Up To Delete Industry'
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        }
      });
  }

  delete(rowValue){
    this.industryServiceCore
    .deleteIndustryById(rowValue.ID)
    .subscribe((response: Response) => {
      if (response['errorMessage']) {
        let dialogAlert = this.dialog.open(AlertBoxComponent, {
          width: '300px',
          height: '400px',
          data: response['errorMessage']
        });
        dialogAlert.afterClosed().subscribe(result => {
          window.location.reload();
        });
      } else {
        //TODO: UNCOMMENT THE COMMENTED LINES AND COMMENT THE OTHER BELOW LINES AND MAKE SURE U ONLY APPEND THE EDITED/UPDATED ROW USING FILTER OR SOMETHING ELSE
        this.industries = response;
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

  addRow() {
    console.log('Adding the row data');
    let rowDataJson = {};
    for (let key in this.industries[0]) {
      if (key.toUpperCase() != 'ID') {
        console.log('      key:', key);
        rowDataJson[key] = null;
      }
    }
    let randomValue = Math.random();
    console.log('The json going to the add popup is ', rowDataJson);
    let dialogAdd = this.dialog.open(DynamicTableAddComponent, {
      width: '1100px',
      data: rowDataJson
    });
    dialogAdd.afterClosed().subscribe(result => {
      console.log('The value changed in the add process is ', result);
      if (result != null) {
        console.log('The result is ', result);
        this.industryServiceCore
          .saveIndustry(result)
          .subscribe((response: Response) => {
            // this.solutionPriorityAssociation = response;
            if (response['errorMessage']) {
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: 'Sorry, Something Went Wrong... Try Again.'
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            } else {
              //TODO: UNCOMMENT THE COMMENTED LINES AND COMMENT THE OTHER BELOW LINES AND MAKE SURE U ONLY APPEND THE EDITED/UPDATED ROW USING FILTER OR SOMETHING ELSE
              this.industries = response;
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: 'Sucessfull'
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
              // this.changeDetectorRefs.detectChanges();
              // let dialogAlert = this.dialog.open(AlertBoxComponent,{
              // width: '300px',
              // data: "Sorry, Something Went Wrong... Try Again.",
              // });
              // dialogAlert.afterClosed().subscribe(result => {
              // window.location.reload();
              // });
            }
          });
      }
    });
  }
}

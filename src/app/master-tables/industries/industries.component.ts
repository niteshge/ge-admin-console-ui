import { Component, OnInit } from '@angular/core';
import { IndustryService } from '../../core/industry.service';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { DynamicTablePopupComponent } from '../../shared/dynamic-table-popup/dynamic-table-popup.component';
import { DynamicTableEditComponent } from '../../shared/dynamic-table-edit/dynamic-table-edit.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { DynamicTableAddComponent } from '../../shared/dynamic-table-add/dynamic-table-add.component';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {

  rowValue: any = {};
  industries;
  action;
  constructor(private industryServiceCore:IndustryService, public dialog: MatDialog) { }


  ngOnInit() {
    this.getAllIndustries();
  }
  getAllIndustries(){
    let randomValue = Math.random();
    this.industryServiceCore.getIndustries(randomValue)
      .subscribe(
        (response:Response) =>{
          if(response['errorMessage']){
            let dialogAlert = this.dialog.open(AlertBoxComponent,{
              width: '300px',
              data: "Sorry, Something Went Wrong... Try Again.",
            });
            dialogAlert.afterClosed().subscribe(result => {
              // window.location.reload();
            });
          }else{
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
  editRow(value): void {
    console.log("The json going to the edit popup is ", value);
    let dialogEdit = this.dialog.open(DynamicTableEditComponent, {
      width: '1100px',
      data: value,
    });
    dialogEdit.afterClosed().subscribe(result => {
      console.log("The value changed in the edit process is ", result);
      if(result!=null){
        this.industryServiceCore.updateIndustry(result)
        .subscribe(
          (response:Response)=>{
            if(response['errorMessage']){
              let dialogAlert = this.dialog.open(AlertBoxComponent,{
                width: '300px',
                height: '400px',
                data: "Sorry, Something Went Wrong... Try Again.",
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            }else{
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
removeData(id){
  let randomValue = Math.random();
  this.industryServiceCore.deleteIndustryById(id)
  .subscribe(
    (response:Response) =>{
      if(response['errorMessage']){
        let dialogAlert = this.dialog.open(AlertBoxComponent,{
          width: '300px',
          height: '400px',
          data: "Sorry, Something Went Wrong... Try Again.",
        });
        dialogAlert.afterClosed().subscribe(result => {
          window.location.reload();
        });
      }else{
        //TODO: UNCOMMENT THE COMMENTED LINES AND COMMENT THE OTHER BELOW LINES AND MAKE SURE U ONLY APPEND THE EDITED/UPDATED ROW USING FILTER OR SOMETHING ELSE
        this.industries = response;
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

addRow(){
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
    let dialogAdd = this.dialog.open(
      DynamicTableAddComponent,
      {
        width: '1100px',
        data: rowDataJson
      }
    );
    dialogAdd.afterClosed().subscribe(result => {
      console.log('The value changed in the add process is ', result);
      if (result != null) {
        console.log('The result is ', result);
        this.industryServiceCore
          .saveIndustry(result)
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

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HorizontalTechnologyService } from '../../core/horizontal-technologies.service';
import { DynamicTablePopupComponent } from '../../shared/dynamic-table-popup/dynamic-table-popup.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { DynamicTableEditComponent } from '../../shared/dynamic-table-edit/dynamic-table-edit.component';

@Component({
  selector: 'app-horizontal-technology',
  templateUrl: './horizontal-technology.component.html',
  styleUrls: ['./horizontal-technology.component.css']
})
export class HorizontalTechnologyComponent implements OnInit {
  rowValue: any = {};
  horizontalTechnology;
  action;
  constructor(private horizontalTechnologyCoreService: HorizontalTechnologyService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllHorizontal();
  }
  getAllHorizontal(){
      this.horizontalTechnologyCoreService.getAllHorizontalTechnology()
      .subscribe(
        (response:Response) =>{
          console.log(response);
          this.horizontalTechnology = response;
        }
      )
  }

  openDialog(value){
    console.log(value);
    this.rowValue = value;
    let dialogRef = this.dialog.open(DynamicTablePopupComponent, {
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.action = result;
      console.log("The action to take is ", this.action);
      this.curdAction(this.action);
    });
  }

  curdAction(value){
    if (value === '1') {
      console.log("Edit On ", this.rowValue.id);
      console.log("the selected row is ", this.rowValue);
      this.openEditDialog(this.rowValue);
    }else if (value === '3') {
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

  openEditDialog(value): void {
    console.log("The json going to the edit popup is ", value);
    let dialogEdit = this.dialog.open(DynamicTableEditComponent, {
      width: '1000px',
      data: value,
    });
    dialogEdit.afterClosed().subscribe(result => {
      console.log("The value changed in the edit process is ", result);
      if(result!=null){
        this.horizontalTechnologyCoreService.updateHorizontalTechnology(result)
        .subscribe(
          (response:Response) => {
          console.log(response);
          }
        );
      }
  });
}
removeData(id){
  let randomValue = Math.random();
  this.horizontalTechnologyCoreService.deleteHorizontalTechnology(id,randomValue)
  .subscribe(
    (response:Response) => {
      console.log(response);
    }
  )
}
  addRowData(){
    console.log("Need to add row");
  }
}

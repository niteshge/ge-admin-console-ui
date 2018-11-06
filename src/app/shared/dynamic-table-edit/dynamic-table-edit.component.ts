import { Component, OnInit, Inject, Pipe, PipeTransform } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dynamic-table-edit',
  templateUrl: './dynamic-table-edit.component.html',
  styleUrls: ['./dynamic-table-edit.component.css']
})
export class DynamicTableEditComponent implements OnInit {
rowData;
listOfElementsToDisable:string[] = ['ID','CREATED BY','CREATED TIMESTAMP','DELETED BY','DELETED TIMESTAMP','MODIFIED BY','MODIFIED TIMESTAMP'];
tech  = true;
  constructor(public dialogRef: MatDialogRef<DynamicTableEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log("The data in the edit popup is : ",this.data);
this.rowData = this.data;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onchangeEventRowData(key,value){
    console.log("The onchange value is ",value);
    this.rowData[key] = value;
    console.log("The change object is ", this.rowData);
  }

}
@Pipe({name: 'keys'})
export class KeysPipesModule implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
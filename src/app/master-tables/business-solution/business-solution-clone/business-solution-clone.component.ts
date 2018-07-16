import { Component, OnInit, Inject, PipeTransform, Pipe } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-business-solution-clone',
  templateUrl: './business-solution-clone.component.html',
  styleUrls: ['./business-solution-clone.component.css']
})
export class BusinessSolutionCloneComponent implements OnInit {
  rowData;
  constructor(public dialogRef: MatDialogRef<BusinessSolutionCloneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
      console.log("The data in the clone popup is : ",this.data);
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





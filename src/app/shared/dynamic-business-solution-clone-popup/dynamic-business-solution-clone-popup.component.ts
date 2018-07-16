import { Component, OnInit, Inject, Pipe, PipeTransform } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dynamic-business-solution-clone-popup',
  templateUrl: './dynamic-business-solution-clone-popup.component.html',
  styleUrls: ['./dynamic-business-solution-clone-popup.component.css']
})
export class DynamicBusinessSolutionClonePopupComponent implements OnInit {
  rowData;
  constructor(
    public dialogRef: MatDialogRef<DynamicBusinessSolutionClonePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log('The data in the clone popup is : ', this.data);
    this.rowData = this.data;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onchangeEventRowData(key, value) {
    console.log('The onchange value is ', value);
    this.rowData[key] = value;
    console.log('The change object is ', this.rowData);
  }
  onChangeName(value) {
    console.log('The previous value of name is ', this.rowData['NAME']);
    console.log('The changed value is ', value);
    let previousNameValue: string = this.rowData['NAME'];
    console.log('The stored previous value is ', previousNameValue);

    let listOfSearchText: string[] = this.splitSearchText(
      this.rowData['SEARCH TEXT']
    );

    if (listOfSearchText.indexOf(previousNameValue) > -1) {
      console.log(listOfSearchText.indexOf(previousNameValue));
      listOfSearchText.splice(listOfSearchText.indexOf(previousNameValue), 1);
      console.log('The search text array is ', listOfSearchText);
      value = value.trim();
      listOfSearchText.push(value);
      this.rowData['SEARCH TEXT'] = this.concatenateSearchText(
        listOfSearchText
      );
    }
    this.rowData['NAME'] = value;
  }
  splitSearchText(value: string) {
    let searchTextArray = value.split(',').map(function(item) {
      return item.trim();
    });
    return searchTextArray;
  }
  concatenateSearchText(listOfSearchText: string[]) {
    let searchText = '';
    if (listOfSearchText.length > 0) {
      searchText = listOfSearchText.join(', ');
    }
    return searchText;
  }
}
// @Pipe({name: 'keys'})
// export class KeysPipesModule implements PipeTransform {
//   transform(value, args:string[]) : any {
//     let keys = [];
//     for (let key in value) {
//       keys.push({key: key, value: value[key]});
//     }
//     return keys;
//   }
// }

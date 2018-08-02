import { Component, OnInit, Inject } from '@angular/core';
import { HorizontalTechnologyService } from '../../../core/horizontal-technologies.service';
import { MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher } from '../../../../../node_modules/@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-horizontal-technology-edit',
  templateUrl: './horizontal-technology-edit.component.html',
  styleUrls: ['./horizontal-technology-edit.component.css']
})
export class HorizontalTechnologyEditComponent implements OnInit {
  orderForSolutionFillAppearnce:string;
  numberFormControl = new FormControl('', [
    Validators.required,
    Validators.min(0),
  ]);
  rowData;

  constructor(
    public dialogRef: MatDialogRef<HorizontalTechnologyEditComponent>,
    private horizontalService: HorizontalTechnologyService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log('The data in the add popup is : ', this.data);
    this.rowData = this.data;
  }
  onchangeEventRowData(key, value) {
    value = value.trim();
    console.log('The onchange value is ', value);
    this.rowData[key] = value;
    console.log('The change object is ', this.rowData);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  customErrorStateMatcher: ErrorStateMatcher = {
    isErrorState: (control: FormControl | null) => {
      if (control) {
        const hasInteraction = control.dirty || control.touched;
        const isInvalid = control.invalid;

        return !!(hasInteraction && isInvalid);
      }

      return false;
    }
  };
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
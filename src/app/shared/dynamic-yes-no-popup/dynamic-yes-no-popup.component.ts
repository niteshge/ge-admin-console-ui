import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dynamic-yes-no-popup',
  templateUrl: './dynamic-yes-no-popup.component.html',
  styleUrls: ['./dynamic-yes-no-popup.component.css']
})
export class DynamicYesNoPopupComponent {


  
  constructor(public dialogRef: MatDialogRef<DynamicYesNoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
    ngOnInit() {
    }
  

  onNoClick(): void {
    this.dialogRef.close();
  }
}

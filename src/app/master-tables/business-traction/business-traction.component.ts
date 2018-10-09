import { Component, OnInit } from '@angular/core';
import { BusinessTractionService } from '../../core/business-traction.service';
import { MatDialog } from '@angular/material';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';

@Component({
  selector: 'app-business-traction',
  templateUrl: './business-traction.component.html',
  styleUrls: ['./business-traction.component.css']
})
export class BusinessTractionComponent implements OnInit {
  businessTraction;
  loading=false;
  constructor(
    private businessTractionCoreService: BusinessTractionService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllBusinessTractionMaster();
  }

  getAllBusinessTractionMaster() {
    this.loading =true;
    let randomValue = Math.random();
    this.businessTractionCoreService
      .getAllBusinessTractionMaster(randomValue)
      .subscribe((response: Response) => {
        console.log(response);
        this.businessTraction = response;
        this.loading=false;
      });
  }

  openDialog(value) {
    console.log(value);
    let dialogAlert = this.dialog.open(AlertBoxComponent, {
      width: '300px',
      data: 'Add/Edit/Delete Operation Are Taken Up Only In Technology Sub-Segment. Please Try There.....'
    });
  }

}

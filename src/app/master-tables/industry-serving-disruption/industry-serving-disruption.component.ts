import { Component, OnInit } from '@angular/core';
import { IndustryServingDisruptionService } from '../../core/industry-serving-disruption.service';
import { MatDialog } from '@angular/material';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';

@Component({
  selector: 'app-industry-serving-disruption',
  templateUrl: './industry-serving-disruption.component.html',
  styleUrls: ['./industry-serving-disruption.component.css']
})
export class IndustryServingDisruptionComponent implements OnInit {
industryServingDisruption;
loading:boolean = false;
  constructor(
    private industryServingDisruptionService: IndustryServingDisruptionService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllIndustryServingDisruptionMaster();
  }

  getAllIndustryServingDisruptionMaster() {
    this.loading = true;
    let randomValue = Math.random();
    this.industryServingDisruptionService
      .getAllIndustryServingDisruptionMaster(randomValue)
      .subscribe((response: Response) => {
        console.log(response);
        this.industryServingDisruption = response;
        this.loading = false;
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

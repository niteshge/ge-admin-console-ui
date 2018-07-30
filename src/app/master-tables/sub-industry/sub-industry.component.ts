import { Component, OnInit } from '@angular/core';
import { IndustryService } from '../../core/industry.service';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';

@Component({
  selector: 'app-sub-industry',
  templateUrl: './sub-industry.component.html',
  styleUrls: ['./sub-industry.component.css']
})
export class SubIndustryComponent implements OnInit {

  treeDataJson;
  constructor(private industrySubService: IndustryService, public dialog: MatDialog) { 
    this.getAllIndustrySubSegment();
  }

  ngOnInit() {
  }
  getAllIndustrySubSegment() {
    let randomValue = Math.random();
    this.industrySubService
      .getIndustrySubSegmentMarketMap(randomValue)
      .subscribe((response: Response) => {
        this.treeDataJson = response;
      });
  }

  action(value) {
    console.log('the parent action', value);
    if (value.action === 1) {
      this.addIndustrySubSegment(value.nodeData);
    } else if (value.action === 2) {
      this.updateTechSubSegment(value.nodeData);
    } else if (value.action === 3) {
      this.deleteTechSubSegment(value.nodeData);
    }
  }

  addIndustrySubSegment(value) {
    console.log('The adding tech sub seg is', value);
    this.industrySubService
      .addIndustrySubSegmentMarketMap(value)
      .subscribe((response: Response) => {
        console.log(response);
        if (response['message'] === 'Status 200') {
          this.getAllIndustrySubSegment();
        }else{
          let dialogAlert = this.dialog.open(AlertBoxComponent,{
            width: '300px',
            data: "Sorry, Something Went Wrong... Try Again.",
          });
          this.getAllIndustrySubSegment();
        }
      });
  }

  updateTechSubSegment(node) {
    console.log('The updating node is ', node);
    this.industrySubService
      .updateIndustrySubSegmentMarketMap(node)
      .subscribe((response: Response) => {
        console.log(response);
        if (response['message'] === 'Status 200') {
          this.getAllIndustrySubSegment();
        }else{
          let dialogAlert = this.dialog.open(AlertBoxComponent,{
            width: '300px',
            data: "Sorry, Something Went Wrong... Try Again.",
          });
          this.getAllIndustrySubSegment();
        }
      });
  }
  deleteTechSubSegment(node) {
    console.log('The deleting node is ', node);
    let id = node.id[node.id.length - 1];
    console.log('The id is ', id);
    this.industrySubService
      .deleteIndustrySubSegmentMarketMap(id)
      .subscribe((response: Response) => {
        console.log(response);
        if (response['message'] === 'Status 200') {
          this.getAllIndustrySubSegment();
        }else{
          let dialogAlert = this.dialog.open(AlertBoxComponent,{
            width: '300px',
            data: "Sorry, Something Went Wrong... Try Again.",
          });
          this.getAllIndustrySubSegment();
        }
      });
  }
}

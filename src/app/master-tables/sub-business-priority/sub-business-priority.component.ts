import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { SubBusinessProrityService } from '../../core/sub-business-prority.service';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';

@Component({
  selector: 'app-sub-business-priority',
  templateUrl: './sub-business-priority.component.html',
  styleUrls: ['./sub-business-priority.component.css']
})
export class SubBusinessPriorityComponent implements OnInit {
  treeDataJson;
  constructor(private subBusinessPriorityService: SubBusinessProrityService, public dialog: MatDialog) { 
    this.getAllBusinessPrioritySubSegment();
  }

  ngOnInit() {
  }
  getAllBusinessPrioritySubSegment() {
    let randomValue = Math.random();
    this.subBusinessPriorityService
      .getBusinessPrioritySubSegmentMarketMap(randomValue)
      .subscribe((response: Response) => {
        this.treeDataJson = response;
      });
  }

  action(value) {
    console.log('the parent action', value);
    if (value.action === 1) {
      this.addBusinessPrioritySubSegment(value.nodeData);
    } else if (value.action === 2) {
      this.updateTechSubSegment(value.nodeData);
    } else if (value.action === 3) {
      this.deleteTechSubSegment(value.nodeData);
    }
  }

  addBusinessPrioritySubSegment(value) {
    console.log('The adding tech sub seg is', value);
    this.subBusinessPriorityService
      .addBusinessPrioritySubSegmentMarketMap(value)
      .subscribe((response: Response) => {
        console.log(response);
        if (response['message'] === 'Status 200') {
          this.getAllBusinessPrioritySubSegment();
        }else{
          let dialogAlert = this.dialog.open(AlertBoxComponent,{
            width: '300px',
            data: "Sorry, Something Went Wrong... Try Again.",
          });
          this.getAllBusinessPrioritySubSegment();
        }
      });
  }

  updateTechSubSegment(node) {
    console.log('The updating node is ', node);
    this.subBusinessPriorityService
      .updateBusinessPrioriytySubSegmentMarketMap(node)
      .subscribe((response: Response) => {
        console.log(response);
        if (response['message'] === 'Status 200') {
          this.getAllBusinessPrioritySubSegment();
        }else{
          let dialogAlert = this.dialog.open(AlertBoxComponent,{
            width: '300px',
            data: "Sorry, Something Went Wrong... Try Again.",
          });
          this.getAllBusinessPrioritySubSegment();
        }
      });
  }

  deleteTechSubSegment(node) {
    console.log('The deleting node is ', node);
    let id = node.id[node.id.length - 1];
    console.log('The id is ', id);
    this.subBusinessPriorityService
      .deleteBusinessPrioritySubSegmentMarketMap(id)
      .subscribe((response: Response) => {
        console.log(response);
        if (response['message'] === 'Status 200') {
          this.getAllBusinessPrioritySubSegment();
        }else{
          let dialogAlert = this.dialog.open(AlertBoxComponent,{
            width: '300px',
            data: "Sorry, Something Went Wrong... Try Again.",
          });
          this.getAllBusinessPrioritySubSegment();
        }
      });
  }
}

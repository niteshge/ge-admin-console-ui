import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { SubBusinessProrityService } from '../../core/sub-business-prority.service';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { ConstantTextService } from '../constant-text.service';

@Component({
  selector: 'app-sub-business-priority',
  templateUrl: './sub-business-priority.component.html',
  styleUrls: ['./sub-business-priority.component.css']
})
export class SubBusinessPriorityComponent implements OnInit {
  treeDataJson;
  constructor(
    private subBusinessPriorityService: SubBusinessProrityService,
    public dialog: MatDialog
  ) {
    this.getAllBusinessPrioritySubSegment();
  }

  ngOnInit() {}
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
      this.updateBusinessPrioritySubSegment(value.nodeData);
    } else if (value.action === 3) {
      this.deleteBusinessPrioritySubSegment(value.nodeData);
    }
  }

  addBusinessPrioritySubSegment(value) {
    console.log('The adding tech sub seg is', value);
    this.subBusinessPriorityService
      .addBusinessPrioritySubSegmentMarketMap(value)
      .subscribe((response: Response) => {
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: response['errorMessage']
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        } else {
          this.treeDataJson = response;
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: 'Sucessfull'
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        }
      });
  }

  updateBusinessPrioritySubSegment(node) {
    let randomValue = Math.random();
    console.log('The updating node is ', node);
    let id = node.id[node.id.length - 1];
    let businessPriorityId = node.id[0];
    console.log('The updating node is ', node);
    this.subBusinessPriorityService
      .checkBusinessPrioritySubSegmentExistInSolutionPriorityAssoc(
        id,
        businessPriorityId,
        2,
        randomValue
      )
      .subscribe((response: Response) => {
        if (response['errorMessage'] == ConstantTextService.SoltionPriorityNoExistence) {
          this.update(node);
        } else if (
          response['errorMessage'] ==
          ConstantTextService.SolutionPriorityAssociationUpdateStatusWithSubBusinessPriority
        ) {
          let dialogConfirm = this.dialog.open(DynamicYesNoPopupComponent, {
            width: '300px',
            data: { textValue: response['errorMessage'] }
          });
          dialogConfirm.afterClosed().subscribe(result => {
            console.log('The dialog confirm is closed with a action:', result);
            if (result == 100) {
              this.update(node);
            }
          });
        } else {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: response['errorMessage']
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        }
      });
  }

  update(node) {
    this.subBusinessPriorityService
      .updateBusinessPrioriytySubSegmentMarketMap(node)
      .subscribe((response: Response) => {
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: response['errorMessage']
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        } else {
          this.treeDataJson = response;
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: 'Sucessfull'
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        }
      });
  }

  deleteBusinessPrioritySubSegment(node) {
    let randomValue = Math.random();
    console.log('The deleting node is ', node);
    let id = node.id[node.id.length - 1];
    let industryId = node.id[0];
    console.log('The delete node is ', node);
    this.subBusinessPriorityService
      .checkBusinessPrioritySubSegmentExistInSolutionPriorityAssoc(
        id,
        industryId,
        3,
        randomValue
      )
      .subscribe((response: Response) => {
        if (
          response['errorMessage'] ==
          ConstantTextService.SoltionPriorityNoExistence
        ) {
          this.delete(node);
        } else if (
          response['errorMessage'] ==
          ConstantTextService.SolutionPriorityAssociationDeleteStatusWithSubBusinessPriority
        ) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            height: '400px',
            data: response['errorMessage']
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        }
      });
  }

  delete(node) {
    console.log('The deleting node is ', node);
    let id = node.id[node.id.length - 1];
    console.log('The id is ', id);
    this.subBusinessPriorityService
      .deleteBusinessPrioritySubSegmentMarketMap(id)
      .subscribe((response: Response) => {
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: 'Sorry, Something Went Wrong... Try Again.'
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        } else {
          this.treeDataJson = response;
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: 'Sucessfully Deleted the record ' + id
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        }
      });
  }
}

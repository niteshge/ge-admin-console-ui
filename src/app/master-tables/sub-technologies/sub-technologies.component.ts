import { Component, OnInit } from '@angular/core';
import { SubTechnologyService } from '../../core/sub-technology.service';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { ConstantTextService } from '../constant-text.service';
import { BusinessTractionAndIndustryDisruptionService } from '../../core/business-traction-and-industry-disruption.service';
import { ConditionOneService } from '../../core/condition-one.service';

@Component({
  selector: 'app-sub-technologies',
  templateUrl: './sub-technologies.component.html',
  styleUrls: ['./sub-technologies.component.css']
})
export class SubTechnologiesComponent implements OnInit {
  treeDataJson;
  loading:boolean = false;
  constructor(
    private subTechnologyService: SubTechnologyService,
    private businessTractionIndustryDisruption: BusinessTractionAndIndustryDisruptionService,
    private conditionOneService: ConditionOneService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllTechSubSegment();
  }
  getAllTechSubSegment() {
    this.loading = true;
    let randomValue = Math.random();
    this.subTechnologyService
      .getTechSubSegmentMarketMap(randomValue)
      .subscribe((response: Response) => {
        this.treeDataJson = response;
        this.loading = false;
      });
  }

  action(value) {
    console.log('the parent action', value);
    if (value.action === 1) {
      this.addTechSubSegment(value.nodeData);
    } else if (value.action === 2) {
      this.updateTechSubSegment(value.nodeData);
    } else if (value.action === 3) {
      this.deleteTechSubSegment(value.nodeData);
      // this.furtureAlert();
    }
  }

  furtureAlert(){
    let dialogAlert = this.dialog.open(AlertBoxComponent, {
      width: '300px',
      data: 'This feature is under testing and will be coming soon on the next patch release'
    });
    dialogAlert.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }


  addTechSubSegment(value) {
    console.log('The adding tech sub seg is', value);
    this.subTechnologyService
      .addTechSubSegmentMarketMap(value['node'])
      .subscribe((response: Response) => {
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: response['errorMessage']
          });
          dialogAlert.afterClosed().subscribe(result => {
            this.getAllTechSubSegment();
          });
        } else {
          this.businessTractionIndustryDisruption
            .addBusinessTractionAndIndustrySegDisruption(value)
            .subscribe((response: Response) => {
              if (response['errorMessage']) {
                let dialogAlert = this.dialog.open(AlertBoxComponent, {
                  width: '300px',
                  data: response['errorMessage']
                });
                dialogAlert.afterClosed().subscribe(result => {
                  this.getAllTechSubSegment();
                });
              } else {
                this.treeDataJson = response;
                let dialogAlert = this.dialog.open(AlertBoxComponent, {
                  width: '300px',
                  data: 'Sucessfull'
                });
                dialogAlert.afterClosed().subscribe(result => {
                  this.getAllTechSubSegment();
                });
              }
            });
        }
      });
  }
  deleteTechSubSegment(node) {
    let randomValue = Math.random();
    console.log('The deleting node is ', node);
    let id = node.id[node.id.length - 1];
    let technologyId = node.id[0];
    console.log('The delete node is ', node);
    this.subTechnologyService
      .checkTechnologySubSegmentExistInBusinessSolution(
        id,
        technologyId,
        3,
        randomValue
      )
      .subscribe((response: Response) => {
        if (
          response['errorMessage'] ==
          ConstantTextService.BusinessSolutionNoExistence
        ) {
          this.conditionOneService
            .checkTechnologySubSegmentExistInConditionOneToFour(
              id,
              technologyId,
              3,
              randomValue
            )
            .subscribe((response: Response) => {
              if (response['errorMessage'] == ConstantTextService.NoExistence) {
                //this.delete(node);
                this.businessTractionIndustryDisruption
                  .deleteBusinessTractionAndIndustrySegDisruption(
                    technologyId,
                    id,
                    randomValue
                  )
                  .subscribe((response: Response) => {
                    if (!response['errorMessage']) {
                      this.delete(node);
                    } else {
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
              } else {
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
        } else if (
          response['errorMessage'] ==
          ConstantTextService.BusinessSolutionDeleteStatusWithSubTechnology
        ) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            height: '400px',
            data: response['errorMessage']
          });
          dialogAlert.afterClosed().subscribe(result => {
            this.getAllTechSubSegment();
          });
        }
      });
  }
  delete(node) {
    let id = node.id[node.id.length - 1];
    console.log('The id is ', id);
    this.subTechnologyService
      .deleteTechSubSegmentMarketMap(id)
      .subscribe((response: Response) => {
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: response['errorMessage']
          });
          dialogAlert.afterClosed().subscribe(result => {
            this.getAllTechSubSegment();
          });
        } else {
          this.treeDataJson = response;
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: 'Sucessfully Deleted the record ' + id
          });
          dialogAlert.afterClosed().subscribe(result => {
            this.getAllTechSubSegment();
          });
        }
      });
  }

  updateTechSubSegment(node) {
    let randomValue = Math.random();
    console.log('The updating node is ', node);
    let id = node.id[node.id.length - 1];
    let horizontalId = node.id[0];
    console.log('The updating node is ', node);
    this.subTechnologyService
      .checkTechnologySubSegmentExistInBusinessSolution(
        id,
        horizontalId,
        2,
        randomValue
      )
      .subscribe((response: Response) => {
        if (
          response['errorMessage'] ==
          ConstantTextService.BusinessSolutionNoExistence
        ) {
          this.conditionOneService
            .checkTechnologySubSegmentExistInConditionOneToFour(
              id,
              horizontalId,
              2,
              randomValue
            )
            .subscribe((response: Response) => {
              if (response['errorMessage'] == ConstantTextService.NoExistence) {
                this.update(node);
              } else if (
                response['errorMessage'] ==
                  ConstantTextService.ConditionOneUpdateStatusWithSubTechnology ||
                response['errorMessage'] ==
                  ConstantTextService.ConditionTwoUpdateStatusWithSubTechnology ||
                response['errorMessage'] ==
                  ConstantTextService.ConditionThreeUpdateStatusWithSubTechnology ||
                response['errorMessage'] ==
                  ConstantTextService.ConditionFourUpdateStatusWithSubTechnology
              ) {
                let dialogConfirm = this.dialog.open(
                  DynamicYesNoPopupComponent,
                  {
                    width: '300px',
                    data: { textValue: response['errorMessage'] }
                  }
                );
                dialogConfirm.afterClosed().subscribe(result => {
                  console.log(
                    'The dialog confirm is closed with a action:',
                    result
                  );
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
                  this.getAllTechSubSegment();
                });
              }
            });
        } else if (
          response['errorMessage'] ==
          ConstantTextService.BusinessSolutionUpdateStatusWithSubTechnology
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
            this.getAllTechSubSegment();
          });
        }
      });
  }

  update(node) {
    // this.subTechnologyService
    // .updateTechSubSegmentMarketMap(node)
    this.businessTractionIndustryDisruption
      .updateBusinessTractionAndIndustrySegDisruption(node)
      .subscribe((response: Response) => {
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: response['errorMessage']
          });
          dialogAlert.afterClosed().subscribe(result => {
            this.getAllTechSubSegment();
          });
        } else {
          this.treeDataJson = response;
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: 'Sucessfull'
          });
          dialogAlert.afterClosed().subscribe(result => {
            this.getAllTechSubSegment();
          });
        }
      });
  }
}

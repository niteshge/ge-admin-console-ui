import { Component, OnInit } from '@angular/core';
import { IndustryService } from '../../core/industry.service';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { ConstantTextService } from '../constant-text.service';
import { ConditionFourService } from '../../core/condition-four.service';
import { ConditionOneService } from 'src/app/core/condition-one.service';
import { IndustrySubSegmentService } from 'src/app/core/industry-sub-segment.service';

@Component({
  selector: 'app-sub-industry',
  templateUrl: './sub-industry.component.html',
  styleUrls: ['./sub-industry.component.css']
})
export class SubIndustryComponent implements OnInit {
  treeDataJson;
  loading:boolean = false;
  
  constructor(
    private industryService: IndustryService,
    private industrySubService: IndustrySubSegmentService,
    private conditionFourService:ConditionFourService,
    private conditionOneService: ConditionOneService,
    public dialog: MatDialog
  ) {
    this.getAllIndustrySubSegment();
  }

  ngOnInit() {}
  getAllIndustrySubSegment() {
    this.loading = true;
    let randomValue = Math.random();
    this.industryService
      .getIndustrySubSegmentMarketMap(randomValue)
      .subscribe((response: Response) => {
        this.treeDataJson = response;
        this.loading = false;
      });
  }

  action(value) {
    console.log('the parent action', value);
    if (value.action === 1) {
      let nodeData = value['nodeData'];
      let marketMap = nodeData['MARKET MAP'];
      this.addIndustrySubSegment(marketMap, nodeData);
    } else if (value.action === 2) {
      // this.furtureAlert();
      let nodeData = value['nodeData'];
      let marketMap = nodeData['MARKET MAP'];
      this.updateIndustrySubSegment(marketMap, nodeData);
    } else if (value.action === 3) {
      // this.furtureAlert();
      let nodeData = value['MARKET MAP'];
      this.deleteTechSubSegment(value.nodeData);
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

  addIndustrySubSegment(value,conditionFour) {
    this.loading = true;
    console.log('The adding tech sub seg is', value);
    this.industryService
      .addIndustrySubSegmentMarketMap(value)
      .subscribe((response: Response) => {
        this.loading = false;
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: response['errorMessage']
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        } else {
          this.loading = true;
          conditionFour = this.setSegmentValueForConditionFour(conditionFour)
          this.conditionFourService
          .saveConditionFourForIndustryType(conditionFour)
          .subscribe((response:Response)=>{
            this.loading = false;
            if(!response['errorMessage']){
              this.treeDataJson = response;
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: 'Sucessfull'
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            }else{
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: response['errorMessage']
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            }
          })
        
        }
      });
  }

  updateIndustrySubSegment(node, conditionFour) {
    this.loading = true;
    let randomValue = Math.random();
    let id = node.id[node.id.length - 1];
    let industryId = node.id[0];
    console.log('The updating node is ', node);
    this.industryService
      .checkIndustrySubSegmentExistInBusinessSolution(
        id,
        industryId,
        2,
        randomValue
      )
      .subscribe((response: Response) => {
        this.loading = false;
        if (
          response['errorMessage'] ==
          ConstantTextService.BusinessSolutionNoExistence
        ) {
          this.loading = true;
          this.industryService
            .checkIndustrySubSegmentExistInSolutionPriorityAssociation(
              id,
              industryId,
              2,
              randomValue
            )
            .subscribe((response: Response) => {
              this.loading = false;
              if (
                response['errorMessage'] ==
                ConstantTextService.SoltionPriorityNoExistence
              ) {
                conditionFour = this.setSegmentValueForConditionFour(conditionFour);
                this.update(node,conditionFour);
              } else if (
                response['errorMessage'] ==
                ConstantTextService.SolutionPriorityAssociationUpdateStatusWithSubIndustry
              ) {
                let dialogConfirm = this.dialog.open(
                  DynamicYesNoPopupComponent,
                  {
                    width: '300px',
                    data: {
                      textValue:
                        'This Industry Sub Segment Might Be Linked With Business Solution/Solution Priority Association Table... It Gets Updated Everywhere'
                    }
                  }
                );
                dialogConfirm.afterClosed().subscribe(result => {
                  console.log(
                    'The dialog confirm is closed with a action:',
                    result
                  );
                  if (result == 100) {
                    conditionFour = this.setSegmentValueForConditionFour(conditionFour);
                    this.update(node, conditionFour);
                  }
                });
              }
            });
        } else if (
          response['errorMessage'] ==
          ConstantTextService.BusinessSolutionUpdateStatusWithSubIndustry
        ) {
          let dialogConfirm = this.dialog.open(DynamicYesNoPopupComponent, {
            width: '300px',
            data: {
              textValue:
                'This Industry Sub Segment Might Be Linked With Business Solution/Solution Priority Association Table... It Gets Updated Everywhere'
            }
          });
          dialogConfirm.afterClosed().subscribe(result => {
            console.log('The dialog confirm is closed with a action:', result);
            if (result == 100) {
              conditionFour = this.setSegmentValueForConditionFour(conditionFour);
              this.update(node, conditionFour);
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

  update(node, conditionFour) {
    this.loading = true;
      this.conditionFourService.updateConditionFourForIndustryType(conditionFour)
      .subscribe((response:Response)=>{
        this.loading = false;
        if(!response['errorMessage'])
        this.industryService
          .updateIndustrySubSegmentMarketMapInTemp(node)
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
                data: 'Sucessfull... This will be updated in industry sub segment table and other associated table at the time of job run.'
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            }
          });
      });
  }

  deleteTechSubSegment(node) {
    this.loading = true;
    let randomValue = Math.random();
    let id = node.id[node.id.length - 1];
    let industryId = node.id[0];
    console.log('The delete node is ', node);
    this.industryService
      .checkIndustrySubSegmentExistInBusinessSolution(
        id,
        industryId,
        3,
        randomValue
      )
      .subscribe((response: Response) => {
        this.loading = false;
        if (
          response['errorMessage'] ==
          ConstantTextService.BusinessSolutionNoExistence
        ) {
          this.loading = true;
          this.industryService.checkIndustrySubSegmentExistInSolutionPriorityAssociation(id,industryId,3,randomValue)
          .subscribe((response:Response)=>{
            this.loading = false;
            if (
              response['errorMessage'] ==
              ConstantTextService.SoltionPriorityNoExistence
            ) {
              this.loading = true;
              this.conditionOneService
              .checkIndustrySubSegmentExistInConditionOneToFour(
                id,
                industryId,
                3,
                randomValue
              )
              .subscribe((response:Response)=>{
                this.loading = false;
                if (response['errorMessage'] == ConstantTextService.NoExistence) {
                  this.loading = true;
                  this.industrySubService.deleteConditionFourFromIndustrySubSegment(
                    industryId,
                    id,
                    randomValue
                  )
                  .subscribe((response:Response)=>{
                    this.loading = false;
                      if(!response['errorMessage']){
                        this.delete(node)
                      }else{
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
                }else{
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
  }

  delete(node) {
    this.loading = true;
    let id = node.id[node.id.length - 1];
    console.log('The id is ', id);
    this.industryService
      .deleteIndustrySubSegmentMarketMap(id)
      .subscribe((response: Response) => {
        this.loading = false;
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
            data: 'Sucessfully Deleted the record ' + id
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        }
      });
  }

 setSegmentValueForConditionFour(conditionFourValue){
    let marketMap = conditionFourValue['MARKET MAP'];
    conditionFourValue['item'] = marketMap['item'];
    conditionFourValue['children'] = marketMap['children'];
    conditionFourValue['marketMapId'] = marketMap['id'];
    conditionFourValue['ROUND FOUR FINAL TECHNOLOGY'] = conditionFourValue['INDUSTRY'];
    conditionFourValue['INDUSTRY OR TECHNOLOGY'] = 'Industry/Sector';
    conditionFourValue['ID'] = conditionFourValue['CONDITION FOUR ID'];
    return conditionFourValue;
  }

}

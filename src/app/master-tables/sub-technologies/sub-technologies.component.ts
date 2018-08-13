import { Component, OnInit } from '@angular/core';
import { SubTechnologyService } from '../../core/sub-technology.service';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { ConstantTextService } from '../constant-text.service';
import { BusinessTractionAndIndustryDisruptionService } from '../../core/business-traction-and-industry-disruption.service';

@Component({
  selector: 'app-sub-technologies',
  templateUrl: './sub-technologies.component.html',
  styleUrls: ['./sub-technologies.component.css']
})
export class SubTechnologiesComponent implements OnInit {
  treeDataJson;
  // treeDataJson: any[] = [
  //   {
  //     children: [
  //       {
  //         children: [
  //           {
  //             children: [],
  //             item: '3D Printing Manufactures',
  //             id: [1, 0, 1, 2] //[tech id, from its id to the parent in sub_tech]... in other words, [tech_id,parents.parentid,parentid,its id]
  //           },
  //           {
  //             children: [],
  //             item: '3D Printing Material',
  //             id: [1, 0, 1, 4]
  //           }
  //         ],
  //         item: 'Hardware',
  //         id: [1, 0, 1]
  //       },
  //       {
  //         children: [
  //           {
  //             children: [],
  //             item: '3D Scanner',
  //             id: [1, 0, 7, 6]
  //           }
  //         ],
  //         item: 'Hardware + Software',
  //         id: [1, 0, 7]
  //       },
  //       {
  //         children: [
  //           {
  //             children: [],
  //             item: '3D Printing CAD Software',
  //             id: []
  //           }
  //         ],
  //         item: 'Software',
  //         id: [1, 0, 8]
  //       }
  //     ],
  //     item: '3D Printing',
  //     id: [1]
  //   },
  //   {
  //     children: [
  //       {
  //         children: [
  //           {
  //             children: [],
  //             item: 'Image Recognition',
  //             id: [2, 0, 43, 49]
  //           }
  //         ],
  //         item: 'Computer Vision',
  //         id: [2, 0, 43]
  //       },
  //       {
  //         children: [
  //           {
  //             children: [],
  //             item: 'Speech Recognition',
  //             id: [2, 0, 54, 60]
  //           },
  //           {
  //             children: [],
  //             item: 'Text Analysis',
  //             id: [2, 0, 54, 62]
  //           }
  //         ],
  //         item: 'Natural Language Processing',
  //         id: [2, 0, 54]
  //       },
  //       {
  //         children: [
  //           {
  //             children: [
  //               {
  //                 children: [],
  //                 item: 'Cyber Security',
  //                 id: [2, 0, 40, 940, 44]
  //               },
  //               {
  //                 children: [],
  //                 item: 'Marketing',
  //                 id: [2, 0, 40, 940, 53]
  //               }
  //             ],
  //             item: 'Functional Application',
  //             id: [2, 0, 40, 940]
  //           }
  //         ],
  //         item: 'Application',
  //         id: [2, 0, 40]
  //       }
  //     ],
  //     item: 'Artificial Intelligence',
  //     id: [2]
  //   },
  //   {
  //     children: [],
  //     item: 'Big Data & Analytics',
  //     id: [3]
  //   },
  //   {
  //     children: [],
  //     item: 'Other',
  //     id: [99]
  //   }
  // ];
  constructor(
    private subTechnologyService: SubTechnologyService,
    private businessTractionIndustryDisruption: BusinessTractionAndIndustryDisruptionService,
    public dialog: MatDialog
  ) {
    // this.getAllTechSubSegment();
    // this.treeDataJson = this.treeDataJson.slice();
  }

  ngOnInit() {
    this.getAllTechSubSegment();
  }
  getAllTechSubSegment() {
    let randomValue = Math.random();
    this.subTechnologyService
      .getTechSubSegmentMarketMap(randomValue)
      .subscribe((response: Response) => {
        this.treeDataJson = response;
      });
  }
  // node(node) {
  //   console.log('the parent component ', node);
  //   this.nodeData = node;
  // }
  action(value) {
    console.log('the parent action', value);
    if (value.action === 1) {
      this.addTechSubSegment(value.nodeData);
    } else if (value.action === 2) {
      this.updateTechSubSegment(value.nodeData);
    } else if (value.action === 3) {
      this.deleteTechSubSegment(value.nodeData);
    }

    // this.treeDataJson = [
    //   {
    //     children: [
    //       {
    //         children: [
    //           {
    //             children: [],
    //             item: '3D Printing Manufactures',
    //             id: [1, 0, 1, 2] //[tech id, from its id to the parent in sub_tech]... in other words, [tech_id,parents.parentid,parentid,its id]
    //           },
    //           {
    //             children: [],
    //             item: '3D Printing Material',
    //             id: [1, 0, 1, 4]
    //           },
    //           {
    //             children: [],
    //             item: 'Dummy',
    //             id: [1, 0, 1, 100]
    //           }
    //         ],
    //         item: 'Hardware',
    //         id: [1, 0, 1]
    //       },
    //       {
    //         children: [
    //           {
    //             children: [],
    //             item: '3D Scanner',
    //             id: [1, 0, 7, 6]
    //           }
    //         ],
    //         item: 'Hardware + Software',
    //         id: [1, 0, 7]
    //       },
    //       {
    //         children: [
    //           {
    //             children: [],
    //             item: '3D Printing CAD Software',
    //             id: []
    //           }
    //         ],
    //         item: 'Software',
    //         id: [1, 0, 8]
    //       }
    //     ],
    //     item: '3D Printing',
    //     id: [1]
    //   },
    //   {
    //     children: [
    //       {
    //         children: [
    //           {
    //             children: [],
    //             item: 'Image Recognition',
    //             id: [2, 0, 43, 49]
    //           }
    //         ],
    //         item: 'Computer Vision',
    //         id: [2, 0, 43]
    //       },
    //       {
    //         children: [
    //           {
    //             children: [],
    //             item: 'Speech Recognition',
    //             id: [2, 0, 54, 60]
    //           },
    //           {
    //             children: [],
    //             item: 'Text Analysis',
    //             id: [2, 0, 54, 62]
    //           }
    //         ],
    //         item: 'Natural Language Processing',
    //         id: [2, 0, 54]
    //       },
    //       {
    //         children: [
    //           {
    //             children: [
    //               {
    //                 children: [],
    //                 item: 'Cyber Security',
    //                 id: [2, 0, 40, 940, 44]
    //               },
    //               {
    //                 children: [],
    //                 item: 'Marketing',
    //                 id: [2, 0, 40, 940, 53]
    //               }
    //             ],
    //             item: 'Functional Application',
    //             id: [2, 0, 40, 940]
    //           }
    //         ],
    //         item: 'Application',
    //         id: [2, 0, 40]
    //       }
    //     ],
    //     item: 'Artificial Intelligence',
    //     id: [2]
    //   },
    //   {
    //     children: [],
    //     item: 'Big Data & Analytics',
    //     id: [3]
    //   },
    //   {
    //     children: [],
    //     item: 'Other',
    //     id: [99]
    //   }
    // ];
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
                  this.getAllTechSubSegment();
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
          this.update(node);
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

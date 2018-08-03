import { Component, OnInit } from '@angular/core';
import { BusinessSolutionsService } from '../../core/business-solutions.service';
import { MatDialog } from '@angular/material';
import { DynamicReportPopupComponent } from '../../shared/dynamic-report-popup/dynamic-report-popup.component';
import { DynamicTablePopupComponent } from '../../shared/dynamic-table-popup/dynamic-table-popup.component';
import { DynamicTableEditComponent } from '../../shared/dynamic-table-edit/dynamic-table-edit.component';
import { DynamicBusinessSolutionClonePopupComponent } from '../../shared/dynamic-business-solution-clone-popup/dynamic-business-solution-clone-popup.component';
import { DynamicTableAddComponent } from '../../shared/dynamic-table-add/dynamic-table-add.component';
import { DynamicYesNoPopupComponent } from '../../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { BusinessSolutionEditComponent } from './business-solution-edit/business-solution-edit.component';
import { BusinessSolutionAddComponent } from './business-solution-add/business-solution-add.component';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';

@Component({
  selector: 'app-business-solution',
  templateUrl: './business-solution.component.html',
  styleUrls: ['./business-solution.component.css']
})
export class BusinessSolutionComponent implements OnInit {
  businessSolutionMasterModel: BusinessSolutionMasterModel = new BusinessSolutionMasterModel();
  rowValue: any = {};
  businessSolutions;
  action;
  constructor(
    private businessSolutionCoreService: BusinessSolutionsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllBusinessSolutions();
  }

  getAllBusinessSolutions() {
    let randomValue = Math.random()
    this.businessSolutionCoreService
      .getAllBusinessSolutons(randomValue)
      .subscribe((response: Response) => {
        console.log(response);
        this.businessSolutions = response;
      });
  }

  openDialog(value): void {
    console.log(value);
    this.rowValue = value;
    this.setBusinessModelData(this.rowValue);
    console.log('this is the row value ', this.rowValue);
    console.log(
      'this is the business model data ',
      this.businessSolutionMasterModel
    );
    let dialogRef = this.dialog.open(DynamicTablePopupComponent, {
      width: '500px',
      data: {
        clonePopup: true,
        textData: value.ID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.action = result;
      console.log('The action to take is ', this.action);
      this.takeAction(this.action);
    });
  }
  takeAction(value) {
    if (value === '1') {
      let randomValue = Math.random() * 10;
      this.businessSolutionCoreService
        .getTechnologiesSubSegment(this.rowValue['TECHNOLOGY'], randomValue)
        .subscribe((response: Response) => {
          this.rowValue['ALL SUB TECHNOLOGY'] = response;
        });
      this.businessSolutionCoreService
        .getTechnologies(randomValue)
        .subscribe((response: Response) => {
          this.rowValue['ALL TECHNOLOGY'] = response;
        });
      this.businessSolutionCoreService
        .getIndustries(randomValue)
        .subscribe((response: Response) => {
          this.rowValue['ALL INDUSTRIES'] = response;
        });
      this.businessSolutionCoreService
        .getIndustriesSubSegment(this.rowValue['INDUSTRY'], randomValue)
        .subscribe((response: Response) => {
          this.rowValue['ALL SUB INDUSTRIES'] = response;
        });
      this.rowValue['ALL TECH OR INDUSTRY'] = ['Technology', 'Industry'];
      console.log('Edit On ', this.rowValue.ID);
      console.log('the selected row is ', this.rowValue);
      this.openEditDialog(this.rowValue);
    } else if (value === '2') {
      console.log('clone On ', this.rowValue.ID);
      this.openCloneDialog(this.rowValue);
    } else if (value === '3') {
      console.log('delete On ', this.rowValue.ID);
      let dialogConfirm = this.dialog.open(DynamicYesNoPopupComponent, {
        width: '300px',
        data: {'textValue':'Are you sure you want to remove'}
      });
      dialogConfirm.afterClosed().subscribe(result => {
        console.log('The dialog confirm is closed with a action:', result);
        if (result == 100) {
          this.removeData(this.rowValue.ID);
        }
      });
    }
  }

  openCloneDialog(existingValue): void {
    let value = Object.assign({}, existingValue); //Cloning the actual object to the dummy object
    console.log('The json going to the clone popup is ', value);
    let dialogClone = this.dialog.open(
      DynamicBusinessSolutionClonePopupComponent,
      {
        width: '1000px',
        height: '500px',
        data: value
      }
    );
    dialogClone.afterClosed().subscribe(result => {
      console.log('The value changed in the edit process is ', result);
      if (result != null) {
        let randomValue = Math.random();
        this.businessSolutionCoreService
          .saveBusinessSolutions(result, randomValue)
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
              this.businessSolutions = response;
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
    });
  }
  openEditDialog(value): void {
    console.log('The json going to the edit popup is ', value);
    let dialogEdit = this.dialog.open(BusinessSolutionEditComponent, {
      width: '1000px',
      data: value
    });
    dialogEdit.afterClosed().subscribe(result => {
      console.log('The value changed in the edit process is ', result);
      if (result != null) {
        this.setBusinessModelData(result);
        console.log(
          'The updating business model is ',
          this.businessSolutionMasterModel
        );
        this.businessSolutionCoreService
          .updateBusinessSolution(result)
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
              this.businessSolutions = response;
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
    });
  }
  onchangeEventRowData(value) {
    console.log('The onchange evnet is in business', value);
  }

  addRowData() {
    let randomValue = Math.random() * 10;
    console.log('Adding the row data');
    let rowDataJson = {};
    for (let key in this.businessSolutions[0]) {
      if (key != 'id') {
        console.log('      key:', key);
        rowDataJson[key] = '';
      }
    }
    rowDataJson['ALL TECH OR INDUSTRY'] = ['Technology', 'Industry'];
    this.businessSolutionCoreService
      .getTechnologies(randomValue)
      .subscribe((response: Response) => {
        rowDataJson['ALL TECHNOLOGY'] = response;
      });
    this.businessSolutionCoreService
      .getIndustries(randomValue)
      .subscribe((response: Response) => {
        rowDataJson['ALL INDUSTRIES'] = response;
      });

    let dialogAdd = this.dialog.open(BusinessSolutionAddComponent, {
      width: '1000px',
      data: rowDataJson
    });
    dialogAdd.afterClosed().subscribe(result => {
      console.log('The value changed in the add process is ', result);
      if (result != null) {
        let randomValue = Math.random();
        this.businessSolutionCoreService
          .saveBusinessSolutions(result, randomValue)
          .subscribe((response: Response) => {
            if (response['errorMessage']) {
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: response['errorMessage'],
              });
              dialogAlert.afterClosed().subscribe(result => {
                window.location.reload();
              });
            } else {
              this.businessSolutions = response;
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
    });
  }

  removeData(id) {
    let randomValue = Math.random();
    this.businessSolutionCoreService
      .deleteBusinessSolutions(id, randomValue)
      .subscribe((response: Response) =>  {
        if (response['errorMessage']) {
          let dialogAlert = this.dialog.open(AlertBoxComponent, {
            width: '300px',
            data: 'Sorry, Something Went Wrong... Try Again.'
          });
          dialogAlert.afterClosed().subscribe(result => {
            window.location.reload();
          });
        } else {
          this.businessSolutions = response;
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

  setBusinessModelData(businessValueObject) {
    //   console.log("The value of business model setting ")
    //     for (let key in this.rowValue) {
    //         console.log("      key:", key, "value:", this.rowValue[key]);
    // }
    this.businessSolutionMasterModel.id = businessValueObject['ID'];
    this.businessSolutionMasterModel.condition5 =
      businessValueObject['CONDITION 5'];
    this.businessSolutionMasterModel.industry = businessValueObject['INDUSTRY'];
    this.businessSolutionMasterModel.industrySegment =
      businessValueObject['INDUSTRY SEGMENT'];
    this.businessSolutionMasterModel.name = businessValueObject['NAME'];
    this.businessSolutionMasterModel.searchApproach =
      businessValueObject['SEARCH APPROACH'];
    this.businessSolutionMasterModel.searchText =
      businessValueObject['SEARCH TEXT'];
    this.businessSolutionMasterModel.solutionScore =
      businessValueObject['SOLUTION SCORE'];
    this.businessSolutionMasterModel.taggingApproach =
      businessValueObject['TAGGING APPROACH'];
    this.businessSolutionMasterModel.technology =
      businessValueObject['TECHNOLOGY'];
    this.businessSolutionMasterModel.technologySegment =
      businessValueObject['TECHNOLOGY SEGMENT'];
    this.businessSolutionMasterModel.techOrIndustry =
      businessValueObject['TECH OR INDUSTRY'];
    return this.businessSolutionMasterModel;
  }
}
export class BusinessSolutionMasterModel {
  public id: number = null;
  public name: string = null;
  public searchText: string = null;
  public condition5: string = null;
  public technology: string = null;
  public technologySegment: string = null;
  public industry: string = null;
  public industrySegment: string = null;
  public searchApproach: string = null;
  public taggingApproach: string = null;
  public techOrIndustry: string = null;
  public solutionScore: number = null;
}

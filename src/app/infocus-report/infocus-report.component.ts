import { Component, OnInit } from '@angular/core';
import { InfocusReportService } from '../core/infocus-report.service';
import { InfocusReportModel } from './infocus-report.model';
import { InfocusBusinessPriority2Model } from './infocus-business-priority-2-model';

@Component({
  selector: 'app-infocus-report',
  templateUrl: './infocus-report.component.html',
  styleUrls: ['./infocus-report.component.css']
})
export class InfocusReportComponent implements OnInit {
  infocusModel: InfocusReportModel = new InfocusReportModel();
  listOfBp2Model:InfocusBusinessPriority2Model[] = [];


  infocusReportTitle;
  infocusRoles;
  infocusIndustry;
  infocusIndustrySegment1;
  infocusIndustrySegment2;
  infocusBusinessPriority1;
  businessPriority2;


  constructor(private infocusCoreService: InfocusReportService) {
  }

  ngOnInit() {
    this.infocusRoles = this.infocusCoreService.getInfocusReportRoles();
  }

  roleSelected(value) {
    this.infocusModel.infocusReportTitle = this.infocusReportTitle;
    this.infocusModel.roles = value;
    this.infocusIndustry = this.infocusCoreService.getInfocusIndustriesByRole(value);
  }

  industrySelected(value) {
    this.infocusModel.industry = value;
    this.infocusIndustrySegment1 = this.infocusCoreService.getInfocusIndustrySegment1ByRolendIndustry(this.infocusModel.roles, this.infocusModel.industry);
    console.log(this.infocusModel);
  }
industrySegment1Selected(value){
  this.infocusModel.industrySegment1 = value;
  console.log(this.infocusModel);
  this.infocusIndustrySegment2 = this.infocusCoreService.getInfocusIndustrySegment2ByIndustryndIndustrySegment1(this.infocusModel.industry, this.infocusModel.industrySegment1);
}

industrySegment2Selected(value){
  this.infocusModel.industrySegment2 = value;
  console.log(this.infocusModel);
  this.infocusBusinessPriority1 = this.infocusCoreService.getInfocusBusinessPriority1(this.infocusModel.roles, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2);
}

businessPriority1Selected(value){
  this.infocusModel.businessPriority1 = value;
  console.log(this.infocusModel);
  this.businessPriority2 = this.infocusCoreService.getInfocusBusinessPriority2(this.infocusModel.roles, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2,this.infocusModel.businessPriority1);
  this.listOfBp2Model.push(new InfocusBusinessPriority2Model('Business Priority 2a','businessPriority2 | async' ,'businessPriority2aSelected($event)'));
  this.listOfBp2Model.push(new InfocusBusinessPriority2Model('Business Priority 2b','businessPriority2 | async' ,'bp2Selected($event)'));
  this.listOfBp2Model.push(new InfocusBusinessPriority2Model('Business Priority 2c','businessPriority2 | async' ,'bp2Selected($event)'));
  this.listOfBp2Model.push(new InfocusBusinessPriority2Model('Business Priority 2d','businessPriority2 | async' ,'bp2Selected($event)'));
}

}

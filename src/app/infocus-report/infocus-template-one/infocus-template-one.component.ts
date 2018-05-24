import { Component, OnInit } from '@angular/core';
import { InfocusReportModel } from '../infocus-report.model';
import { InfocusReportService } from '../../core/infocus-report.service';

@Component({
  selector: 'app-infocus-template-one',
  templateUrl: './infocus-template-one.component.html',
  styleUrls: ['./infocus-template-one.component.css']
})
export class InfocusTemplateOneComponent implements OnInit {
  infocusModel: InfocusReportModel = new InfocusReportModel();
  id
  infocusReportTitle;
  infocusRoles;
  infocusIndustry;
  infocusIndustrySegment1;
  infocusIndustrySegment2;
  infocusBusinessPriority1;
  infocusContextHeading;
  infocusContextSubHeading;
  infocusContextDesc;
  listBp2Placeholders:string[] = [];
  businessPriority2;

  constructor(private infocusCoreService: InfocusReportService) { }

  ngOnInit() {
    this.infocusRoles = this.infocusCoreService.getInfocusReportRoles();
  }
  analystName(value) {
    this.infocusModel.analystName = value;
    console.log(this.infocusModel.analystName);
  }
  roleSelected(value) {
    this.infocusModel.infocusReportTitle = this.infocusReportTitle;
    this.infocusModel.role = value;
    this.infocusIndustry = this.infocusCoreService.getInfocusIndustriesByRole(value);
  }
  industrySelected(value) {
    this.infocusModel.industry = value;
    this.infocusIndustrySegment1 = this.infocusCoreService.getInfocusIndustrySegment1ByRolendIndustry(this.infocusModel.role, this.infocusModel.industry);
    console.log(this.infocusModel);
  }
  industrySegment1Selected(value) {
    this.infocusModel.industrySegment1 = value;
    console.log(this.infocusModel);
    this.infocusIndustrySegment2 = this.infocusCoreService.getInfocusIndustrySegment2ByIndustryndIndustrySegment1(this.infocusModel.industry, this.infocusModel.industrySegment1);
  }

  industrySegment2Selected(value) {
    this.infocusModel.industrySegment2 = value;
    console.log(this.infocusModel);
    this.infocusBusinessPriority1 = this.infocusCoreService.getInfocusBusinessPriority1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2);
  }

  businessPriority1Selected(value) {
    this.infocusModel.businessPriority1 = value;
    console.log(this.infocusModel);
    this.businessPriority2 = this.infocusCoreService.getInfocusBusinessPriority2(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1);
    this.listBp2Placeholders.push('Business Priority 2A')
    this.listBp2Placeholders.push('Business Priority 2B')
    this.listBp2Placeholders.push('Business Priority 2C')
    this.listBp2Placeholders.push('Business Priority 2D')
    // this.businessPriority2 = this.infocusCoreService.getInfocusBusinessPriority2(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1);
    // this.listOfBp2Model.push(new InfocusBusinessPriority2Model('Business Priority 2a', 'businessPriority2 | async', 'businessPriority2aSelected($event:Object)'));
    // this.listOfBp2Model.push(new InfocusBusinessPriority2Model('Business Priority 2b', 'businessPriority2 | async', 'businessPriority2bSelected($event)'));
    // this.listOfBp2Model.push(new InfocusBusinessPriority2Model('Business Priority 2c', 'businessPriority2 | async', 'businessPriority2cSelected($event)'));
    // this.listOfBp2Model.push(new InfocusBusinessPriority2Model('Business Priority 2d', 'businessPriority2 | async', 'businessPriority2dSelected($event)'));
  }

  businessPriority2PlaceholderValue(value){
    console.log(value);
  }

  businessPriority2Selected(value) {
    // this.infocusModel.businessPriority2a = value
    // this.bp2abusinessPriority3 = this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a);
    console.log(value)
  }

}

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
  listOfBp2Model: InfocusBusinessPriority2Model[] = [];
  id;
  infocusReportTitle;
  infocusRoles;
  infocusIndustry;
  infocusIndustrySegment1;
  infocusIndustrySegment2;
  infocusBusinessPriority1;
  businessPriority2;


  bp2abusinessPriority3;
  bp2abusinessPriority3aSolution1;
  infocusBusinessPriority3aSolution1CompanyDetails;
  bp2abusinessPriority3aSolution2;
  infocusBusinessPriority3aSolution2CompanyDetails;
  bp2abusinessPriority3aSolution3;
  infocusBusinessPriority3aSolution3CompanyDetails;
  bp2abusinessPriority3aSolution4;
  infocusBusinessPriority3aSolution4CompanyDetails;
  bp2abusinessPriority3aSolution5;
  infocusBusinessPriority3aSolution5CompanyDetails;

  bp2abusinessPriority3bSolution1;
  infocusBusinessPriority3bSolution1CompanyDetails;
  bp2abusinessPriority3bSolution2;
  infocusBusinessPriority3bSolution2CompanyDetails;
  bp2abusinessPriority3bSolution3;
  infocusBusinessPriority3bSolution3CompanyDetails;
  bp2abusinessPriority3bSolution4;
  infocusBusinessPriority3bSolution4CompanyDetails;
  bp2abusinessPriority3bSolution5;
  infocusBusinessPriority3bSolution5CompanyDetails;

  bp2abusinessPriority3cSolution1;
  infocusBusinessPriority3cSolution1CompanyDetails;
  bp2abusinessPriority3cSolution2;
  infocusBusinessPriority3cSolution2CompanyDetails;
  bp2abusinessPriority3cSolution3;
  infocusBusinessPriority3cSolution3CompanyDetails;
  bp2abusinessPriority3cSolution4;
  infocusBusinessPriority3cSolution4CompanyDetails;
  bp2abusinessPriority3cSolution5;
  infocusBusinessPriority3cSolution5CompanyDetails;


  bp2abusinessPriority3dSolution1;
  infocusBusinessPriority3dSolution1CompanyDetails;
  bp2abusinessPriority3dSolution2;
  infocusBusinessPriority3dSolution2CompanyDetails;
  bp2abusinessPriority3dSolution3;
  infocusBusinessPriority3dSolution3CompanyDetails;
  bp2abusinessPriority3dSolution4;
  infocusBusinessPriority3dSolution4CompanyDetails;
  bp2abusinessPriority3dSolution5;
  infocusBusinessPriority3dSolution5CompanyDetails;

  bp2abusinessPriority3eSolution1;
  infocusBusinessPriority3eSolution1CompanyDetails;
  bp2abusinessPriority3eSolution2;
  infocusBusinessPriority3eSolution2CompanyDetails;
  bp2abusinessPriority3eSolution3;
  infocusBusinessPriority3eSolution3CompanyDetails;
  bp2abusinessPriority3eSolution4;
  infocusBusinessPriority3eSolution4CompanyDetails;
  bp2abusinessPriority3eSolution5;
  infocusBusinessPriority3eSolution5CompanyDetails;


  constructor(private infocusCoreService: InfocusReportService) {
  }

  ngOnInit() {
    let randomValue = Math.random()*10;
    this.infocusRoles = this.infocusCoreService.getInfocusReportRoles(randomValue);
  }

  analystName(value) {
    this.infocusModel.analystName = value;
    console.log(this.infocusModel.analystName);
  }

  roleSelected(value) {
    this.infocusModel.infocusReportTitle = this.infocusReportTitle;
    this.infocusModel.role = value;
    let randomValue = Math.random();
    this.infocusIndustry = this.infocusCoreService.getInfocusIndustriesByRole(value,randomValue);
  }

  industrySelected(value) {
    this.infocusModel.industry = value;
    let randomValue = Math.random();
    this.infocusIndustrySegment1 = this.infocusCoreService.getInfocusIndustrySegment1ByRolendIndustry(this.infocusModel.role, this.infocusModel.industry,randomValue);
    console.log(this.infocusModel);
  }
  industrySegment1Selected(value) {
    this.infocusModel.industrySegment1 = value;
    console.log(this.infocusModel);
    let randomValue = Math.random();
    this.infocusIndustrySegment2 = this.infocusCoreService.getInfocusIndustrySegment2ByIndustryndIndustrySegment1(this.infocusModel.industry, this.infocusModel.industrySegment1,randomValue);
  }

  industrySegment2Selected(value) {
    this.infocusModel.industrySegment2 = value;
    console.log(this.infocusModel);
    let randomValue = Math.random();
    this.infocusBusinessPriority1 = this.infocusCoreService.getInfocusBusinessPriority1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2,randomValue);
  }

  businessPriority1Selected(value) {
    this.infocusModel.businessPriority1 = value;
    console.log(this.infocusModel);
    let randomValue = Math.random();
    this.businessPriority2 = this.infocusCoreService.getInfocusBusinessPriority2(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1,randomValue);
    // this.listOfBp2Model.push(new InfocusBusinessPriority2Model('Business Priority 2a', 'businessPriority2 | async', 'businessPriority2aSelected($event:Object)'));
    // this.listOfBp2Model.push(new InfocusBusinessPriority2Model('Business Priority 2b', 'businessPriority2 | async', 'businessPriority2bSelected($event)'));
    // this.listOfBp2Model.push(new InfocusBusinessPriority2Model('Business Priority 2c', 'businessPriority2 | async', 'businessPriority2cSelected($event)'));
    // this.listOfBp2Model.push(new InfocusBusinessPriority2Model('Business Priority 2d', 'businessPriority2 | async', 'businessPriority2dSelected($event)'));
  }

  businessPriority2aSelected(value) {
    this.infocusModel.businessPriority2a = value
    let randomValue = Math.random();
    this.bp2abusinessPriority3 = this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a,randomValue);
    console.log(value)
  }

  businessPriority2bSelected(value) {
    this.infocusModel.businessPriority2b = value
  }

  businessPriority2cSelected(value) {
    this.infocusModel.businessPriority2c = value
  }

  businessPriority2dSelected(value) {
    this.infocusModel.businessPriority2d = value
  }

  // Business priority 3a

  bp2abusinessPriority3aSelected(value) {
    this.infocusModel.bp2abusinessPriority3a = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority3Solution1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3a,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3aSolution1 = response[0].Solution_1;
          this.infocusModel.bp2abp3aSolution1Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution2(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3a,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3aSolution2 = response[0].Solution_2;
          this.infocusModel.bp2abp3aSolution2Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3a,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3aSolution3 = response[0].Solution_3;
          this.infocusModel.bp2abp3aSolution3Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution4(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3a,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3aSolution4 = response[0].Solution_4;
          this.infocusModel.bp2abp3aSolution4Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution5(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3a,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3aSolution5 = response[0].Solution_5;
          this.infocusModel.bp2abp3aSolution5Code = response[0].Solution_Code;

        }
      )
  }
  bp2abusinessPriority3aSolution1Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3aSolution1 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3aSolution1Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3aSolution1CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3aSolution2Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3aSolution2 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3aSolution2Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3aSolution2CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3aSolution3Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3aSolution3 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3aSolution3Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3aSolution3CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3aSolution4Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3aSolution4 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3aSolution4Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3aSolution4CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3aSolution5Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3aSolution5 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3aSolution5Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3aSolution5CompanyDetails = response
        }
      )
  }

  bp3aSolution1Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3aSolution1CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3aSolution1CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3aSolution1CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3aSolution1CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3aSolution1CompanyDomainName1 = temp[0].domain_name;
  }

  bp3aSolution1Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3aSolution1CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3aSolution1CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3aSolution1CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3aSolution1CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3aSolution1CompanyDomainName2 = temp[0].domain_name;
  }

  bp3aSolution2Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3aSolution2CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3aSolution2CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3aSolution2CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3aSolution2CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3aSolution2CompanyDomainName1 = temp[0].domain_name;
  }

  bp3aSolution2Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3aSolution2CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3aSolution2CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3aSolution2CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3aSolution2CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3aSolution2CompanyDomainName2 = temp[0].domain_name;
  }

  bp3aSolution3Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3aSolution3CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3aSolution3CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3aSolution3CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3aSolution3CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3aSolution3CompanyDomainName1 = temp[0].domain_name;
  }

  bp3aSolution3Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3aSolution3CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3aSolution3CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3aSolution3CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3aSolution3CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3aSolution3CompanyDomainName2 = temp[0].domain_name;
  }

  bp3aSolution4Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3aSolution4CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3aSolution4CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3aSolution4CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3aSolution4CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3aSolution4CompanyDomainName1 = temp[0].domain_name;
  }

  bp3aSolution4Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3aSolution4CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3aSolution4CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3aSolution4CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3aSolution4CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3aSolution4CompanyDomainName2 = temp[0].domain_name;
  }

  bp3aSolution5Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3aSolution5CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3aSolution5CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3aSolution5CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3aSolution5CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3aSolution5CompanyDomainName1 = temp[0].domain_name;

  }

  bp3aSolution5Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3aSolution5CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3aSolution5CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3aSolution5CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3aSolution5CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3aSolution5CompanyDomainName2 = temp[0].domain_name;
  }
  // Business Priority 3b


  // Business priority 3b

  bp2abusinessPriority3bSelected(value) {
    this.infocusModel.bp2abusinessPriority3b = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority3Solution1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3b,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3bSolution1 = response[0].Solution_1;
          this.infocusModel.bp2abp3bSolution1Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution2(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3b,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3bSolution2 = response[0].Solution_2;
          this.infocusModel.bp2abp3bSolution2Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3b,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3bSolution3 = response[0].Solution_3;
          this.infocusModel.bp2abp3bSolution3Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution4(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3b,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3bSolution4 = response[0].Solution_4;
          this.infocusModel.bp2abp3bSolution4Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution5(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3b,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3bSolution5 = response[0].Solution_5;
          this.infocusModel.bp2abp3bSolution5Code = response[0].Solution_Code;

        }
      )
  }
  bp2abusinessPriority3bSolution1Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3bSolution1 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3bSolution1Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3bSolution1CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3bSolution2Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3bSolution2 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3bSolution2Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3bSolution2CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3bSolution3Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3bSolution3 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3bSolution3Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3bSolution3CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3bSolution4Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3bSolution4 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3bSolution4Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3bSolution4CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3bSolution5Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3bSolution5 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3bSolution5Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3bSolution5CompanyDetails = response
        }
      )
  }

  bp3bSolution1Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3bSolution1CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3bSolution1CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3bSolution1CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3bSolution1CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3bSolution1CompanyDomainName1 = temp[0].domain_name;
  }

  bp3bSolution1Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3bSolution1CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3bSolution1CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3bSolution1CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3bSolution1CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3bSolution1CompanyDomainName2 = temp[0].domain_name;
  }

  bp3bSolution2Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3bSolution2CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3bSolution2CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3bSolution2CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3bSolution2CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3bSolution2CompanyDomainName1 = temp[0].domain_name;
  }

  bp3bSolution2Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3bSolution2CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3bSolution2CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3bSolution2CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3bSolution2CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3bSolution2CompanyDomainName2 = temp[0].domain_name;
  }

  bp3bSolution3Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3bSolution3CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3bSolution3CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3bSolution3CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3bSolution3CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3bSolution3CompanyDomainName1 = temp[0].domain_name;
  }

  bp3bSolution3Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3bSolution3CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3bSolution3CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3bSolution3CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3bSolution3CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3bSolution3CompanyDomainName2 = temp[0].domain_name;
  }

  bp3bSolution4Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3bSolution4CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3bSolution4CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3bSolution4CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3bSolution4CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3bSolution4CompanyDomainName1 = temp[0].domain_name;
  }

  bp3bSolution4Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3bSolution4CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3bSolution4CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3bSolution4CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3bSolution4CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3bSolution4CompanyDomainName2 = temp[0].domain_name;
  }

  bp3bSolution5Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3bSolution5CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3bSolution5CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3bSolution5CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3bSolution5CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3bSolution5CompanyDomainName1 = temp[0].domain_name;

  }

  bp3bSolution5Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3bSolution5CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3bSolution5CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3bSolution5CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3bSolution5CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3bSolution5CompanyDomainName2 = temp[0].domain_name;
  }


  // Business priority 3c

  bp2abusinessPriority3cSelected(value) {
    this.infocusModel.bp2abusinessPriority3c = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority3Solution1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3c,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3cSolution1 = response[0].Solution_1;
          this.infocusModel.bp2abp3cSolution1Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution2(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3c,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3cSolution2 = response[0].Solution_2;
          this.infocusModel.bp2abp3cSolution2Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3c,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3cSolution3 = response[0].Solution_3;
          this.infocusModel.bp2abp3cSolution3Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution4(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3c,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3cSolution4 = response[0].Solution_4;
          this.infocusModel.bp2abp3cSolution4Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution5(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3c,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3cSolution5 = response[0].Solution_5;
          this.infocusModel.bp2abp3cSolution5Code = response[0].Solution_Code;

        }
      )
  }
  bp2abusinessPriority3cSolution1Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3cSolution1 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3cSolution1Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3cSolution1CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3cSolution2Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3cSolution2 = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3cSolution2Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3cSolution2CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3cSolution3Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3cSolution3 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3cSolution3Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3cSolution3CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3cSolution4Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3cSolution4 = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3cSolution4Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3cSolution4CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3cSolution5Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3cSolution5 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3cSolution5Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3cSolution5CompanyDetails = response
        }
      )
  }

  bp3cSolution1Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3cSolution1CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3cSolution1CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3cSolution1CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3cSolution1CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3cSolution1CompanyDomainName1 = temp[0].domain_name;
  }

  bp3cSolution1Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3cSolution1CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3cSolution1CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3cSolution1CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3cSolution1CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3cSolution1CompanyDomainName2 = temp[0].domain_name;
  }

  bp3cSolution2Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3cSolution2CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3cSolution2CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3cSolution2CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3cSolution2CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3cSolution2CompanyDomainName1 = temp[0].domain_name;
  }

  bp3cSolution2Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3cSolution2CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3cSolution2CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3cSolution2CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3cSolution2CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3cSolution2CompanyDomainName2 = temp[0].domain_name;
  }

  bp3cSolution3Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3cSolution3CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3cSolution3CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3cSolution3CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3cSolution3CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3cSolution3CompanyDomainName1 = temp[0].domain_name;
  }

  bp3cSolution3Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3cSolution3CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3cSolution3CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3cSolution3CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3cSolution3CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3cSolution3CompanyDomainName2 = temp[0].domain_name;
  }

  bp3cSolution4Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3cSolution4CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3cSolution4CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3cSolution4CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3cSolution4CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3cSolution4CompanyDomainName1 = temp[0].domain_name;
  }

  bp3cSolution4Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3cSolution4CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3cSolution4CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3cSolution4CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3cSolution4CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3cSolution4CompanyDomainName2 = temp[0].domain_name;
  }

  bp3cSolution5Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3cSolution5CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3cSolution5CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3cSolution5CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3cSolution5CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3cSolution5CompanyDomainName1 = temp[0].domain_name;

  }

  bp3cSolution5Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3cSolution5CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3cSolution5CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3cSolution5CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3cSolution5CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3cSolution5CompanyDomainName2 = temp[0].domain_name;
  }


  // Business priority 3d

  bp2abusinessPriority3dSelected(value) {
    this.infocusModel.bp2abusinessPriority3d = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority3Solution1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3d,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3dSolution1 = response[0].Solution_1;
          this.infocusModel.bp2abp3dSolution1Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution2(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3d,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3dSolution2 = response[0].Solution_2;
          this.infocusModel.bp2abp3dSolution2Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3d,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3dSolution3 = response[0].Solution_3;
          this.infocusModel.bp2abp3dSolution3Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution4(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3d,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3dSolution4 = response[0].Solution_4;
          this.infocusModel.bp2abp3dSolution4Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution5(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3d,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3dSolution5 = response[0].Solution_5;
          this.infocusModel.bp2abp3dSolution5Code = response[0].Solution_Code;

        }
      )
  }
  bp2abusinessPriority3dSolution1Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3dSolution1 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3dSolution1Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3dSolution1CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3dSolution2Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3dSolution2 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3dSolution2Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3dSolution2CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3dSolution3Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3dSolution3 = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3dSolution3Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3dSolution3CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3dSolution4Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3dSolution4 = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3dSolution4Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3dSolution4CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3dSolution5Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3dSolution5 = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3dSolution5Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3dSolution5CompanyDetails = response
        }
      )
  }

  bp3dSolution1Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3dSolution1CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3dSolution1CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3dSolution1CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3dSolution1CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3dSolution1CompanyDomainName1 = temp[0].domain_name;
  }

  bp3dSolution1Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3dSolution1CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3dSolution1CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3dSolution1CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3dSolution1CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3dSolution1CompanyDomainName2 = temp[0].domain_name;
  }

  bp3dSolution2Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3dSolution2CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3dSolution2CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3dSolution2CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3dSolution2CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3dSolution2CompanyDomainName1 = temp[0].domain_name;
  }

  bp3dSolution2Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3dSolution2CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3dSolution2CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3dSolution2CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3dSolution2CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3dSolution2CompanyDomainName2 = temp[0].domain_name;
  }

  bp3dSolution3Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3dSolution3CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3dSolution3CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3dSolution3CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3dSolution3CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3dSolution3CompanyDomainName1 = temp[0].domain_name;
  }

  bp3dSolution3Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3dSolution3CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3dSolution3CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3dSolution3CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3dSolution3CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3dSolution3CompanyDomainName2 = temp[0].domain_name;
  }

  bp3dSolution4Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3dSolution4CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3dSolution4CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3dSolution4CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3dSolution4CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3dSolution4CompanyDomainName1 = temp[0].domain_name;
  }

  bp3dSolution4Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3dSolution4CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3dSolution4CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3dSolution4CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3dSolution4CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3dSolution4CompanyDomainName2 = temp[0].domain_name;
  }

  bp3dSolution5Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3dSolution5CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3dSolution5CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3dSolution5CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3dSolution5CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3dSolution5CompanyDomainName1 = temp[0].domain_name;

  }

  bp3dSolution5Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3dSolution5CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3dSolution5CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3dSolution5CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3dSolution5CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3dSolution5CompanyDomainName2 = temp[0].domain_name;
  }


  // Business priority 3e

  bp2abusinessPriority3eSelected(value) {
    this.infocusModel.bp2abusinessPriority3e = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority3Solution1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3e,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3eSolution1 = response[0].Solution_1;
          this.infocusModel.bp2abp3eSolution1Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution2(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3e,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3eSolution2 = response[0].Solution_2;
          this.infocusModel.bp2abp3eSolution2Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3e,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3eSolution3 = response[0].Solution_3;
          this.infocusModel.bp2abp3eSolution3Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution4(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3e,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3eSolution4 = response[0].Solution_4;
          this.infocusModel.bp2abp3eSolution4Code = response[0].Solution_Code;

        }
      )
    this.infocusCoreService.getInfocusBusinessPriority3Solution5(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3e,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2abusinessPriority3eSolution5 = response[0].Solution_5;
          this.infocusModel.bp2abp3eSolution5Code = response[0].Solution_Code;

        }
      )
  }
  bp2abusinessPriority3eSolution1Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3eSolution1 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3eSolution1Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3eSolution1CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3eSolution2Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3eSolution2 = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3eSolution2Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3eSolution2CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3eSolution3Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3eSolution3 = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3eSolution3Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3eSolution3CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3eSolution4Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3eSolution4 = value
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3eSolution4Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3eSolution4CompanyDetails = response
        }
      )
  }
  bp2abusinessPriority3eSolution5Selected(value) {
    console.log(value)
    this.infocusModel.bp2abp3eSolution5 = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3eSolution5Code,randomValue)
      .subscribe(
        (response: Response) => {
          console.log(response)
          this.infocusBusinessPriority3eSolution5CompanyDetails = response
        }
      )
  }

  bp3eSolution1Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3eSolution1CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3eSolution1CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3eSolution1CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3eSolution1CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3eSolution1CompanyDomainName1 = temp[0].domain_name;
  }

  bp3eSolution1Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3eSolution1CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3eSolution1CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3eSolution1CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3eSolution1CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3eSolution1CompanyDomainName2 = temp[0].domain_name;
  }

  bp3eSolution2Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3eSolution2CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3eSolution2CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3eSolution2CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3eSolution2CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3eSolution2CompanyDomainName1 = temp[0].domain_name;
  }

  bp3eSolution2Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3eSolution2CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3eSolution2CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3eSolution2CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3eSolution2CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3eSolution2CompanyDomainName2 = temp[0].domain_name;
  }

  bp3eSolution3Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3eSolution3CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3eSolution3CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3eSolution3CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3eSolution3CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3eSolution3CompanyDomainName1 = temp[0].domain_name;
  }

  bp3eSolution3Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3eSolution3CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3eSolution3CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3eSolution3CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3eSolution3CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3eSolution3CompanyDomainName2 = temp[0].domain_name;
  }

  bp3eSolution4Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3eSolution4CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3eSolution4CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3eSolution4CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3eSolution4CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3eSolution4CompanyDomainName1 = temp[0].domain_name;
  }

  bp3eSolution4Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3eSolution4CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3eSolution4CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3eSolution4CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3eSolution4CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3eSolution4CompanyDomainName2 = temp[0].domain_name;
  }

  bp3eSolution5Company1Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3eSolution5CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 1", temp);
    this.infocusModel.bp2abp3eSolution5CompanyLogo1 = temp[0].logourl
    this.infocusModel.bp2abp3eSolution5CompanyLocation1 = temp[0].country;
    this.infocusModel.bp2abp3eSolution5CompanyName1 = temp[0].company_name;
    this.infocusModel.bp2abp3eSolution5CompanyDomainName1 = temp[0].domain_name;

  }

  bp3eSolution5Company2Seleted(value) {
    console.log(value)
    var temp: any = null;
    temp = this.infocusBusinessPriority3eSolution5CompanyDetails.filter(companyDetail => companyDetail.id == value);
    console.log("The temp value of the company 2", temp);
    this.infocusModel.bp2abp3eSolution5CompanyLogo2 = temp[0].logourl
    this.infocusModel.bp2abp3eSolution5CompanyLocation2 = temp[0].country;
    this.infocusModel.bp2abp3eSolution5CompanyName2 = temp[0].company_name;
    this.infocusModel.bp2abp3eSolution5CompanyDomainName2 = temp[0].domain_name;
    console.log("The finale ", this.infocusModel)
  }
  // Submit report

  postInfocusReport() {
    var temp = this.infocusCoreService.postInfocusReportDetails(this.infocusModel);
    temp.subscribe(
      (response: Response) => {
        console.log(response)
        this.id = response;
      }
    )
  }
  viewPDF() {
    this.infocusCoreService.getInfocusPDFbyId(this.id)
      .subscribe(
        (response: Response) => {

        }
      )
  }

}
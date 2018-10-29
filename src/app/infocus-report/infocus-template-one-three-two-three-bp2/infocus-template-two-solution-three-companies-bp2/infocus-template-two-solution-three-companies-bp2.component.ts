import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { InfocusReportModel } from '../../infocus-report.model';
import { InfocusReportService } from 'src/app/core/infocus-report.service';

@Component({
  selector: 'app-infocus-template-two-solution-three-companies-bp2',
  templateUrl: './infocus-template-two-solution-three-companies-bp2.component.html',
  styleUrls: ['./infocus-template-two-solution-three-companies-bp2.component.css']
})
export class InfocusTemplateTwoSolutionThreeCompaniesBp2Component implements OnInit {

  @Input() businessPriorityPlaceholder;
  @Input() businessPriority2;
  @Input() infocusModel: InfocusReportModel;

  @Output() infocusData = new EventEmitter();
  businessPriority2Value;
  companyDetails1;
  companyDetails2;
  listOfSolution1AllCompanies: string[] = [];
  listOfSolution2AllCompanies: string[] = [];
  solution1;
  solution2;
  companyId;
  constructor(private infocusCoreService: InfocusReportService) { }

  ngOnInit() {
    console.log(this.businessPriorityPlaceholder);
    console.log(this.businessPriority2);
    console.log(this.infocusModel);
  }
  business2ValueSeleted(value) {
    console.log(value);
    this.businessPriority2Value = value
  }
  businessPriority2PlaceholderValue(value) {
    if (value == "Business Priority 3A") {
      this.infocusModel.businessPriority2a = this.businessPriority2Value;
      this.getSolutions1(this.infocusModel.businessPriority2a);
      this.getSolutions2(this.infocusModel.businessPriority2a);
    } else if (value == "Business Priority 3B") {
      this.infocusModel.businessPriority2b = this.businessPriority2Value;
      this.getSolutions1(this.infocusModel.businessPriority2b);
      this.getSolutions2(this.infocusModel.businessPriority2b);
    } else if (value == "Business Priority 3C") {
      this.infocusModel.businessPriority2c = this.businessPriority2Value;
      this.getSolutions1(this.infocusModel.businessPriority2c);
      this.getSolutions2(this.infocusModel.businessPriority2c);
    }
  }
  getSolutions1(businessPriority2) {
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority3Solution1ByBp2NdBp3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, businessPriority2, randomValue)
      .subscribe(
        (response: Response) => {
          this.solution1 = response;
        }
      );
  }

  getSolutions2(businessPriority2) {
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority3Solution1ByBp2NdBp3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, businessPriority2, randomValue)
      .subscribe(
        (response: Response) => {
          this.solution2 = response;
        }
      );
  }
  businessPriority2Solutions1Selected(solution) {
    if (this.businessPriorityPlaceholder == "Business Priority 3A") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution)
      this.infocusModel.bp2aSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2aSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2aSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1, this.listOfSolution1AllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "Business Priority 3B") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution)
      this.infocusModel.bp2bSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2bSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1, this.listOfSolution1AllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "Business Priority 3C") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution)
      this.infocusModel.bp2cSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2cSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1, this.listOfSolution1AllCompanies);
          }
        )
    }
  }

  businessPriority2Solutions2Selected(solution) {
    if (this.businessPriorityPlaceholder == "Business Priority 3A") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution)
      this.infocusModel.bp2aSolution2 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2aSolution2Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2aSolution2Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2, this.listOfSolution2AllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "Business Priority 3B") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution)
      this.infocusModel.bp2bSolution2 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2bSolution2Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bSolution2Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2, this.listOfSolution2AllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "Business Priority 3C") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution)
      this.infocusModel.bp2cSolution2 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2cSolution2Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cSolution2Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2, this.listOfSolution2AllCompanies);
          }
        )
    }
  }

  business2CompanySelected(company) {
    let companySplitValue = company.split('^');
    this.companyId = companySplitValue[2];

  }
  business2CompanyPlaceholder(value) {
    let companyPlaceholder = value;
    if (value == "Solution 1 Company 1" || value == "Solution 1 Company 2" || value == "Solution 1 Company 3") {
      this.solution1companyDetail(companyPlaceholder);
    } else if (value == "Solution 2 Company 1" || value == "Solution 2 Company 2" || value == "Solution 2 Company 3") {
      this.solution2companyDetail(companyPlaceholder);
    }
  }

  solution1companyDetail(companyPlaceholder) {
    if (companyPlaceholder == "Solution 1 Company 1") {
      let temp: any = null;
      temp = this.companyDetails1.filter(companyDetail => companyDetail.id == this.companyId);
      console.log("The temp value of the company 1", temp);
      // BP2A,BP2B,BP2C COMPANY DETAILS1
      if (this.businessPriorityPlaceholder == "Business Priority 3A") {
        this.infocusModel.bp2aSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2aSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2aSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2aSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2aSolution1CompanyMaturityStatus1 = temp[0].maturity;

      } else if (this.businessPriorityPlaceholder == "Business Priority 3B") {
        this.infocusModel.bp2bSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2bSolution1CompanyMaturityStatus1 = temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "Business Priority 3C") {
        this.infocusModel.bp2cSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2cSolution1CompanyMaturityStatus1 = temp[0].maturity;
      }
    } else if (companyPlaceholder == "Solution 1 Company 2") {
      let temp: any = null;
      temp = this.companyDetails1.filter(companyDetail => companyDetail.id == this.companyId);
      console.log("The temp value of the company 1", temp);
      // BP2A,BP2B,BP2C COMPANY DETAILS2
      if (this.businessPriorityPlaceholder == "Business Priority 3A") {
        this.infocusModel.bp2aSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2aSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2aSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2aSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2aSolution1CompanyMaturityStatus2 = temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "Business Priority 3B") {
        this.infocusModel.bp2bSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2bSolution1CompanyMaturityStatus2 = temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "Business Priority 3C") {
        this.infocusModel.bp2cSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2cSolution1CompanyMaturityStatus2 = temp[0].maturity;
      }
    }  else if (companyPlaceholder == "Solution 1 Company 3") {
      let temp: any = null;
      temp = this.companyDetails1.filter(companyDetail => companyDetail.id == this.companyId);
      console.log("The temp value of the company 1", temp);
      // BP2A,BP2B,BP2C COMPANY DETAILS3
      if (this.businessPriorityPlaceholder == "Business Priority 3A") {
        this.infocusModel.bp2aSolution1CompanyLogo3 = temp[0].logourl
        this.infocusModel.bp2aSolution1CompanyLocation3 = temp[0].country;
        this.infocusModel.bp2aSolution1CompanyName3 = temp[0].company_name;
        this.infocusModel.bp2aSolution1CompanyDomainName3 = temp[0].domain_name;
        this.infocusModel.bp2aSolution1CompanyMaturityStatus3 = temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "Business Priority 3B") {
        this.infocusModel.bp2bSolution1CompanyLogo3 = temp[0].logourl
        this.infocusModel.bp2bSolution1CompanyLocation3 = temp[0].country;
        this.infocusModel.bp2bSolution1CompanyName3 = temp[0].company_name;
        this.infocusModel.bp2bSolution1CompanyDomainName3 = temp[0].domain_name;
        this.infocusModel.bp2bSolution1CompanyMaturityStatus3 = temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "Business Priority 3C") {
        this.infocusModel.bp2cSolution1CompanyLogo3 = temp[0].logourl
        this.infocusModel.bp2cSolution1CompanyLocation3 = temp[0].country;
        this.infocusModel.bp2cSolution1CompanyName3 = temp[0].company_name;
        this.infocusModel.bp2cSolution1CompanyDomainName3 = temp[0].domain_name;
        this.infocusModel.bp2cSolution1CompanyMaturityStatus3 = temp[0].maturity;
      }
    }
    this.infocusEmitEvent();
  }

  solution2companyDetail(companyPlaceholder) {
    if (companyPlaceholder == "Solution 2 Company 1") {
      let temp: any = null;
      temp = this.companyDetails2.filter(companyDetail => companyDetail.id == this.companyId);
      console.log("The temp value of the company 1", temp);
      // BP2A,BP2B,BP2C COMPANY DETAILS1
      if (this.businessPriorityPlaceholder == "Business Priority 3A") {
        this.infocusModel.bp2aSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2aSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2aSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2aSolution2CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2aSolution2CompanyMaturityStatus1 = temp[0].maturity;

      } else if (this.businessPriorityPlaceholder == "Business Priority 3B") {
        this.infocusModel.bp2bSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bSolution2CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2bSolution2CompanyMaturityStatus1 = temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "Business Priority 3C") {
        this.infocusModel.bp2cSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cSolution2CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2cSolution2CompanyMaturityStatus1 = temp[0].maturity;
      }
    } else if (companyPlaceholder == "Solution 2 Company 2") {
      let temp: any = null;
      temp = this.companyDetails2.filter(companyDetail => companyDetail.id == this.companyId);
      console.log("The temp value of the company 1", temp);
      // BP2A,BP2B,BP2C COMPANY DETAILS2
      if (this.businessPriorityPlaceholder == "Business Priority 3A") {
        this.infocusModel.bp2aSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2aSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2aSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2aSolution2CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2aSolution2CompanyMaturityStatus2 = temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "Business Priority 3B") {
        this.infocusModel.bp2bSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bSolution2CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2bSolution2CompanyMaturityStatus2 = temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "Business Priority 3C") {
        this.infocusModel.bp2cSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cSolution2CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2cSolution2CompanyMaturityStatus2 = temp[0].maturity;
      }
    } else if (companyPlaceholder == "Solution 2 Company 3") {
      let temp: any = null;
      temp = this.companyDetails2.filter(companyDetail => companyDetail.id == this.companyId);
      console.log("The temp value of the company 1", temp);
      // BP2A,BP2B,BP2C COMPANY DETAILS3
      if (this.businessPriorityPlaceholder == "Business Priority 3A") {
        this.infocusModel.bp2aSolution2CompanyLogo3 = temp[0].logourl
        this.infocusModel.bp2aSolution2CompanyLocation3 = temp[0].country;
        this.infocusModel.bp2aSolution2CompanyName3 = temp[0].company_name;
        this.infocusModel.bp2aSolution2CompanyDomainName3 = temp[0].domain_name;
        this.infocusModel.bp2aSolution2CompanyMaturityStatus3 = temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "Business Priority 3B") {
        this.infocusModel.bp2bSolution2CompanyLogo3 = temp[0].logourl
        this.infocusModel.bp2bSolution2CompanyLocation3 = temp[0].country;
        this.infocusModel.bp2bSolution2CompanyName3 = temp[0].company_name;
        this.infocusModel.bp2bSolution2CompanyDomainName3 = temp[0].domain_name;
        this.infocusModel.bp2bSolution2CompanyMaturityStatus3 = temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "Business Priority 3C") {
        this.infocusModel.bp2cSolution2CompanyLogo3 = temp[0].logourl
        this.infocusModel.bp2cSolution2CompanyLocation3 = temp[0].country;
        this.infocusModel.bp2cSolution2CompanyName3 = temp[0].company_name;
        this.infocusModel.bp2cSolution2CompanyDomainName3 = temp[0].domain_name;
        this.infocusModel.bp2cSolution2CompanyMaturityStatus3 = temp[0].maturity;
      }
    }
    this.infocusEmitEvent();
  }

  concatenateCompanyNameScoreAndId(companyDetail, listOfCompanies: string[]) {
    if (listOfCompanies.length > 0) {
      listOfCompanies.splice(0, listOfCompanies.length);
    }
    console.log("the list of companies before push ", listOfCompanies)
    companyDetail.forEach(company => {
      let companyString: string = company.company_name + "^" + company.GE_PII_SCORE + "^" + company.id
      listOfCompanies.push(companyString);
    });
    console.log("the list of companies is :", listOfCompanies);
  }
  splitSolutionNameNdCode(value: string) {
    let solNameNdCodeArray = value.split("^");
    return solNameNdCodeArray;
  }

  infocusEmitEvent() {
    this.infocusData.emit(this.infocusModel);
  }
}

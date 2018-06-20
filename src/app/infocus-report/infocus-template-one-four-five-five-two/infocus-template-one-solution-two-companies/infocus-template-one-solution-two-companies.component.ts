import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InfocusReportModel } from '../../infocus-report.model';
import { InfocusReportService } from '../../../core/infocus-report.service';

@Component({
  selector: 'app-infocus-template-one-solution-two-companies',
  templateUrl: './infocus-template-one-solution-two-companies.component.html',
  styleUrls: ['./infocus-template-one-solution-two-companies.component.css']
})
export class InfocusTemplateOneSolutionTwoCompaniesComponent implements OnInit {
  @Input() businessPriorityPlaceholder;
  @Input() businessPriority3;
  @Input() infocusModel: InfocusReportModel;
  // @Input() numberOfCompanies;
  @Output() infocusData = new EventEmitter();
  businessPriority3Value;
  companyDetails;
  listOfAllCompanies: string[] = [];
  // solutionNames;
  solution1;
  companyId;




  constructor(private infocusCoreService: InfocusReportService) {
  }

  ngOnInit() {
    console.log(this.businessPriorityPlaceholder);
    console.log(this.businessPriority3);
    console.log(this.infocusModel);
  }



  business3ValueSeleted(value) {
    console.log(value);
    this.businessPriority3Value = value
  }

  // business3SolutionPlaceholderSelected(value) {
  //   console.log(value)
  //   this.setToInfocusModel()
  // }

  businessPriority3PlaceholderValue(value) {
    if (value == "BP2A Business Priority 3A") {
      this.infocusModel.bp2abusinessPriority3a = this.businessPriority3Value;
      this.getSolutions(this.infocusModel.businessPriority2a, this.businessPriority3Value, value);
    } else if (value == "BP2A Business Priority 3B") {
      this.infocusModel.bp2abusinessPriority3b = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2a, this.businessPriority3Value, value);
    } else if (value == "BP2A Business Priority 3C") {
      this.infocusModel.bp2abusinessPriority3c = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2a, this.businessPriority3Value, value);
    } else if (value == "BP2A Business Priority 3D") {
      this.infocusModel.bp2abusinessPriority3d = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2a, this.businessPriority3Value, value);
    } else if (value == "BP2A Business Priority 3E") {
      this.infocusModel.bp2abusinessPriority3e = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2a, this.businessPriority3Value, value);

    } else if (value == "BP2B Business Priority 3A") {
      this.infocusModel.bp2bbusinessPriority3a = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2b, this.businessPriority3Value, value);
    } else if (value == "BP2B Business Priority 3B") {
      this.infocusModel.bp2bbusinessPriority3b = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2b, this.businessPriority3Value, value);
    } else if (value == "BP2B Business Priority 3C") {
      this.infocusModel.bp2bbusinessPriority3c = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2b, this.businessPriority3Value, value);
    } else if (value == "BP2B Business Priority 3D") {
      this.infocusModel.bp2bbusinessPriority3d = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2b, this.businessPriority3Value, value);
    } else if (value == "BP2B Business Priority 3E") {
      this.infocusModel.bp2bbusinessPriority3e = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2b, this.businessPriority3Value, value);

    } else if (value == "BP2C Business Priority 3A") {
      this.infocusModel.bp2cbusinessPriority3a = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2c, this.businessPriority3Value, value);
    } else if (value == "BP2C Business Priority 3B") {
      this.infocusModel.bp2cbusinessPriority3b = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2c, this.businessPriority3Value, value);
    } else if (value == "BP2C Business Priority 3C") {
      this.infocusModel.bp2cbusinessPriority3c = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2c, this.businessPriority3Value, value);
    } else if (value == "BP2C Business Priority 3D") {
      this.infocusModel.bp2cbusinessPriority3d = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2c, this.businessPriority3Value, value);
    } else if (value == "BP2C Business Priority 3E") {
      this.infocusModel.bp2cbusinessPriority3e = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2c, this.businessPriority3Value, value);

    } else if (value == "BP2D Business Priority 3A") {
      this.infocusModel.bp2dbusinessPriority3a = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    } else if (value == "BP2D Business Priority 3B") {
      this.infocusModel.bp2dbusinessPriority3b = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    } else if (value == "BP2D Business Priority 3C") {
      this.infocusModel.bp2dbusinessPriority3c = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    } else if (value == "BP2D Business Priority 3D") {
      this.infocusModel.bp2dbusinessPriority3d = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    } else if (value == "BP2D Business Priority 3E") {
      this.infocusModel.bp2dbusinessPriority3e = this.businessPriority3Value;
      this.getSolutions( this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    }

  }

  getSolutions(businessPriority2, businessPriority3, value) {
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority3Solution1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, businessPriority2, businessPriority3,randomValue)
      .subscribe(
        (response: Response) => {
          this.solution1 = response;
        }
      );
  }

  businessPriority3SolutionsSelected(solution) {
    if (this.businessPriorityPlaceholder == "BP2A Business Priority 3A") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution)
      this.infocusModel.bp2abp3aSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2abp3aSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3aSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3B") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution)
      this.infocusModel.bp2abp3bSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2abp3bSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3bSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3C") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution)
      this.infocusModel.bp2abp3cSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2abp3cSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3cSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3D") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution)
      this.infocusModel.bp2abp3dSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2abp3dSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3dSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3E") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2abp3eSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2abp3eSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3eSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    }
    // BP2B BP3
    else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3A") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2bbp3aSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2bbp3aSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3aSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3B") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2bbp3bSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2bbp3bSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3bSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3C") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2bbp3cSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2bbp3cSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3cSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3D") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2bbp3dSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2bbp3dSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3dSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3E") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2bbp3eSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2bbp3eSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3eSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    }
    // BP2C BP3
    else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3A") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2cbp3aSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2cbp3aSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3aSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3B") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2cbp3bSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2cbp3bSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3bSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3C") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2cbp3cSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2cbp3cSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3cSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3D") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2cbp3dSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2cbp3dSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3dSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3E") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2cbp3eSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2cbp3eSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3eSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    }
    // BP2D BP3
    else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3A") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2dbp3aSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2dbp3aSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3aSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3B") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2dbp3bSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2dbp3bSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3bSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3C") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2dbp3cSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2dbp3cSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3cSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3D") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2dbp3dSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2dbp3dSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3dSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3E") {
      let splitedSolutionNameNdCode = this.splitSolutionNameNdCode(solution);
      this.infocusModel.bp2dbp3eSolution1 = splitedSolutionNameNdCode[0];
      this.infocusModel.bp2dbp3eSolution1Code = splitedSolutionNameNdCode[1];
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3eSolution1Code, randomValue)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails, this.listOfAllCompanies);
          }
        )
    }
  }


  business3CompanySelected(company) {
    let companySplitValue = company.split('^');
    this.companyId = companySplitValue[2];

  }
  business3CompanyPlaceholder(value) {
    let companyPlaceholder = value;
    this.companyDetailToModel(companyPlaceholder);
  }

  companyDetailToModel(companyPlaceholder) {
    if (companyPlaceholder == "Company 1") {
      let temp: any = null;
      temp = this.companyDetails.filter(companyDetail => companyDetail.id == this.companyId);
      console.log("The temp value of the company 1", temp);
      // BP2A COMPANY DETAILS 1
      if (this.businessPriorityPlaceholder == "BP2A Business Priority 3A") {
        this.infocusModel.bp2abp3aSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2abp3aSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2abp3aSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2abp3aSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2abp3aSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3B") {
        this.infocusModel.bp2abp3bSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2abp3bSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2abp3bSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2abp3bSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2abp3bSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3C") {
        this.infocusModel.bp2abp3cSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2abp3cSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2abp3cSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2abp3cSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2abp3cSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3D") {
        this.infocusModel.bp2abp3dSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2abp3dSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2abp3dSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2abp3dSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2abp3dSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3E") {
        this.infocusModel.bp2abp3eSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2abp3eSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2abp3eSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2abp3eSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2abp3eSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      }
      // BP2B COMPANY DETAILS 1
      else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3A") {
        this.infocusModel.bp2bbp3aSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3aSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3aSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3aSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2bbp3aSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3B") {
        this.infocusModel.bp2bbp3bSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3bSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3bSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3bSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2bbp3bSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3C") {
        this.infocusModel.bp2bbp3cSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3cSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3cSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3cSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2bbp3cSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3D") {
        this.infocusModel.bp2bbp3dSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3dSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3dSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3dSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2bbp3dSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3E") {
        this.infocusModel.bp2bbp3eSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3eSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3eSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3eSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2bbp3eSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      }
      // BP2C COMPANY DETAILS 1
      else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3A") {
        this.infocusModel.bp2cbp3aSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3aSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3aSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3aSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2cbp3aSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3B") {
        this.infocusModel.bp2cbp3bSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3bSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3bSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3bSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2cbp3bSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3C") {
        this.infocusModel.bp2cbp3cSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3cSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3cSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3cSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2cbp3cSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3D") {
        this.infocusModel.bp2cbp3dSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3dSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3dSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3dSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2cbp3dSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3E") {
        this.infocusModel.bp2cbp3eSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3eSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3eSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3eSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2cbp3eSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      }
      // BP2D COMPANY DETAILS 1
      else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3A") {
        this.infocusModel.bp2dbp3aSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3aSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3aSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3aSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2dbp3aSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3B") {
        this.infocusModel.bp2dbp3bSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3bSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3bSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3bSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2dbp3bSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3C") {
        this.infocusModel.bp2dbp3cSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3cSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3cSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3cSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2dbp3cSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3D") {
        this.infocusModel.bp2dbp3dSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3dSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3dSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3dSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2dbp3dSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3E") {
        this.infocusModel.bp2dbp3eSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3eSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3eSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3eSolution1CompanyDomainName1 = temp[0].domain_name;
        this.infocusModel.bp2dbp3eSolution1CompanyMaturityStatus1 =  temp[0].maturity;
      }

    } else if (companyPlaceholder == "Company 2") {
      let temp: any = null;
      temp = this.companyDetails.filter(companyDetail => companyDetail.id == this.companyId);
      console.log("The temp value of the company 1", temp);
      // BP2A COMPANY DETAILS2
      if (this.businessPriorityPlaceholder == "BP2A Business Priority 3A") {
        this.infocusModel.bp2abp3aSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2abp3aSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2abp3aSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2abp3aSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2abp3aSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3B") {
        this.infocusModel.bp2abp3bSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2abp3bSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2abp3bSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2abp3bSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2abp3bSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3C") {
        this.infocusModel.bp2abp3cSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2abp3cSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2abp3cSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2abp3cSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2abp3cSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3D") {
        this.infocusModel.bp2abp3dSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2abp3dSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2abp3dSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2abp3dSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2abp3dSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3E") {
        this.infocusModel.bp2abp3eSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2abp3eSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2abp3eSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2abp3eSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2abp3eSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      }
      // BP2B COMPANY DETAILS2
      else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3A") {
        this.infocusModel.bp2bbp3aSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3aSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3aSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3aSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2bbp3aSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3B") {
        this.infocusModel.bp2bbp3bSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3bSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3bSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3bSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2bbp3bSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3C") {
        this.infocusModel.bp2bbp3cSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3cSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3cSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3cSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2bbp3cSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3D") {
        this.infocusModel.bp2bbp3dSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3dSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3dSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3dSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2bbp3dSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3E") {
        this.infocusModel.bp2bbp3eSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3eSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3eSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3eSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2bbp3eSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      }
      // BP2C COMPANY DETAILS2
      else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3A") {
        this.infocusModel.bp2cbp3aSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3aSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3aSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3aSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2cbp3aSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3B") {
        this.infocusModel.bp2cbp3bSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3bSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3bSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3bSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2cbp3bSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3C") {
        this.infocusModel.bp2cbp3cSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3cSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3cSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3cSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2cbp3cSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3D") {
        this.infocusModel.bp2cbp3dSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3dSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3dSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3dSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2cbp3dSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3E") {
        this.infocusModel.bp2cbp3eSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3eSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3eSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3eSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2cbp3eSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      }
      // BP2D COMPANY DETAILS2
      else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3A") {
        this.infocusModel.bp2dbp3aSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3aSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3aSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3aSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2dbp3aSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3B") {
        this.infocusModel.bp2dbp3bSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3bSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3bSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3bSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2dbp3bSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3C") {
        this.infocusModel.bp2dbp3cSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3cSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3cSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3cSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2dbp3cSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3D") {
        this.infocusModel.bp2dbp3dSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3dSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3dSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3dSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2dbp3dSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3E") {
        this.infocusModel.bp2dbp3eSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3eSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3eSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3eSolution1CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2dbp3eSolution1CompanyMaturityStatus2 =  temp[0].maturity;
      }
    }
    this.infocusEmitEvent();
  }
  infocusEmitEvent() {
    this.infocusData.emit(this.infocusModel);
  }

  splitSolutionNameNdCode(value: string) {
    let solNameNdCodeArray = value.split("^");
    return solNameNdCodeArray;
  }

  concatenateCompanyNameScoreAndId(companyDetail, listOfCompanies) {
    if(listOfCompanies.length>0){
      listOfCompanies.splice(0,listOfCompanies.length);
   }
   console.log("the list of companies before push ", listOfCompanies)
    console.log("list of companies before pushing")
    companyDetail.forEach(company => {
      let companyString: string = company.company_name + "^" + company.GE_PII_SCORE + "^" + company.id
      listOfCompanies.push(companyString);
    });
    console.log("after the compaines push ",listOfCompanies);
  }


}
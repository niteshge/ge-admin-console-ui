import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InfocusReportModel } from '../../infocus-report.model';
import { InfocusReportService } from '../../../core/infocus-report.service';

@Component({
  selector: 'app-infocus-template-one-solution-companies',
  templateUrl: './infocus-template-one-solution-companies.component.html',
  styleUrls: ['./infocus-template-one-solution-companies.component.css']
})
export class InfocusTemplateOneSolutionCompaniesComponent implements OnInit {
  @Input() businessPriorityPlaceholder;
  @Input() businessPriority3;
  @Input() infocusModel: InfocusReportModel;
  @Input() numberOfSolutions;
  // @Input() numberOfCompanies;
  @Output() infocusData = new EventEmitter();
  businessPriority3Value;
  companyDetails;
  listOfAllCompanies: string[] = [];
  solutionNames;
  companyId;




  constructor(private infocusCoreService: InfocusReportService) {
  }

  ngOnInit() {
    console.log(this.businessPriorityPlaceholder);
    console.log(this.businessPriority3);
    console.log(this.infocusModel);
    console.log(this.numberOfSolutions);
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
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2a, this.businessPriority3Value, value);
    } else if (value == "BP2A Business Priority 3B") {
      this.infocusModel.bp2abusinessPriority3b = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2a, this.businessPriority3Value, value);
    } else if (value == "BP2A Business Priority 3C") {
      this.infocusModel.bp2abusinessPriority3c = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2a, this.businessPriority3Value, value);
    } else if (value == "BP2A Business Priority 3D") {
      this.infocusModel.bp2abusinessPriority3d = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2a, this.businessPriority3Value, value);
    } else if (value == "BP2A Business Priority 3E") {
      this.infocusModel.bp2abusinessPriority3e = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2a, this.businessPriority3Value, value);

    } else if (value == "BP2B Business Priority 3A") {
      this.infocusModel.bp2bbusinessPriority3a = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2b, this.businessPriority3Value, value);
    } else if (value == "BP2B Business Priority 3B") {
      this.infocusModel.bp2bbusinessPriority3b = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2b, this.businessPriority3Value, value);
    } else if (value == "BP2B Business Priority 3C") {
      this.infocusModel.bp2bbusinessPriority3c = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2b, this.businessPriority3Value, value);
    } else if (value == "BP2B Business Priority 3D") {
      this.infocusModel.bp2bbusinessPriority3d = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2b, this.businessPriority3Value, value);
    } else if (value == "BP2B Business Priority 3E") {
      this.infocusModel.bp2bbusinessPriority3e = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2b, this.businessPriority3Value, value);

    } else if (value == "BP2C Business Priority 3A") {
      this.infocusModel.bp2cbusinessPriority3a = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2c, this.businessPriority3Value, value);
    } else if (value == "BP2C Business Priority 3B") {
      this.infocusModel.bp2cbusinessPriority3b = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2c, this.businessPriority3Value, value);
    } else if (value == "BP2C Business Priority 3C") {
      this.infocusModel.bp2cbusinessPriority3c = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2c, this.businessPriority3Value, value);
    } else if (value == "BP2C Business Priority 3D") {
      this.infocusModel.bp2cbusinessPriority3d = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2c, this.businessPriority3Value, value);
    } else if (value == "BP2C Business Priority 3E") {
      this.infocusModel.bp2cbusinessPriority3e = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2c, this.businessPriority3Value, value);

    } else if (value == "BP2D Business Priority 3A") {
      this.infocusModel.bp2dbusinessPriority3a = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    } else if (value == "BP2D Business Priority 3B") {
      this.infocusModel.bp2dbusinessPriority3b = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    } else if (value == "BP2D Business Priority 3C") {
      this.infocusModel.bp2dbusinessPriority3c = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    } else if (value == "BP2D Business Priority 3D") {
      this.infocusModel.bp2dbusinessPriority3d = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    } else if (value == "BP2D Business Priority 3E") {
      this.infocusModel.bp2dbusinessPriority3e = this.businessPriority3Value;
      this.getSolutions(this.numberOfSolutions, this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    }

  }

  getSolutions(numberSolutions, businessPriority2, businessPriority3, value) {
    if (numberSolutions == 1) {
      this.infocusCoreService.getInfocusBusinessPriority3Solution1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, businessPriority2, businessPriority3)
        .subscribe(
          (response: Response) => {
            this.solutionNames = response[0].Solution_1;
            if (value == "BP2A Business Priority 3A") {
              this.infocusModel.bp2abp3aSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2abp3aSolution1Code);
            } else if (value == "BP2A Business Priority 3B") {
              this.infocusModel.bp2abp3bSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2abp3bSolution1Code);
            } else if (value == "BP2A Business Priority 3C") {
              this.infocusModel.bp2abp3cSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2abp3cSolution1Code);
            } else if (value == "BP2A Business Priority 3D") {
              this.infocusModel.bp2abp3dSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2abp3dSolution1Code);
            } else if (value == "BP2A Business Priority 3E") {
              this.infocusModel.bp2abp3eSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2abp3eSolution1Code);
              // BP2B SOLUTION CODE
            } else if (value == "BP2B Business Priority 3A") {
              this.infocusModel.bp2bbp3aSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2bbp3aSolution1Code);
            } else if (value == "BP2B Business Priority 3B") {
              this.infocusModel.bp2bbp3bSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2bbp3bSolution1Code);
            } else if (value == "BP2B Business Priority 3C") {
              this.infocusModel.bp2bbp3cSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2bbp3cSolution1Code);
            } else if (value == "BP2B Business Priority 3D") {
              this.infocusModel.bp2bbp3dSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2bbp3dSolution1Code);
            } else if (value == "BP2B Business Priority 3E") {
              this.infocusModel.bp2bbp3eSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2bbp3eSolution1Code);
              // BP2C SOLUTION CODE
            } else if (value == "BP2C Business Priority 3A") {
              this.infocusModel.bp2cbp3aSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2cbp3aSolution1Code);
            } else if (value == "BP2C Business Priority 3B") {
              this.infocusModel.bp2cbp3bSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2cbp3bSolution1Code);
            } else if (value == "BP2C Business Priority 3C") {
              this.infocusModel.bp2cbp3cSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2cbp3cSolution1Code);
            } else if (value == "BP2C Business Priority 3D") {
              this.infocusModel.bp2cbp3dSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2cbp3dSolution1Code);
            } else if (value == "BP2C Business Priority 3E") {
              this.infocusModel.bp2cbp3eSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2cbp3eSolution1Code);
              // BP2D SOLUTION CODE
            } else if (value == "BP2D Business Priority 3A") {
              this.infocusModel.bp2dbp3aSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2dbp3aSolution1Code);
            } else if (value == "BP2D Business Priority 3B") {
              this.infocusModel.bp2dbp3bSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2dbp3bSolution1Code);
            } else if (value == "BP2D Business Priority 3C") {
              this.infocusModel.bp2dbp3cSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2dbp3cSolution1Code);
            } else if (value == "BP2D Business Priority 3D") {
              this.infocusModel.bp2dbp3dSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2dbp3dSolution1Code);
            } else if (value == "BP2D Business Priority 3E") {
              this.infocusModel.bp2dbp3eSolution1Code = response[0].Solution_Code;
              console.log(this.infocusModel.bp2dbp3eSolution1Code);
            }
          }
        )
    }
  }
  businessPriority3SolutionsSelected(solution) {
    if (this.businessPriorityPlaceholder == "BP2A Business Priority 3A") {
      this.infocusModel.bp2abp3aSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3aSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3B") {
      this.infocusModel.bp2abp3bSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3bSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3C") {
      this.infocusModel.bp2abp3cSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3cSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3D") {
      this.infocusModel.bp2abp3dSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3dSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3E") {
      this.infocusModel.bp2abp3eSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3eSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    }
    // BP2B BP3
    else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3A") {
      this.infocusModel.bp2bbp3aSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3aSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3B") {
      this.infocusModel.bp2bbp3bSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3bSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3C") {
      this.infocusModel.bp2bbp3cSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3cSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3D") {
      this.infocusModel.bp2bbp3dSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3dSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3E") {
      this.infocusModel.bp2bbp3eSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3eSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    }
    // BP2C BP3
    else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3A") {
      this.infocusModel.bp2cbp3aSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3aSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3B") {
      this.infocusModel.bp2cbp3bSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3bSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3C") {
      this.infocusModel.bp2cbp3cSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3cSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3D") {
      this.infocusModel.bp2cbp3dSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3dSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3E") {
      this.infocusModel.bp2cbp3eSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3eSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    }
    // BP2D BP3
    else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3A") {
      this.infocusModel.bp2dbp3aSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3aSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3B") {
      this.infocusModel.bp2dbp3bSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3bSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3C") {
      this.infocusModel.bp2dbp3cSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3cSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3D") {
      this.infocusModel.bp2dbp3dSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3dSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3E") {
      this.infocusModel.bp2dbp3eSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3eSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails = response;
            this.concatenateCompanyNameScoreAndId();
          }
        )
    }
  }

  concatenateCompanyNameScoreAndId() {
    this.companyDetails.forEach(company => {
      let companyString: string = company.company_name + "-" + company.GE_PII_SCORE + "-" + company.id
      this.listOfAllCompanies.push(companyString);
    });
    console.log(this.listOfAllCompanies);
  }
  business3CompanySelected(company) {
    let companySplitValue = company.split('-');
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
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3B") {
        this.infocusModel.bp2abp3bSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2abp3bSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2abp3bSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2abp3bSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3C") {
        this.infocusModel.bp2abp3cSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2abp3cSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2abp3cSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2abp3cSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3D") {
        this.infocusModel.bp2abp3dSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2abp3dSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2abp3dSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2abp3dSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3E") {
        this.infocusModel.bp2abp3eSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2abp3eSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2abp3eSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2abp3eSolution1CompanyDomainName1 = temp[0].domain_name;
      }
      // BP2B COMPANY DETAILS 1
      else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3A") {
        this.infocusModel.bp2bbp3aSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3aSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3aSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3aSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3B") {
        this.infocusModel.bp2bbp3bSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3bSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3bSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3bSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3C") {
        this.infocusModel.bp2bbp3cSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3cSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3cSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3cSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3D") {
        this.infocusModel.bp2bbp3dSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3dSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3dSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3dSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3E") {
        this.infocusModel.bp2bbp3eSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3eSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3eSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3eSolution1CompanyDomainName1 = temp[0].domain_name;
      }
      // BP2C COMPANY DETAILS 1
      else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3A") {
        this.infocusModel.bp2cbp3aSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3aSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3aSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3aSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3B") {
        this.infocusModel.bp2cbp3bSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3bSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3bSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3bSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3C") {
        this.infocusModel.bp2cbp3cSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3cSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3cSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3cSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3D") {
        this.infocusModel.bp2cbp3dSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3dSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3dSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3dSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3E") {
        this.infocusModel.bp2cbp3eSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3eSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3eSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3eSolution1CompanyDomainName1 = temp[0].domain_name;
      }
      // BP2D COMPANY DETAILS 1
      else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3A") {
        this.infocusModel.bp2dbp3aSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3aSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3aSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3aSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3B") {
        this.infocusModel.bp2dbp3bSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3bSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3bSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3bSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3C") {
        this.infocusModel.bp2dbp3cSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3cSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3cSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3cSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3D") {
        this.infocusModel.bp2dbp3dSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3dSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3dSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3dSolution1CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3E") {
        this.infocusModel.bp2dbp3eSolution1CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3eSolution1CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3eSolution1CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3eSolution1CompanyDomainName1 = temp[0].domain_name;
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
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3B") {
        this.infocusModel.bp2abp3bSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2abp3bSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2abp3bSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2abp3bSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3C") {
        this.infocusModel.bp2abp3cSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2abp3cSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2abp3cSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2abp3cSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3D") {
        this.infocusModel.bp2abp3dSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2abp3dSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2abp3dSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2abp3dSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3E") {
        this.infocusModel.bp2abp3eSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2abp3eSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2abp3eSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2abp3eSolution1CompanyDomainName2 = temp[0].domain_name;
      }
      // BP2B COMPANY DETAILS2
      else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3A") {
        this.infocusModel.bp2bbp3aSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3aSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3aSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3aSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3B") {
        this.infocusModel.bp2bbp3bSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3bSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3bSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3bSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3C") {
        this.infocusModel.bp2bbp3cSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3cSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3cSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3cSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3D") {
        this.infocusModel.bp2bbp3dSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3dSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3dSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3dSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3E") {
        this.infocusModel.bp2bbp3eSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3eSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3eSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3eSolution1CompanyDomainName2 = temp[0].domain_name;
      }
      // BP2C COMPANY DETAILS2
      else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3A") {
        this.infocusModel.bp2cbp3aSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3aSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3aSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3aSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3B") {
        this.infocusModel.bp2cbp3bSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3bSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3bSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3bSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3C") {
        this.infocusModel.bp2cbp3cSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3cSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3cSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3cSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3D") {
        this.infocusModel.bp2cbp3dSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3dSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3dSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3dSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3E") {
        this.infocusModel.bp2cbp3eSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3eSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3eSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3eSolution1CompanyDomainName2 = temp[0].domain_name;
      }
      // BP2D COMPANY DETAILS2
      else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3A") {
        this.infocusModel.bp2dbp3aSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3aSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3aSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3aSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3B") {
        this.infocusModel.bp2dbp3bSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3bSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3bSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3bSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3C") {
        this.infocusModel.bp2dbp3cSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3cSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3cSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3cSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3D") {
        this.infocusModel.bp2dbp3dSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3dSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3dSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3dSolution1CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3E") {
        this.infocusModel.bp2dbp3eSolution1CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3eSolution1CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3eSolution1CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3eSolution1CompanyDomainName2 = temp[0].domain_name;
      }
    }
    this.infocusEmitEvent();
  }
  infocusEmitEvent() {
    this.infocusData.emit(this.infocusModel);
  }

}
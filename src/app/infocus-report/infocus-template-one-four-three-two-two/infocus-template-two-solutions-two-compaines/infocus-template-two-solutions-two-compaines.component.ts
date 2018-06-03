import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InfocusReportModel } from '../../infocus-report.model';
import { InfocusReportService } from '../../../core/infocus-report.service';

@Component({
  selector: 'app-infocus-template-two-solutions-two-compaines',
  templateUrl: './infocus-template-two-solutions-two-compaines.component.html',
  styleUrls: ['./infocus-template-two-solutions-two-compaines.component.css']
})
export class InfocusTemplateTwoSolutionsTwoCompainesComponent implements OnInit {
  @Input() businessPriorityPlaceholder;
  @Input() businessPriority3;
  @Input() infocusModel: InfocusReportModel;
  // @Input() numberOfCompanies;
  @Output() infocusData = new EventEmitter();
  businessPriority3Value;
  companyDetails1;
  companyDetails2;
  listOfAllCompanies: string[] = [];
  solution1;
  solution2;
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
  businessPriority3PlaceholderValue(value) {
    if (value == "BP2A Business Priority 3A") {
      this.infocusModel.bp2abusinessPriority3a = this.businessPriority3Value;
      this.getSolutions1(this.infocusModel.businessPriority2a, this.businessPriority3Value, value);
    } else if (value == "BP2A Business Priority 3B") {
      this.infocusModel.bp2abusinessPriority3b = this.businessPriority3Value;
      this.getSolutions1(this.infocusModel.businessPriority2a, this.businessPriority3Value, value);
    } else if (value == "BP2A Business Priority 3C") {
      this.infocusModel.bp2abusinessPriority3c = this.businessPriority3Value;
      this.getSolutions1(this.infocusModel.businessPriority2a, this.businessPriority3Value, value);

    } else if (value == "BP2B Business Priority 3A") {
      this.infocusModel.bp2bbusinessPriority3a = this.businessPriority3Value;
      this.getSolutions1(this.infocusModel.businessPriority2b, this.businessPriority3Value, value);
    } else if (value == "BP2B Business Priority 3B") {
      this.infocusModel.bp2bbusinessPriority3b = this.businessPriority3Value;
      this.getSolutions1(this.infocusModel.businessPriority2b, this.businessPriority3Value, value);
    } else if (value == "BP2B Business Priority 3C") {
      this.infocusModel.bp2bbusinessPriority3c = this.businessPriority3Value;
      this.getSolutions1(this.infocusModel.businessPriority2b, this.businessPriority3Value, value);

    } else if (value == "BP2C Business Priority 3A") {
      this.infocusModel.bp2cbusinessPriority3a = this.businessPriority3Value;
      this.getSolutions1(this.infocusModel.businessPriority2c, this.businessPriority3Value, value);
    } else if (value == "BP2C Business Priority 3B") {
      this.infocusModel.bp2cbusinessPriority3b = this.businessPriority3Value;
      this.getSolutions1(this.infocusModel.businessPriority2c, this.businessPriority3Value, value);
    } else if (value == "BP2C Business Priority 3C") {
      this.infocusModel.bp2cbusinessPriority3c = this.businessPriority3Value;
      this.getSolutions1(this.infocusModel.businessPriority2c, this.businessPriority3Value, value);

    } else if (value == "BP2D Business Priority 3A") {
      this.infocusModel.bp2dbusinessPriority3a = this.businessPriority3Value;
      this.getSolutions1(this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    } else if (value == "BP2D Business Priority 3B") {
      this.infocusModel.bp2dbusinessPriority3b = this.businessPriority3Value;
      this.getSolutions1(this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    } else if (value == "BP2D Business Priority 3C") {
      this.infocusModel.bp2dbusinessPriority3c = this.businessPriority3Value;
      this.getSolutions1(this.infocusModel.businessPriority2d, this.businessPriority3Value, value);
    }

  }

  getSolutions1(businessPriority2, businessPriority3, value) {
    this.infocusCoreService.getInfocusBusinessPriority3Solution1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, businessPriority2, businessPriority3)
      .subscribe(
        (response: Response) => {
          this.solution1 = response[0].Solution_1;
          if (value == "BP2A Business Priority 3A") {
            this.infocusModel.bp2abp3aSolution1Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2abp3aSolution1Code);
          } else if (value == "BP2A Business Priority 3B") {
            this.infocusModel.bp2abp3bSolution1Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2abp3bSolution1Code);
          } else if (value == "BP2A Business Priority 3C") {
            this.infocusModel.bp2abp3cSolution1Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2abp3cSolution1Code);

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
          }
        }
      )
  }

  getSolutions2(businessPriority2, businessPriority3, value) {
    this.infocusCoreService.getInfocusBusinessPriority3Solution2(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, businessPriority2, businessPriority3)
      .subscribe(
        (response: Response) => {
          this.solution2 = response[0].Solution_2;
          if (value == "BP2A Business Priority 3A") {
            this.infocusModel.bp2abp3aSolution2Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2abp3aSolution2Code);
          } else if (value == "BP2A Business Priority 3B") {
            this.infocusModel.bp2abp3bSolution2Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2abp3bSolution2Code);
          } else if (value == "BP2A Business Priority 3C") {
            this.infocusModel.bp2abp3cSolution2Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2abp3cSolution2Code);

            // BP2B SOLUTION CODE
          } else if (value == "BP2B Business Priority 3A") {
            this.infocusModel.bp2bbp3aSolution2Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2bbp3aSolution2Code);
          } else if (value == "BP2B Business Priority 3B") {
            this.infocusModel.bp2bbp3bSolution2Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2bbp3bSolution2Code);
          } else if (value == "BP2B Business Priority 3C") {
            this.infocusModel.bp2bbp3cSolution2Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2bbp3cSolution2Code);

            // BP2C SOLUTION CODE
          } else if (value == "BP2C Business Priority 3A") {
            this.infocusModel.bp2cbp3aSolution2Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2cbp3aSolution2Code);
          } else if (value == "BP2C Business Priority 3B") {
            this.infocusModel.bp2cbp3bSolution2Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2cbp3bSolution2Code);
          } else if (value == "BP2C Business Priority 3C") {
            this.infocusModel.bp2cbp3cSolution2Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2cbp3cSolution2Code);

            // BP2D SOLUTION CODE
          } else if (value == "BP2D Business Priority 3A") {
            this.infocusModel.bp2dbp3aSolution2Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2dbp3aSolution2Code);
          } else if (value == "BP2D Business Priority 3B") {
            this.infocusModel.bp2dbp3bSolution2Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2dbp3bSolution2Code);
          } else if (value == "BP2D Business Priority 3C") {
            this.infocusModel.bp2dbp3cSolution2Code = response[0].Solution_Code;
            console.log(this.infocusModel.bp2dbp3cSolution2Code);
          }
        }
      )
  }
  businessPriority3Solutions1Selected(solution) {
    if (this.businessPriorityPlaceholder == "BP2A Business Priority 3A") {
      this.infocusModel.bp2abp3aSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3aSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3B") {
      this.infocusModel.bp2abp3bSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3bSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3C") {
      this.infocusModel.bp2abp3cSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3cSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1);
          }
        )
    }
    // BP2B BP3
    else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3A") {
      this.infocusModel.bp2bbp3aSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3aSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3B") {
      this.infocusModel.bp2bbp3bSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3bSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3C") {
      this.infocusModel.bp2bbp3cSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3cSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1);
          }
        )
    }
    // BP2C BP3
    else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3A") {
      this.infocusModel.bp2cbp3aSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3aSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3B") {
      this.infocusModel.bp2cbp3bSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3bSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3C") {
      this.infocusModel.bp2cbp3cSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3cSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1);
          }
        )
    }
    // BP2D BP3
    else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3A") {
      this.infocusModel.bp2dbp3aSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3aSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3B") {
      this.infocusModel.bp2dbp3bSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3bSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3C") {
      this.infocusModel.bp2dbp3cSolution1 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3cSolution1Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails1 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails1);
          }
        )
    }
  }



  businessPriority3Solutions2Selected(solution) {
    if (this.businessPriorityPlaceholder == "BP2A Business Priority 3A") {
      this.infocusModel.bp2abp3aSolution2 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3aSolution2Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3B") {
      this.infocusModel.bp2abp3bSolution2 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3bSolution2Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3C") {
      this.infocusModel.bp2abp3cSolution2 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2abp3cSolution2Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2);
          }
        )
    }
    // BP2B BP3
    else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3A") {
      this.infocusModel.bp2bbp3aSolution2 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3aSolution2Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3B") {
      this.infocusModel.bp2bbp3bSolution2 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3bSolution2Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3C") {
      this.infocusModel.bp2bbp3cSolution2 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2bbp3cSolution2Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2);
          }
        )
    }
    // BP2C BP3
    else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3A") {
      this.infocusModel.bp2cbp3aSolution2 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3aSolution2Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3B") {
      this.infocusModel.bp2cbp3bSolution2 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3bSolution2Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3C") {
      this.infocusModel.bp2cbp3cSolution2 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2cbp3cSolution2Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2);
          }
        )
    }
    // BP2D BP3
    else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3A") {
      this.infocusModel.bp2dbp3aSolution2 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3aSolution2Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3B") {
      this.infocusModel.bp2dbp3bSolution2 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3bSolution2Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2);
          }
        )
    } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3C") {
      this.infocusModel.bp2dbp3cSolution2 = solution;
      this.infocusCoreService.getInfocusCompanyDetails(this.infocusModel.bp2dbp3cSolution2Code)
        .subscribe(
          (response: Response) => {
            this.companyDetails2 = response;
            this.concatenateCompanyNameScoreAndId(this.companyDetails2);
          }
        )
    }
  }






  concatenateCompanyNameScoreAndId(companyDetail) {
    companyDetail.forEach(company => {
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
    if (value == "Solution 1 Company 1" || value == "Solution 1 Company 2") {
      this.solution1companyDetail(companyPlaceholder);
    } else if (value == "Solution 2 Company 1" || value == "Solution 2 Company 2") {
      this.solution2companyDetail(companyPlaceholder);
    }

  }

  solution1companyDetail(companyPlaceholder) {
    if (companyPlaceholder == "Solution 1 Company 1") {
      let temp: any = null;
      temp = this.companyDetails1.filter(companyDetail => companyDetail.id == this.companyId);
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
      }
    } else if (companyPlaceholder == "Solution 1 Company 2") {
      let temp: any = null;
      temp = this.companyDetails1.filter(companyDetail => companyDetail.id == this.companyId);
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
        this.infocusModel.bp2dbp3eSolution1CompanyDomainName2 = temp[0].domain_name;
      }
    }
    this.infocusEmitEvent();
  }

  solution2companyDetail(companyPlaceholder) {
    if (companyPlaceholder == "Solution 2 Company 1") {
      let temp: any = null;
      temp = this.companyDetails1.filter(companyDetail => companyDetail.id == this.companyId);
      console.log("The temp value of the company 1", temp);
      // BP2A COMPANY DETAILS 1
      if (this.businessPriorityPlaceholder == "BP2A Business Priority 3A") {
        this.infocusModel.bp2abp3aSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2abp3aSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2abp3aSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2abp3aSolution2CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3B") {
        this.infocusModel.bp2abp3bSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2abp3bSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2abp3bSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2abp3bSolution2CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3C") {
        this.infocusModel.bp2abp3cSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2abp3cSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2abp3cSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2abp3cSolution2CompanyDomainName1 = temp[0].domain_name;
      }
      // BP2B COMPANY DETAILS 1
      else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3A") {
        this.infocusModel.bp2bbp3aSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3aSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3aSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3aSolution2CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3B") {
        this.infocusModel.bp2bbp3bSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3bSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3bSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3bSolution2CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3C") {
        this.infocusModel.bp2bbp3cSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2bbp3cSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2bbp3cSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2bbp3cSolution2CompanyDomainName1 = temp[0].domain_name;
      }
      // BP2C COMPANY DETAILS 1
      else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3A") {
        this.infocusModel.bp2cbp3aSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3aSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3aSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3aSolution2CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3B") {
        this.infocusModel.bp2cbp3bSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3bSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3bSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3bSolution2CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3C") {
        this.infocusModel.bp2cbp3cSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2cbp3cSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2cbp3cSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2cbp3cSolution2CompanyDomainName1 = temp[0].domain_name;
      }
      // BP2D COMPANY DETAILS 1
      else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3A") {
        this.infocusModel.bp2dbp3aSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3aSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3aSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3aSolution2CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3B") {
        this.infocusModel.bp2dbp3bSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3bSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3bSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3bSolution2CompanyDomainName1 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3C") {
        this.infocusModel.bp2dbp3cSolution2CompanyLogo1 = temp[0].logourl
        this.infocusModel.bp2dbp3cSolution2CompanyLocation1 = temp[0].country;
        this.infocusModel.bp2dbp3cSolution2CompanyName1 = temp[0].company_name;
        this.infocusModel.bp2dbp3cSolution2CompanyDomainName1 = temp[0].domain_name;
      }
    } else if (companyPlaceholder == "Solution 2 Company 2") {
      let temp: any = null;
      temp = this.companyDetails1.filter(companyDetail => companyDetail.id == this.companyId);
      console.log("The temp value of the company 1", temp);
      // BP2A COMPANY DETAILS2
      if (this.businessPriorityPlaceholder == "BP2A Business Priority 3A") {
        this.infocusModel.bp2abp3aSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2abp3aSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2abp3aSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2abp3aSolution2CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3B") {
        this.infocusModel.bp2abp3bSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2abp3bSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2abp3bSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2abp3bSolution2CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2A Business Priority 3C") {
        this.infocusModel.bp2abp3cSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2abp3cSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2abp3cSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2abp3cSolution2CompanyDomainName2 = temp[0].domain_name;
      }
      // BP2B COMPANY DETAILS2
      else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3A") {
        this.infocusModel.bp2bbp3aSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3aSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3aSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3aSolution2CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3B") {
        this.infocusModel.bp2bbp3bSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3bSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3bSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3bSolution2CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2B Business Priority 3C") {
        this.infocusModel.bp2bbp3cSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2bbp3cSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2bbp3cSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2bbp3cSolution2CompanyDomainName2 = temp[0].domain_name;
      }
      // BP2C COMPANY DETAILS2
      else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3A") {
        this.infocusModel.bp2cbp3aSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3aSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3aSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3aSolution2CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3B") {
        this.infocusModel.bp2cbp3bSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3bSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3bSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3bSolution2CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2C Business Priority 3C") {
        this.infocusModel.bp2cbp3cSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2cbp3cSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2cbp3cSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2cbp3cSolution2CompanyDomainName2 = temp[0].domain_name;
      }
      // BP2D COMPANY DETAILS2
      else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3A") {
        this.infocusModel.bp2dbp3aSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3aSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3aSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3aSolution2CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3B") {
        this.infocusModel.bp2dbp3bSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3bSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3bSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3bSolution2CompanyDomainName2 = temp[0].domain_name;
      } else if (this.businessPriorityPlaceholder == "BP2D Business Priority 3C") {
        this.infocusModel.bp2dbp3cSolution2CompanyLogo2 = temp[0].logourl
        this.infocusModel.bp2dbp3cSolution2CompanyLocation2 = temp[0].country;
        this.infocusModel.bp2dbp3cSolution2CompanyName2 = temp[0].company_name;
        this.infocusModel.bp2dbp3cSolution2CompanyDomainName2 = temp[0].domain_name;
        this.infocusModel.bp2dbp3eSolution2CompanyDomainName2 = temp[0].domain_name;
      }
    }
    this.infocusEmitEvent();
  }

  infocusEmitEvent() {
    this.infocusData.emit(this.infocusModel);
  }

}

import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
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
  infocusIntroductionTitle;
  infocusIntroductionPara1;
  infocusIntroductionPara2;
  infocusIntroductionPara3;
  infocusIndustry;
  infocusIndustrySegment1;
  infocusIndustrySegment2;
  infocusBusinessPriority1;
  infocusContextHeading;
  infocusContextSubHeading;
  infocusContextDesc;
  listBp2Placeholders: string[] = [];
  businessPriority2;
  businessPriority2SelectedValue;
  bp2aBusinessPriority3;
  bp2bBusinessPriority3;
  bp2cBusinessPriority3;
  bp2dBusinessPriority3;
  listBp2aBp3Placeholders: object[] = [];
  listBp2bBp3Placeholders: object[] = [];
  listBp2cBp3Placeholders: object[] = [];
  listBp2dBp3Placeholders: object[] = [];
  businessPriority3SelectedValue;
  solutionNames;
  solutionCodes;
  businessPriority1;
  totalRecommedations;
  totalNumberOfRecommendations;
  recommendation1MainPara;
  recommendation1SubHeading;
  recommendation1SubPoint1;
  recommendation1SubPoint2;
  recommendation1SubPoint3;
  recommendation2MainPara;
  recommendation1SubPoint4;
  recommendation1SubPoint5;
  recommendation1SubPoint6;
  recommendationSaveStatus;
  contextSaved;
  introductionSaveStatus;


  constructor(private infocusCoreService: InfocusReportService) { }

  ngOnInit() {
    let randomValue = Math.random();
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

  saveContext() {
    this.infocusModel.infocusContextHeading = this.infocusContextHeading;
    this.infocusModel.infocusContextSubHeading = this.infocusContextSubHeading;
    this.infocusModel.infocusContextDesc = this.infocusContextDesc;
    this.contextSaved = "Saved Context";

  }

  businessPriority1Selected(value) {
    this.infocusModel.businessPriority1 = value;
    this.businessPriority1 = value;
    console.log(this.infocusModel);
    let randomValue = Math.random();
    this.businessPriority2 = this.infocusCoreService.getInfocusBusinessPriority2(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1,randomValue);
    this.listBp2Placeholders.push('Business Priority 2A')
    this.listBp2Placeholders.push('Business Priority 2B')
    this.listBp2Placeholders.push('Business Priority 2C')
    this.listBp2Placeholders.push('Business Priority 2D')
  }

  // businessPriority2PlaceholderValue(value) {
  //   if (value == 'Business Priority 2A') {
  //     this.listBp2aBp3Placeholders.push(new BusinessPriority3Model("BP2A Business Priority 3A"));
  //     this.listBp2aBp3Placeholders.push(new BusinessPriority3Model("BP2A Business Priority 3B"));
  //     this.listBp2aBp3Placeholders.push(new BusinessPriority3Model("BP2A Business Priority 3C"));
  //     this.listBp2aBp3Placeholders.push(new BusinessPriority3Model("BP2A Business Priority 3D"));
  //     this.listBp2aBp3Placeholders.push(new BusinessPriority3Model("BP2A Business Priority 3E"));
  //     this.infocusModel.businessPriority2a = this.businessPriority2SelectedValue;
  //     this.bp2aBusinessPriority3 = this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a)

  //   } else if (value == 'Business Priority 2B') {
  //     this.listBp2bBp3Placeholders.push(new BusinessPriority3Model("BP2B Business Priority 3A"));
  //     this.listBp2bBp3Placeholders.push(new BusinessPriority3Model("BP2B Business Priority 3B"));
  //     this.listBp2bBp3Placeholders.push(new BusinessPriority3Model("BP2B Business Priority 3C"));
  //     this.listBp2bBp3Placeholders.push(new BusinessPriority3Model("BP2B Business Priority 3D"));
  //     this.listBp2bBp3Placeholders.push(new BusinessPriority3Model("BP2B Business Priority 3E"));
  //     this.infocusModel.businessPriority2b = this.businessPriority2SelectedValue;
  //     this.bp2bBusinessPriority3 = this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2b);
  //   } else if (value == 'Business Priority 2C') {
  //     this.listBp2cBp3Placeholders.push(new BusinessPriority3Model("BP2C Business Priority 3A"));
  //     this.listBp2cBp3Placeholders.push(new BusinessPriority3Model("BP2C Business Priority 3B"));
  //     this.listBp2cBp3Placeholders.push(new BusinessPriority3Model("BP2C Business Priority 3C"));
  //     this.listBp2cBp3Placeholders.push(new BusinessPriority3Model("BP2C Business Priority 3D"));
  //     this.listBp2cBp3Placeholders.push(new BusinessPriority3Model("BP2C Business Priority 3E"));
  //     this.infocusModel.businessPriority2c = this.businessPriority2SelectedValue;
  //     this.bp2cBusinessPriority3 = this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2c);
  //   } else if (value == 'Business Priority 2D') {
  //     this.listBp2dBp3Placeholders.push(new BusinessPriority3Model("BP2D Business Priority 3A"));
  //     this.listBp2dBp3Placeholders.push(new BusinessPriority3Model("BP2D Business Priority 3B"));
  //     this.listBp2dBp3Placeholders.push(new BusinessPriority3Model("BP2D Business Priority 3C"));
  //     this.listBp2dBp3Placeholders.push(new BusinessPriority3Model("BP2D Business Priority 3D"));
  //     this.listBp2dBp3Placeholders.push(new BusinessPriority3Model("BP2D Business Priority 3E"));
  //     this.infocusModel.businessPriority2d = this.businessPriority2SelectedValue;
  //     this.bp2dBusinessPriority3 = this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2d);
  //   }
  //   console.log(this.infocusModel);
  // }

  // businessPriority2Selected(value) {
  //   this.businessPriority2SelectedValue = value;
  //   // this.infocusModel.businessPriority2a = value
  //   // this.bp2abusinessPriority3 = this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a);
  //   console.log(value);
  // }
  businessPriority2aSelected(value) {
    this.listBp2aBp3Placeholders.push(new BusinessPriority3Model("BP2A Business Priority 3A"));
    this.listBp2aBp3Placeholders.push(new BusinessPriority3Model("BP2A Business Priority 3B"));
    this.listBp2aBp3Placeholders.push(new BusinessPriority3Model("BP2A Business Priority 3C"));
    this.listBp2aBp3Placeholders.push(new BusinessPriority3Model("BP2A Business Priority 3D"));
    this.listBp2aBp3Placeholders.push(new BusinessPriority3Model("BP2A Business Priority 3E"));
    this.infocusModel.businessPriority2a = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2aBusinessPriority3 = response;
        }
      )
  }

  businessPriority2bSelected(value) {
    this.listBp2bBp3Placeholders.push(new BusinessPriority3Model("BP2B Business Priority 3A"));
    this.listBp2bBp3Placeholders.push(new BusinessPriority3Model("BP2B Business Priority 3B"));
    this.listBp2bBp3Placeholders.push(new BusinessPriority3Model("BP2B Business Priority 3C"));
    this.listBp2bBp3Placeholders.push(new BusinessPriority3Model("BP2B Business Priority 3D"));
    this.listBp2bBp3Placeholders.push(new BusinessPriority3Model("BP2B Business Priority 3E"));
    this.infocusModel.businessPriority2b = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2b,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2bBusinessPriority3 = response;
        }
      )
  }

  businessPriority2cSelected(value) {
    this.listBp2cBp3Placeholders.push(new BusinessPriority3Model("BP2C Business Priority 3A"));
    this.listBp2cBp3Placeholders.push(new BusinessPriority3Model("BP2C Business Priority 3B"));
    this.listBp2cBp3Placeholders.push(new BusinessPriority3Model("BP2C Business Priority 3C"));
    this.listBp2cBp3Placeholders.push(new BusinessPriority3Model("BP2C Business Priority 3D"));
    this.listBp2cBp3Placeholders.push(new BusinessPriority3Model("BP2C Business Priority 3E"));
    this.infocusModel.businessPriority2c = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2c,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2cBusinessPriority3 = response;
        }
      )
  }

  businessPriority2dSelected(value) {
    this.listBp2dBp3Placeholders.push(new BusinessPriority3Model("BP2D Business Priority 3A"));
    this.listBp2dBp3Placeholders.push(new BusinessPriority3Model("BP2D Business Priority 3B"));
    this.listBp2dBp3Placeholders.push(new BusinessPriority3Model("BP2D Business Priority 3C"));
    this.listBp2dBp3Placeholders.push(new BusinessPriority3Model("BP2D Business Priority 3D"));
    this.listBp2dBp3Placeholders.push(new BusinessPriority3Model("BP2D Business Priority 3E"));
    this.infocusModel.businessPriority2d = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2d,randomValue)
      .subscribe(
        (response: Response) => {
          this.bp2dBusinessPriority3 = response;
        }
      )
  }
  businessPriority2aBP3(value) {
    if (this.totalRecommedations == null) {
      this.totalRecommedations = ['1', '2'];
    }
    console.log(this.totalRecommedations);

    console.log("From child componenet ", value);
    console.log("infocus Model data after child component ", this.infocusModel);
  }
  businessPriority2bBP3(value) {
    if (this.totalRecommedations == null) {
      this.totalRecommedations = [1, 2];
    }
    console.log(value);
  }
  businessPriority2cBP3(value) {
    if (this.totalRecommedations == null) {
      this.totalRecommedations = [1, 2];
    }
    console.log(value);
  }
  businessPriority2dBP3(value) {
    if (this.totalRecommedations == null) {
      this.totalRecommedations = [1, 2];
    }
    console.log(value);
  }

  businessPriority3Selected(value) {
    this.businessPriority3SelectedValue = value;
    console.log(value);
  }

  businessPriority3PlaceholderValue(value) {
    if (value == "BP2A Business Priority 3A") {
      this.infocusModel.bp2abusinessPriority3a = this.businessPriority3SelectedValue;
      let randomValue = Math.random();
      this.infocusCoreService.getInfocusBusinessPriority3Solution1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3a,randomValue)
        .subscribe(
          (response: Response) => {
            this.solutionNames = response[0].Solution_1;
            this.infocusModel.bp2abp3aSolution5Code = response[0].Solution_Code;
          }
        );
    }

  }
  bp2abusinessPriority3Selected(value) {
    this.businessPriority3SelectedValue = value;
  }


  numberOfRecommentations(value) {
    this.totalNumberOfRecommendations = value;
  }
  recommendationOneSelected() {
    if (this.recommendation1MainPara != null) {
      this.infocusModel.recommendation1MainPara = this.recommendation1MainPara;
    }
    if (this.recommendation1SubHeading != null) {
      this.infocusModel.recommendation1SubHeading = this.recommendation1SubHeading;
    }
    if (this.recommendation1SubPoint1 != null) {
      this.infocusModel.recommendation1SubPoint1 = this.recommendation1SubPoint1;
    }
    if (this.recommendation1SubPoint2 != null) {
      this.infocusModel.recommendation1SubPoint2 = this.recommendation1SubPoint2;
    }
    if (this.recommendation1SubPoint3 != null) {
      this.infocusModel.recommendation1SubPoint3 = this.recommendation1SubPoint3;
    }
    if (this.recommendation1SubPoint4 != null) {
      this.infocusModel.recommendation1SubPoint4 = this.recommendation1SubPoint4;
    }
    if (this.recommendation1SubPoint5 != null) {
      this.infocusModel.recommendation1SubPoint5 = this.recommendation1SubPoint5;
    }
    if (this.recommendation1SubPoint6 != null) {
      this.infocusModel.recommendation1SubPoint6 = this.recommendation1SubPoint6;
    }

    this.recommendationSaveStatus = "done";
  }
  saveIntroduction() {
    if (this.infocusIntroductionTitle != null) {
      this.infocusModel.introductionTitle = this.infocusIntroductionTitle;
    }
    if (this.infocusIntroductionPara1 != null) {
      this.infocusModel.introductionPara1 = this.infocusIntroductionPara1;
    }
    if (this.infocusIntroductionPara2 != null) {
      this.infocusModel.introductionPara2 = this.infocusIntroductionPara2;
    }
    if (this.infocusIntroductionPara3 != null) {
      this.infocusModel.introductionPara3 = this.infocusIntroductionPara3;
    }
    this.introductionSaveStatus = "Saved Introduction";
  }

  postInfocusReport() {
    this.infocusModel.templateType = 1;
    let temp = this.infocusCoreService.postInfocusReportDetails(this.infocusModel);
    temp.subscribe(
      (response: Response) => {
        console.log(response)
        this.id = response;
      }
    )
  }
  viewPDF() {
    console.log("the id is ",this.id)
    window.open('http://localhost:8787/api/viewinfocuspdf/' +this.id.id+ '.pdf')
    this.infocusCoreService.getInfocusPDFbyId(this.id)
      .subscribe(
        (response: Response) => {

        }
      )
  }

}



export class BusinessPriority3Model {
  public businessPriority3;

  constructor(businessPriority3) {
    this.businessPriority3 = businessPriority3;
  }

}
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}
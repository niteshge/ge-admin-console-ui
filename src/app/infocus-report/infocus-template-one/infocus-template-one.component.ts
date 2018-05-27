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
  totalRecommedations: number[] = [];

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
    this.infocusModel.infocusContextHeading = this.infocusContextHeading;
    this.infocusModel.infocusContextSubHeading = this.infocusContextSubHeading;
    this.infocusModel.infocusContextDesc = this.infocusContextDesc;

    this.infocusModel.businessPriority1 = value;
    this.businessPriority1 = value;
    console.log(this.infocusModel);
    this.businessPriority2 = this.infocusCoreService.getInfocusBusinessPriority2(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1);
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
    this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a)
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
    this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2b)
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
    this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2c)
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
    this.infocusCoreService.getInfocusBusinessPriority3(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2d)
      .subscribe(
        (response: Response) => {
          this.bp2dBusinessPriority3 = response;
        }
      )
  }
  businessPriority2bBP3(value) {
    if (this.totalRecommedations != null) {
      this.totalRecommedations = [1, 2];
    }
    console.log(value);
  }
  businessPriority2cBP3(value) {
    if (this.totalRecommedations != null) {
      this.totalRecommedations = [1, 2];
    }
    console.log(value);
  }
  businessPriority2dBP3(value) {
    if (this.totalRecommedations != null) {
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
      this.infocusCoreService.getInfocusBusinessPriority3Solution1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, this.infocusModel.businessPriority2a, this.infocusModel.bp2abusinessPriority3a)
        .subscribe(
          (response: Response) => {
            this.solutionNames = response[0].Solution_1;
            this.infocusModel.bp2abp3aSolution5Code = response[0].Solution_Code;
          }
        )
    }

  }
  bp2abusinessPriority3Selected(value) {
    this.businessPriority3SelectedValue = value;
  }

  businessPriority2aBP3(value) {
    if (this.totalRecommedations != null) {
      this.totalRecommedations = [1, 2];
    }

    console.log("From child componenet ", value);
    console.log("infocus Model data after child component ", this.infocusModel);
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
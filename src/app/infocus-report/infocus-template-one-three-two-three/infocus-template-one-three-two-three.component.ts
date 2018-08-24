import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { InfocusReportService } from '../../core/infocus-report.service';
import { InfocusReportModel } from '../infocus-report.model';
import * as myGlobals from '../../app-globals';

@Component({
  selector: 'app-infocus-template-one-three-two-three',
  templateUrl: './infocus-template-one-three-two-three.component.html',
  styleUrls: ['./infocus-template-one-three-two-three.component.css']
})
export class InfocusTemplateOneThreeTwoThreeComponent implements OnInit {
  infocusModel: InfocusReportModel = new InfocusReportModel();
  id;
  technologies;
  infocusReportTitle:string = null;
  infocusRoles;
  infocusIntroductionTitle;
  infocusIntroductionTitleLen:number = 0;
  infocusIntroductionTitleMaxValue;
  infocusIntroductionPara1;
  infocusIntroductionPara1Len:number = 0;
  infocusIntroductionPara1MaxValue;
  infocusIntroductionPara2;
  infocusIntroductionPara2Len:number = 0;
  infocusIntroductionPara2MaxValue;
  infocusIntroductionPara3;
  infocusIntroductionPara3Len:number = 0;
  infocusIntroductionPara3MaxValue;
  infocusIntroductionSaveParameter;
  infocusHowToStartupPara1;
  infocusHowToStartupPara1Len:number = 0;
  infocusHowToStartupPara1MaxValue;
  infocusHowToStartupPara2;
  infocusHowToStartupPara2Len:number = 0;
  infocusHowToStartupPara2MaxValue;
  infocusHowToStartupPara3;
  infocusHowToStartupPara3Len:number = 0;
  infocusHowToStartupPara3MaxValue;
  infocusHowToStartupSaveParameter;
  howToWorkWithStartupsSaveStatus;
  infocusContextSaveParameter;
  infocusTechnologySubSegement;
  infocusIndustry;
  infocusIndustrySegment1;
  infocusIndustrySegment2;
  infocusBusinessPriority1;
  introductionSaveStatus;
  infocusContextHeading;
  infocusContextHeadingLen:number=0;
  infocusContextHeadingMaxValue;
  infocusContextSubHeading;
  infocusContextSubHeadingLen:number=0;
  infocusContextSubHeadingMaxValue;
  infocusContextDesc;
  infocusContextDescLen:number=0;
  infocusContextDescMaxValue;
  contextSaved;
  businessPriority1;
  bP2;
  listBp2Placeholders: string[] = [];
  listBp2aBp3Placeholders: object[] = [];
  listBp2bBp3Placeholders: object[] = [];
  listBp2cBp3Placeholders: object[] = [];
  listBp2dBp3Placeholders: object[] = [];
  recommendation1MainPara:string;
  recommendation1MainParaLen:number = 0;
  recommendation1MainParaMaxValue;
  recommendation1SubHeading;
  recommendation1SubPoint1:string;
  recommendation1SubPoint1Len:number = 0;
  recommendation1SubPoint1MaxValue;
  recommendation1SubPoint2:string;
  recommendation1SubPoint2Len:number = 0;
  recommendation1SubPoint2MaxValue;
  recommendation1SubPoint3:string;
  recommendation1SubPoint3Len:number = 0;
  recommendation1SubPoint3MaxValue;
  recommendation2MainPara;
  recommendation1SubPoint4:string;
  recommendation1SubPoint4Len:number = 0;
  recommendation1SubPoint4MaxValue;
  recommendation1SubPoint5:string;
  recommendation1SubPoint5Len:number = 0;
  recommendation1SubPoint5MaxValue;
  recommendation1SubPoint6:string;
  recommendation1SubPoint6Len:number = 0;
  recommendation1SubPoint6MaxValue;
  recommendationSaveStatus;
  infocusRecommendationSaveParameter;
  maxInputIntro;
  maxLengthExceeded:string = "MAX CHAR LENGTH EXCEEDED";

  constructor(private infocusCoreService: InfocusReportService) { }

  ngOnInit() {
    let randomValue = Math.random() * 10;
    this.infocusRoles = this.infocusCoreService.getInfocusReportRoles(randomValue);
    this.technologies = this.infocusCoreService.getTechnologies(randomValue)
  }

  analystName(value) {
    this.infocusModel.analystName = value;
    console.log(this.infocusModel.analystName);
  }

  displayName(value:string) {
    this.infocusModel.displayRole = value.toUpperCase();
    console.log(this.infocusModel.displayRole);
  }

  regionName(value) {
    this.infocusModel.region = value;
    console.log(this.infocusModel.region);
  }

  readTime(value) {
    this.infocusModel.readtime = value;
    console.log(this.infocusModel.readtime);
  }

  technology(value) {
    this.infocusModel.technology = value;
    console.log(this.infocusModel.technology);
    let randomValue = Math.random();
    this.infocusTechnologySubSegement=this.infocusCoreService.getTechnologiesSubSegment(value,randomValue);
  }
  // technologySubSegment(value){
  //   this.infocusModel.technologySubSegemt = value;
  // }

  roleSelected(value:string) {
    this.infocusModel.infocusReportTitle = this.infocusReportTitle.toUpperCase();
    this.infocusModel.role = value.toUpperCase();
    let randomValue = Math.random();
    this.infocusIndustry = this.infocusCoreService.getInfocusIndustriesByRole(value, randomValue);
  }
  industrySelected(value:string) {
    this.infocusModel.industry = value.toUpperCase();
    let randomValue = Math.random();
    this.infocusIndustrySegment1 = this.infocusCoreService.getInfocusIndustrySegment1ByRolendIndustry(this.infocusModel.role, this.infocusModel.industry, randomValue);
    this.infocusBusinessPriority1 = this.infocusCoreService.getInfocusBusinessPriority1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, randomValue);
    console.log(this.infocusModel);
  }
  industrySegment1Selected(value:string) {
    this.infocusModel.industrySegment1 = value.toUpperCase();
    console.log(this.infocusModel);
    let randomValue = Math.random();
    this.infocusIndustrySegment2 = this.infocusCoreService.getInfocusIndustrySegment2ByIndustryndIndustrySegment1(this.infocusModel.industry, this.infocusModel.industrySegment1, randomValue);
    this.infocusBusinessPriority1 = this.infocusCoreService.getInfocusBusinessPriority1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, randomValue);
  }

  industrySegment2Selected(value:string) {
    this.infocusModel.industrySegment2 = value.toUpperCase();
    console.log(this.infocusModel);
    let randomValue = Math.random();
    this.infocusBusinessPriority1 = this.infocusCoreService.getInfocusBusinessPriority1(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, randomValue);
  }
  introductionTitle() {
    this.infocusIntroductionTitleLen = this.infocusIntroductionTitle.length;
    this.infocusIntroductionTitleMaxValue = this.lenCount(this.infocusIntroductionTitle, this.infocusIntroductionTitleMaxValue,63);
    if (this.infocusIntroductionTitleMaxValue === null && this.infocusIntroductionPara3MaxValue === null && this.infocusIntroductionPara2MaxValue === null && this.infocusIntroductionPara1MaxValue === null) {
      this.infocusIntroductionSaveParameter = 1;
    } else {
      this.infocusIntroductionSaveParameter = null;
    }
    if(this.infocusIntroductionTitle.length<1){
      this.infocusIntroductionSaveParameter = null;
    }
  }
  introductionPara1() {
    this.infocusIntroductionPara1Len = this.infocusIntroductionPara1.length;
    this.infocusIntroductionPara1MaxValue = this.lenCount(this.infocusIntroductionPara1, this.infocusIntroductionPara1MaxValue,1046);
    if (this.infocusIntroductionTitleMaxValue === null && this.infocusIntroductionPara3MaxValue === null && this.infocusIntroductionPara2MaxValue === null && this.infocusIntroductionPara1MaxValue === null) {
      this.infocusIntroductionSaveParameter = 1;
    } else {
      this.infocusIntroductionSaveParameter = null;
    }
    if(this.infocusIntroductionPara1.length<1){
      this.infocusIntroductionSaveParameter = null;
    }
  }
 
  introductionPara2() {
    this.infocusIntroductionPara2Len = this.infocusIntroductionPara2.length;
    this.infocusIntroductionPara2MaxValue = this.lenCount(this.infocusIntroductionPara2, this.infocusIntroductionPara2MaxValue, 948);
    if (this.infocusIntroductionTitleMaxValue === null && this.infocusIntroductionPara3MaxValue === null && this.infocusIntroductionPara2MaxValue === null && this.infocusIntroductionPara1MaxValue === null) {
      this.infocusIntroductionSaveParameter = 1;
    } else {
      this.infocusIntroductionSaveParameter = null;
     
    }
    if(this.infocusIntroductionPara2.length<1){
      this.infocusIntroductionSaveParameter = null;
    }
  }
  introductionPara3() {
    this.infocusIntroductionPara3Len = this.infocusIntroductionPara3.length;
    this.infocusIntroductionPara3MaxValue = this.lenCount(this.infocusIntroductionPara3, this.infocusIntroductionPara3MaxValue,910);
    if (this.infocusIntroductionTitleMaxValue === null && this.infocusIntroductionPara3MaxValue === null && this.infocusIntroductionPara2MaxValue === null && this.infocusIntroductionPara1MaxValue === null) {
      this.infocusIntroductionSaveParameter = 1;
    } else {
      this.infocusIntroductionSaveParameter = null;
    }
    if(this.infocusIntroductionPara3.length<1){
      this.infocusIntroductionSaveParameter = null;
    }
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
    this.introductionSaveStatus = "SUCCESSFULLY SAVED INTRODUCTION";
  }

  howToStartPara1() {
    this.infocusHowToStartupPara1Len = this.infocusHowToStartupPara1.length;
    this.infocusHowToStartupPara1MaxValue = this.lenCount(this.infocusHowToStartupPara1, this.infocusHowToStartupPara1MaxValue,1046);
    if (this.infocusHowToStartupPara3MaxValue === null && this.infocusHowToStartupPara2MaxValue === null && this.infocusHowToStartupPara1MaxValue === null) {
      this.infocusHowToStartupSaveParameter = 1;
    } else {
      this.infocusHowToStartupSaveParameter = null;
    }
    if(this.infocusHowToStartupPara1.length<1){
      this.infocusHowToStartupSaveParameter = null;
    }
  }
  howToStartPara2() {
    this.infocusHowToStartupPara2Len = this.infocusHowToStartupPara2.length;
    this.infocusHowToStartupPara2MaxValue = this.lenCount(this.infocusHowToStartupPara2, this.infocusHowToStartupPara2MaxValue, 948);
    if (this.infocusHowToStartupPara3MaxValue === null && this.infocusHowToStartupPara2MaxValue === null && this.infocusHowToStartupPara1MaxValue === null) {
      this.infocusHowToStartupSaveParameter = 1;
    } else {
      this.infocusHowToStartupSaveParameter = null;
     
    }
    if(this.infocusHowToStartupPara2.length<1){
      this.infocusHowToStartupSaveParameter = null;
    }
  }
  howToStartPara3() {
    this.infocusHowToStartupPara3Len = this.infocusHowToStartupPara3.length;
    this.infocusHowToStartupPara3MaxValue = this.lenCount(this.infocusHowToStartupPara3, this.infocusHowToStartupPara3MaxValue,910);
    if (this.infocusHowToStartupPara3MaxValue === null && this.infocusHowToStartupPara2MaxValue === null && this.infocusHowToStartupPara1MaxValue === null) {
      this.infocusHowToStartupSaveParameter = 1;
    } else {
      this.infocusHowToStartupSaveParameter = null;
    }
    if(this.infocusHowToStartupPara3.length<1){
      this.infocusHowToStartupSaveParameter = null;
    }
  }
  saveHowToWorkStartup() {
    if (this.infocusHowToStartupPara1 != null) {
      this.infocusModel.howToWorkStartupsPara1 = this.infocusHowToStartupPara1;
    }
    if (this.infocusHowToStartupPara2 != null) {
      this.infocusModel.howToWorkStartupsPara2 = this.infocusHowToStartupPara2;
    }
    if (this.infocusHowToStartupPara3 != null) {
      this.infocusModel.howToWorkStartupsPara3 = this.infocusHowToStartupPara3;
    }
    this.howToWorkWithStartupsSaveStatus = "SUCCESSFULLY SAVED HOW TO WORK WITH START UPS";
  }


  contextHeading() {
    this.infocusContextHeadingLen = this.infocusContextHeading.length;
    this.infocusContextHeadingMaxValue = this.lenCount(this.infocusContextHeading, this.infocusContextHeadingMaxValue,40);
    if (this.infocusContextHeadingMaxValue === null && this.infocusContextSubHeadingMaxValue === null && this.infocusContextDescMaxValue === null) {
      this.infocusContextSaveParameter = 1;
    } else {
      this.infocusContextSaveParameter = null;
    }
    if(this.infocusContextHeading.length<1){
      this.infocusContextSaveParameter = null;
    }
  }
  contextSubHeading() {
    this.infocusContextSubHeadingLen = this.infocusContextSubHeading.length;
    this.infocusContextSubHeadingMaxValue = this.lenCount(this.infocusContextSubHeading, this.infocusContextSubHeadingMaxValue, 105);
    if (this.infocusContextHeadingMaxValue === null && this.infocusContextSubHeadingMaxValue === null && this.infocusContextDescMaxValue === null) {
      this.infocusContextSaveParameter = 1;
    } else {
      this.infocusContextSaveParameter = null;
      
    }
    if(this.infocusContextSubHeading.length<1){
      this.infocusContextSaveParameter = null;
    }
  }
  contextDesc() {
    this.infocusContextDescLen = this.infocusContextDesc.length;
    this.infocusContextDescMaxValue = this.lenCount(this.infocusContextDesc, this.infocusContextDescMaxValue, 1097);
    if (this.infocusContextHeadingMaxValue === null && this.infocusContextSubHeadingMaxValue === null && this.infocusContextDescMaxValue === null) {
      this.infocusContextSaveParameter = 1;
    } else {
      this.infocusContextSaveParameter = null;
      
    }
    if(this.infocusContextDesc.length<1){
      this.infocusContextSaveParameter = null;
    }
  }
  saveContext() {
    if(this.infocusContextHeading!=null){
      this.infocusModel.infocusContextHeading = this.infocusContextHeading;
    }
    if(this.infocusContextSubHeading!=null){
      this.infocusModel.infocusContextSubHeading = this.infocusContextSubHeading;
    }
    if(this.infocusContextDesc!=null){
      this.infocusModel.infocusContextDesc = this.infocusContextDesc;
    }
    
    this.contextSaved = "SUCCESSFULLY SAVED CONTEXT";

  }
  recommendationMain() {
    this.recommendation1MainParaLen = this.recommendation1MainPara.length;
    this.recommendation1MainParaMaxValue = this.lenCount(this.recommendation1MainPara, this.recommendation1MainParaMaxValue,918);
    if (this.recommendation1MainParaMaxValue === null && this.recommendation1SubPoint1MaxValue === null && this.recommendation1SubPoint2MaxValue === null, this.recommendation1SubPoint3MaxValue === null) {
      this.infocusRecommendationSaveParameter = 1;
    } else {
      this.infocusRecommendationSaveParameter = null;
      
    }
    if(this.recommendation1MainPara.length<1){
      this.infocusRecommendationSaveParameter = null;
    }
  }
  recommendationPoint1() {
    this.recommendation1SubPoint1Len = this.recommendation1SubPoint1.length;
    this.recommendation1SubPoint1MaxValue = this.lenCount(this.recommendation1SubPoint1, this.recommendation1SubPoint1MaxValue, 574);
    if (this.recommendation1MainParaMaxValue === null && this.recommendation1SubPoint1MaxValue === null && this.recommendation1SubPoint2MaxValue === null&& this.recommendation1SubPoint3MaxValue === null) {
      this.infocusRecommendationSaveParameter = 1;
    } else {
      this.infocusRecommendationSaveParameter = null;
      
    }
    if(this.recommendation1SubPoint1.length<1){
      this.infocusRecommendationSaveParameter = null;
    }
  }
  recommendationPoint2() {
    this.recommendation1SubPoint2Len = this.recommendation1SubPoint2.length;
    this.recommendation1SubPoint2MaxValue = this.lenCount(this.recommendation1SubPoint2, this.recommendation1SubPoint2MaxValue, 574);
    if (this.recommendation1MainParaMaxValue === null && this.recommendation1SubPoint1MaxValue === null && this.recommendation1SubPoint2MaxValue === null&& this.recommendation1SubPoint3MaxValue === null) {
      this.infocusRecommendationSaveParameter = 1;
    } else {
      this.infocusRecommendationSaveParameter = null;
      
    }
    if(this.recommendation1SubPoint2.length<1){
      this.infocusRecommendationSaveParameter = null;
    }
  }
  recommendationPoint3() {
    this.recommendation1SubPoint3Len = this.recommendation1SubPoint3.length;
    this.recommendation1SubPoint3MaxValue = this.lenCount(this.recommendation1SubPoint3, this.recommendation1SubPoint3MaxValue, 574);
    if (this.recommendation1MainParaMaxValue === null && this.recommendation1SubPoint1MaxValue === null && this.recommendation1SubPoint2MaxValue === null && this.recommendation1SubPoint3MaxValue === null) {
      this.infocusRecommendationSaveParameter = 1;
    } else {
      this.infocusRecommendationSaveParameter = null;
      
    }
    if(this.recommendation1SubPoint3.length<1){
      this.infocusRecommendationSaveParameter = null;
    }
  }
  recommendationPoint4() {
    this.recommendation1SubPoint4Len = this.recommendation1SubPoint4.length;
    this.recommendation1SubPoint4MaxValue = this.lenCount(this.recommendation1SubPoint4, this.recommendation1SubPoint4MaxValue, 574);
    if (this.recommendation1SubPoint4MaxValue === null && this.recommendation1SubPoint5MaxValue === null&& this.recommendation1SubPoint6MaxValue === null) {
      this.infocusRecommendationSaveParameter = 1;
    } else {
      this.infocusRecommendationSaveParameter = null;
      
    }
  }
  recommendationPoint5() {
    this.recommendation1SubPoint5Len = this.recommendation1SubPoint5.length;
    this.recommendation1SubPoint5MaxValue = this.lenCount(this.recommendation1SubPoint5, this.recommendation1SubPoint5MaxValue, 574);
    if (this.recommendation1SubPoint4MaxValue === null && this.recommendation1SubPoint5MaxValue === null&& this.recommendation1SubPoint6MaxValue === null) {
      this.infocusRecommendationSaveParameter = 1;
    } else {
      this.infocusRecommendationSaveParameter = null;
      
    }
  }
  recommendationPoint6() {
    this.recommendation1SubPoint6Len = this.recommendation1SubPoint6.length;
    this.recommendation1SubPoint6MaxValue = this.lenCount(this.recommendation1SubPoint6, this.recommendation1SubPoint6MaxValue, 574);
    if (this.recommendation1SubPoint4MaxValue === null && this.recommendation1SubPoint5MaxValue === null&& this.recommendation1SubPoint6MaxValue === null) {
      this.infocusRecommendationSaveParameter = 1;
    } else {
      this.infocusRecommendationSaveParameter = null;
      
    }
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
    if (this.recommendation1SubPoint4 != "" || this.recommendation1SubPoint4.length>1||this.recommendation1SubPoint4 != null) {
      this.infocusModel.recommendation1SubPoint4 = this.recommendation1SubPoint4;
    }else{
      this.infocusModel.recommendation1SubPoint4 = null;
    }
    if (this.recommendation1SubPoint5 != "" || this.recommendation1SubPoint5.length>1 || this.recommendation1SubPoint5 != null) {
      this.infocusModel.recommendation1SubPoint5 = this.recommendation1SubPoint5;
    }else{
      this.infocusModel.recommendation1SubPoint5 = null;
    }
    if ( this.recommendation1SubPoint6 != "" || this.recommendation1SubPoint6.length>1 || this.recommendation1SubPoint6 != null) {
      this.infocusModel.recommendation1SubPoint6 = this.recommendation1SubPoint6;
    }else{
      this.infocusModel.recommendation1SubPoint6 = null;
    }

    this.recommendationSaveStatus = "SUCCESSFULLY SAVED RECOMMENDATION";
  }
  businessPriority1Selected(value) {
    this.infocusModel.businessPriority1 = value;
    let randomValue = Math.random();
    this.infocusCoreService.getInfocusBusinessPriority2(this.infocusModel.role, this.infocusModel.industry, this.infocusModel.industrySegment1, this.infocusModel.industrySegment2, this.infocusModel.businessPriority1, randomValue)
      .subscribe(
        (response: Response) => {
          this.bP2 = response;
        }
      )
  }
  businessPriority2a(value) {
    console.log("From child componenet ", value);
    console.log("infocus Model data after child component ", this.infocusModel);
  }
  businessPriority2b(value) {
    console.log(value);
  }
  businessPriority2c(value) {
    console.log(value);
  }


  postInfocusReport() {
    this.infocusModel.templateType = 3;
    let temp = this.infocusCoreService.postInfocusReportDetails(this.infocusModel);
    temp.subscribe(
      (response: Response) => {
        console.log(response)
        this.id = response;
      }
    )
  }
  viewPDF() {
    window.open('http://'+myGlobals.server+':8787/api/viewinfocuspdf/' +this.id.id+ '.pdf')
    this.infocusCoreService.getInfocusPDFbyId(this.id)
      .subscribe(
        (response: Response) => {

        }
      )
  }
  lenCount(value: string, maxValueParameter,maxlen) {
    if (value.length > maxlen) {
      maxValueParameter = value.length;
    } else if (value.length <= maxlen) {
      maxValueParameter = null;
      console.log("the len is :",value.length)
    }
    return maxValueParameter;
  }
}
export class BusinessPriority2Model {
  public businessPriority2;

  constructor(businessPriority2) {
    this.businessPriority2 = businessPriority2;
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
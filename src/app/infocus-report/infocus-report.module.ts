import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfocusReportRoutingModule } from './infocus-report-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InfocusReportViewComponent } from './infocus-report-view/infocus-report-view.component';
import { InfocusReportRootComponent } from './infocus-report-root/infocus-report-root.component';
import {
  InfocusTemplateOneFourFiveFiveTwoComponent,
  KeysPipe
} from './infocus-template-one-four-five-five-two/infocus-template-one-four-five-five-two.component';
import { InfocusTemplateOneSolutionTwoCompaniesComponent } from './infocus-template-one-four-five-five-two/infocus-template-one-solution-two-companies/infocus-template-one-solution-two-companies.component';
import { InfocusReportRecommendationComponent } from './infocus-report-recommendation/infocus-report-recommendation.component';
import { InfocusTemplateOneFourThreeTwoTwoComponent } from './infocus-template-one-four-three-two-two/infocus-template-one-four-three-two-two.component';
import { InfocusTemplateTwoSolutionsTwoCompainesComponent } from './infocus-template-one-four-three-two-two/infocus-template-two-solutions-two-compaines/infocus-template-two-solutions-two-compaines.component';
import { InfocusTemplateOneThreeTwoThreeComponent } from './infocus-template-one-three-two-three/infocus-template-one-three-two-three.component';
import { InfocusTemplateOneThreeTwoTwoComponent } from './infocus-template-one-three-two-two/infocus-template-one-three-two-two.component';
import { InfocusTemplateTwoSolutionThreeCompaniesComponent } from './infocus-template-one-three-two-three/infocus-template-two-solution-three-companies/infocus-template-two-solution-three-companies.component';
import { InfocusTemplateOneThreeTwoTwoSolutionTwoCompaniesTwoComponent } from './infocus-template-one-three-two-two/infocus-template-one-three-two-two-solution-two-companies-two/infocus-template-one-three-two-two-solution-two-companies-two.component';
import { InfocusTemplateOneThreeTwoThreeBp2Component } from './infocus-template-one-three-two-three-bp2/infocus-template-one-three-two-three-bp2.component';
import { InfocusTemplateTwoSolutionThreeCompaniesBp2Component } from './infocus-template-one-three-two-three-bp2/infocus-template-two-solution-three-companies-bp2/infocus-template-two-solution-three-companies-bp2.component';
import { InfocusTemplateOneFourTwoTwoComponent } from './infocus-template-one-four-two-two/infocus-template-one-four-two-two.component';
import { InfocusTemplateOneFourTwoTwoSolutionTwoCompaniesTwoComponent } from './infocus-template-one-four-two-two/infocus-template-one-four-two-two-solution-two-companies-two/infocus-template-one-four-two-two-solution-two-companies-two.component';

@NgModule({
  imports: [CommonModule, SharedModule, InfocusReportRoutingModule],
  declarations: [
    InfocusReportViewComponent,
    InfocusReportRootComponent,
    InfocusTemplateOneFourFiveFiveTwoComponent,
    KeysPipe,
    InfocusTemplateOneSolutionTwoCompaniesComponent,
    InfocusReportRecommendationComponent,
    InfocusTemplateOneFourThreeTwoTwoComponent,
    InfocusTemplateTwoSolutionsTwoCompainesComponent,
    InfocusTemplateOneThreeTwoThreeComponent,
    InfocusTemplateOneThreeTwoTwoComponent,
    InfocusTemplateTwoSolutionThreeCompaniesComponent,
    InfocusTemplateOneThreeTwoTwoSolutionTwoCompaniesTwoComponent,
    InfocusTemplateOneThreeTwoThreeBp2Component,
    InfocusTemplateTwoSolutionThreeCompaniesBp2Component,
    InfocusTemplateOneFourTwoTwoComponent,
    InfocusTemplateOneFourTwoTwoSolutionTwoCompaniesTwoComponent
  ]
})
export class InfocusReportModule {}

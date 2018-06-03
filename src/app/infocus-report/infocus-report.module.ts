import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfocusReportRoutingModule } from './infocus-report-routing.module';
import { InfocusReportComponent } from './infocus-report.component';
import { SharedModule } from '../shared/shared.module';
import { InfocusReportViewComponent } from './infocus-report-view/infocus-report-view.component';
import { InfocusReportRootComponent } from './infocus-report-root/infocus-report-root.component';
import { InfocusTemplateOneComponent, KeysPipe } from './infocus-template-one/infocus-template-one.component';
import { InfocusTemplateOneSolutionCompaniesComponent } from './infocus-template-one/infocus-template-one-solution-companies/infocus-template-one-solution-companies.component';
import { InfocusReportRecommendationComponent } from './infocus-report-recommendation/infocus-report-recommendation.component';
import { InfocusTemplateOneFourThreeTwoTwoComponent } from './infocus-template-one-four-three-two-two/infocus-template-one-four-three-two-two.component';
import { InfocusTemplateTwoSolutionsTwoCompainesComponent } from './infocus-template-one-four-three-two-two/infocus-template-two-solutions-two-compaines/infocus-template-two-solutions-two-compaines.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InfocusReportRoutingModule
  ],
  declarations: [InfocusReportComponent, InfocusReportViewComponent, InfocusReportRootComponent, InfocusTemplateOneComponent, KeysPipe, InfocusTemplateOneSolutionCompaniesComponent, InfocusReportRecommendationComponent, InfocusTemplateOneFourThreeTwoTwoComponent, InfocusTemplateTwoSolutionsTwoCompainesComponent]
})
export class InfocusReportModule { }

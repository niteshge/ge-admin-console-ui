import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfocusReportComponent } from './infocus-report.component';
import { InfocusReportViewComponent } from './infocus-report-view/infocus-report-view.component';
import { InfocusReportRootComponent } from './infocus-report-root/infocus-report-root.component';
import { InfocusTemplateOneFourFiveFiveTwoComponent } from './infocus-template-one-four-five-five-two/infocus-template-one-four-five-five-two.component';
import { InfocusTemplateOneFourThreeTwoTwoComponent } from './infocus-template-one-four-three-two-two/infocus-template-one-four-three-two-two.component';

const routes: Routes = [{
  path: '',
  component: InfocusReportRootComponent,
  children: [
    {
      path: 'submit',
      component: InfocusReportComponent
    },
    {
      path: 'view',
      component: InfocusReportViewComponent
    },
    {
      path: 'templateone',
      component: InfocusTemplateOneFourFiveFiveTwoComponent
    },
    {
      path: 'template14322',
      component:InfocusTemplateOneFourThreeTwoTwoComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfocusReportRoutingModule { }

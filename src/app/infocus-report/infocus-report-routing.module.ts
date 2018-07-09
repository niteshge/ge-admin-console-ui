import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfocusReportViewComponent } from './infocus-report-view/infocus-report-view.component';
import { InfocusReportRootComponent } from './infocus-report-root/infocus-report-root.component';
import { InfocusTemplateOneFourFiveFiveTwoComponent } from './infocus-template-one-four-five-five-two/infocus-template-one-four-five-five-two.component';
import { InfocusTemplateOneFourThreeTwoTwoComponent } from './infocus-template-one-four-three-two-two/infocus-template-one-four-three-two-two.component';
import { InfocusTemplateOneThreeTwoThreeComponent } from './infocus-template-one-three-two-three/infocus-template-one-three-two-three.component';
import { InfocusTemplateOneThreeTwoTwoComponent } from './infocus-template-one-three-two-two/infocus-template-one-three-two-two.component';

const routes: Routes = [{
  path: '',
  component: InfocusReportRootComponent,
  children: [
    {
      path: 'view',
      component: InfocusReportViewComponent
    },
    {
      path: 'template14552',
      component: InfocusTemplateOneFourFiveFiveTwoComponent
    },
    {
      path: 'template14322',
      component:InfocusTemplateOneFourThreeTwoTwoComponent
    },
    {
      path: 'template1323',
      component:InfocusTemplateOneThreeTwoThreeComponent
    },
    {
      path: 'template1322',
      component:InfocusTemplateOneThreeTwoTwoComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfocusReportRoutingModule { }

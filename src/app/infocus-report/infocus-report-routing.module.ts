import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfocusReportComponent } from './infocus-report.component';
import { InfocusReportViewComponent } from './infocus-report-view/infocus-report-view.component';
import { InfocusReportRootComponent } from './infocus-report-root/infocus-report-root.component';
import { InfocusTemplateOneComponent } from './infocus-template-one/infocus-template-one.component';

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
      component: InfocusTemplateOneComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfocusReportRoutingModule { }

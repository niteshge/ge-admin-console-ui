import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfocusReportComponent } from './infocus-report.component';
import { InfocusReportViewComponent } from './infocus-report-view/infocus-report-view.component';
import { InfocusReportRootComponent } from './infocus-report-root/infocus-report-root.component';

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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfocusReportRoutingModule { }

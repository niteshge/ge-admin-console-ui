import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfocusReportComponent } from './infocus-report.component';

const routes: Routes = [{
  path : '',
  component: InfocusReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfocusReportRoutingModule { }

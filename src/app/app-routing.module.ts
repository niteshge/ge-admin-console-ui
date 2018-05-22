import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'infocus-report',
  loadChildren: './infocus-report/infocus-report.module#InfocusReportModule'
},
{
  path: 'infocus-view',
  loadChildren: './infocus-view/infocus-view.module#InfocusViewModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

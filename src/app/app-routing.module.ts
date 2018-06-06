import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: 'infocus-report',
  loadChildren: './infocus-report/infocus-report.module#InfocusReportModule'
},
{
  path: 'master-tables',
  loadChildren: './master-tables/master-tables.module#MasterTablesModule'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
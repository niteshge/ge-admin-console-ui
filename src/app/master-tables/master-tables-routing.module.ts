import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterTablesRootComponent } from './master-tables-root/master-tables-root.component';
import { BusinessSolutionComponent } from './business-solution/business-solution.component';

const routes: Routes = [{
  path: '',
  component: MasterTablesRootComponent,
  children: [{
    path: 'business-solutions',
    component: BusinessSolutionComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterTablesRoutingModule { }

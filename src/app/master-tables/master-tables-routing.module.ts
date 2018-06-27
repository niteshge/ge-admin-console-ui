import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterTablesRootComponent } from './master-tables-root/master-tables-root.component';
import { BusinessSolutionComponent } from './business-solution/business-solution.component';
import { HorizontalTechnologyComponent } from './horizontal-technology/horizontal-technology.component';
import { SubTechnologiesComponent } from './sub-technologies/sub-technologies.component';

const routes: Routes = [{
  path: '',
  component: MasterTablesRootComponent,
  children: [{
    path: 'business-solutions',
    component: BusinessSolutionComponent,
  },
  {
    path: 'horizontal-technology',
    component: HorizontalTechnologyComponent,
  },
{
  path: 'sub-technologies',
  component: SubTechnologiesComponent,
}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterTablesRoutingModule { }

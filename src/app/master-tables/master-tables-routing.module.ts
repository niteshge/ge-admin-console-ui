import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterTablesRootComponent } from './master-tables-root/master-tables-root.component';
import { BusinessSolutionComponent } from './business-solution/business-solution.component';
import { HorizontalTechnologyComponent } from './horizontal-technology/horizontal-technology.component';
import { SubTechnologiesComponent } from './sub-technologies/sub-technologies.component';
import { BusinessPriorityComponent } from './business-priority/business-priority.component';
import { SubBusinessPriorityComponent } from './sub-business-priority/sub-business-priority.component';
import { SolutionPriorityAssociationComponent } from './solution-priority-association/solution-priority-association.component';
import { IndustriesComponent } from './industries/industries.component';
import { SubIndustryComponent } from './sub-industry/sub-industry.component';
import { ConditionOneComponent } from './condition-one/condition-one.component';
import { ConditionTwoComponent } from './condition-two/condition-two.component';
import { ConditionThreeComponent } from './condition-three/condition-three.component';
import { ConditionFourComponent } from './condition-four/condition-four.component';

const routes: Routes = [
  {
    path: '',
    component: MasterTablesRootComponent,
    children: [
      {
        path: 'business-solutions',
        component: BusinessSolutionComponent
      },
      {
        path: 'horizontal-technology',
        component: HorizontalTechnologyComponent
      },
      {
        path: 'sub-technologies',
        component: SubTechnologiesComponent
      },
      {
        path: 'business-priorities',
        component: BusinessPriorityComponent
      },
      {
        path: 'sub-business-priorities',
        component: SubBusinessPriorityComponent
      },
      {
        path: 'solution-priority-association',
        component: SolutionPriorityAssociationComponent
      },
      {
        path: 'industries',
        component: IndustriesComponent
      },
      {
        path: 'sub-industries',
        component: SubIndustryComponent
      },
      {
        path: 'condition-one',
        component: ConditionOneComponent
      },
      {
        path: 'condition-two',
        component: ConditionTwoComponent
      },
      {
        path: 'condition-three',
        component: ConditionThreeComponent
      },
      {
        path: 'condition-four',
        component: ConditionFourComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterTablesRoutingModule {}

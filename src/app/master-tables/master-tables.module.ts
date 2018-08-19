import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterTablesRoutingModule } from './master-tables-routing.module';
import { BusinessSolutionComponent } from './business-solution/business-solution.component';
import { MasterTablesRootComponent } from './master-tables-root/master-tables-root.component';
import { SharedModule } from '../shared/shared.module';
import { HorizontalTechnologyComponent } from './horizontal-technology/horizontal-technology.component';
import { SubTechnologiesComponent } from './sub-technologies/sub-technologies.component';
import { BusinessSolutionEditComponent } from './business-solution/business-solution-edit/business-solution-edit.component';
import { BusinessSolutionCloneComponent } from './business-solution/business-solution-clone/business-solution-clone.component';
import { BusinessSolutionAddComponent } from './business-solution/business-solution-add/business-solution-add.component';
import { BusinessPriorityComponent } from './business-priority/business-priority.component';
import { SubBusinessPriorityComponent } from './sub-business-priority/sub-business-priority.component';
import { BusinessPriorityAddComponent } from './business-priority/business-priority-add/business-priority-add.component';
import { BusinessPriorityEditComponent } from './business-priority/business-priority-edit/business-priority-edit.component';
import { SolutionPriorityAssociationComponent } from './solution-priority-association/solution-priority-association.component';
import { SolutionPriorityAssociationAddComponent } from './solution-priority-association/solution-priority-association-add/solution-priority-association-add.component';
import { SolutionPriorityAssociationEditComponent } from './solution-priority-association/solution-priority-association-edit/solution-priority-association-edit.component';
import { SolutionPriorityAssociationDummySelectComponent } from './solution-priority-association/solution-priority-association-dummy-select/solution-priority-association-dummy-select.component';
import { IndustriesComponent } from './industries/industries.component';
import { SubIndustryComponent } from './sub-industry/sub-industry.component';
import { HorizontalTechnologyAddComponent } from './horizontal-technology/horizontal-technology-add/horizontal-technology-add.component';
import { HorizontalTechnologyEditComponent } from './horizontal-technology/horizontal-technology-edit/horizontal-technology-edit.component';
import { DynamicYesNoPopupComponent } from '../shared/dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { SubTechnologyTreeComponent } from './sub-technologies/sub-technology-tree/sub-technology-tree.component';
import { SubTechnologyTableEditComponent } from './sub-technologies/sub-technology-table-edit/sub-technology-table-edit.component';
import { SubTechnologyTableAddComponent } from './sub-technologies/sub-technology-table-add/sub-technology-table-add.component';
import { Condition1Component } from './condition1/condition1.component';
import { Condition2Component } from './condition2/condition2.component';
import { Condition3Component } from './condition3/condition3.component';
import { Condition4Component } from './condition4/condition4.component';

@NgModule({
  imports: [CommonModule, SharedModule, MasterTablesRoutingModule],
  declarations: [
    BusinessSolutionComponent,
    MasterTablesRootComponent,
    HorizontalTechnologyComponent,
    SubTechnologiesComponent,
    BusinessSolutionEditComponent,
    BusinessSolutionCloneComponent,
    BusinessSolutionAddComponent,
    BusinessPriorityComponent,
    SubBusinessPriorityComponent,
    BusinessPriorityAddComponent,
    BusinessPriorityEditComponent,
    SolutionPriorityAssociationComponent,
    SolutionPriorityAssociationAddComponent,
    SolutionPriorityAssociationEditComponent,
    SolutionPriorityAssociationDummySelectComponent,
    IndustriesComponent,
    SubIndustryComponent,
    HorizontalTechnologyAddComponent,
    HorizontalTechnologyEditComponent,
    SubTechnologyTreeComponent,
    SubTechnologyTableEditComponent,
    SubTechnologyTableAddComponent,
    Condition1Component,
    Condition2Component,
    Condition3Component,
    Condition4Component
  ],
  entryComponents: [
    BusinessSolutionEditComponent,
    BusinessSolutionCloneComponent,
    BusinessSolutionAddComponent,
    BusinessPriorityAddComponent,
    BusinessPriorityEditComponent,
    SolutionPriorityAssociationEditComponent,
    SolutionPriorityAssociationAddComponent,
    HorizontalTechnologyAddComponent,
    HorizontalTechnologyEditComponent,
    DynamicYesNoPopupComponent,
    SubTechnologyTableEditComponent,
    SubTechnologyTableAddComponent
  ]
})
export class MasterTablesModule {}

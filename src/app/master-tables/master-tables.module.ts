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
import { ConditionOneComponent } from './condition-one/condition-one.component';
import { ConditionTwoComponent } from './condition-two/condition-two.component';
import { ConditionThreeComponent } from './condition-three/condition-three.component';
import { ConditionFourComponent } from './condition-four/condition-four.component';
import { ConditionOneEditComponent } from './condition-one/condition-one-edit/condition-one-edit.component';
import { ConditionOneAddComponent } from './condition-one/condition-one-add/condition-one-add.component';
import { ConditionKeywordsComponent } from './condition-keywords/condition-keywords.component';
import { ConditionTwoEditComponent } from './condition-two/condition-two-edit/condition-two-edit.component';
import { ConditionTwoAddComponent } from './condition-two/condition-two-add/condition-two-add.component';
import { ConditionThreeAddComponent } from './condition-three/condition-three-add/condition-three-add.component';
import { ConditionThreeEditComponent } from './condition-three/condition-three-edit/condition-three-edit.component';
import { ConditionFourEditComponent } from './condition-four/condition-four-edit/condition-four-edit.component';
import { ConditionFourAddComponent } from './condition-four/condition-four-add/condition-four-add.component';
import { SubIndustryTableAddComponent } from './sub-industry/sub-industry-table-add/sub-industry-table-add.component';
import { SubIndustryTableEditComponent } from './sub-industry/sub-industry-table-edit/sub-industry-table-edit.component';
import { BusinessTractionComponent } from './business-traction/business-traction.component';
import { IndustryServingDisruptionComponent } from './industry-serving-disruption/industry-serving-disruption.component';

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
    ConditionOneComponent,
    ConditionTwoComponent,
    ConditionThreeComponent,
    ConditionFourComponent,
    ConditionOneEditComponent,
    ConditionOneAddComponent,
    ConditionKeywordsComponent,
    ConditionTwoEditComponent,
    ConditionTwoAddComponent,
    ConditionThreeAddComponent,
    ConditionThreeEditComponent,
    ConditionFourEditComponent,
    ConditionFourAddComponent,
    SubIndustryTableAddComponent,
    SubIndustryTableEditComponent,
    BusinessTractionComponent,
    IndustryServingDisruptionComponent,
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
    SubTechnologyTableAddComponent,
    ConditionOneEditComponent,
    ConditionOneAddComponent,
    ConditionTwoEditComponent,
    ConditionTwoAddComponent,
    ConditionThreeEditComponent,
    ConditionThreeAddComponent,
    ConditionFourEditComponent,
    ConditionFourAddComponent
  ]
})
export class MasterTablesModule {}

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

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MasterTablesRoutingModule
  ],
  declarations: [BusinessSolutionComponent, MasterTablesRootComponent, HorizontalTechnologyComponent, SubTechnologiesComponent, BusinessSolutionEditComponent, BusinessSolutionCloneComponent, BusinessSolutionAddComponent],
  entryComponents:[BusinessSolutionEditComponent,
  BusinessSolutionCloneComponent,
  BusinessSolutionAddComponent]
})
export class MasterTablesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterTablesRoutingModule } from './master-tables-routing.module';
import { BusinessSolutionComponent } from './business-solution/business-solution.component';
import { MasterTablesRootComponent } from './master-tables-root/master-tables-root.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MasterTablesRoutingModule
  ],
  declarations: [BusinessSolutionComponent, MasterTablesRootComponent]
})
export class MasterTablesModule { }

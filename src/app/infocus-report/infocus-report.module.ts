import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfocusReportRoutingModule } from './infocus-report-routing.module';
import { InfocusReportComponent } from './infocus-report.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InfocusReportRoutingModule
  ],
  declarations: [InfocusReportComponent]
})
export class InfocusReportModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfocusReportRoutingModule } from './infocus-report-routing.module';
import { InfocusReportComponent } from './infocus-report.component';
import { SharedModule } from '../shared/shared.module';
import { InfocusReportViewComponent } from './infocus-report-view/infocus-report-view.component';
import { InfocusReportRootComponent } from './infocus-report-root/infocus-report-root.component';
import { InfocusTemplateOneComponent } from './infocus-template-one/infocus-template-one.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InfocusReportRoutingModule
  ],
  declarations: [InfocusReportComponent, InfocusReportViewComponent, InfocusReportRootComponent, InfocusTemplateOneComponent]
})
export class InfocusReportModule { }

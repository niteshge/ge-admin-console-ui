import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, 
  MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatListModule, MatAutocompleteModule, MatInputModule, MatExpansionModule, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatTableModule, MatCardModule, MatRadioModule,MatPaginatorModule,MatSortModule,
   MatSelectModule,
  MatDialogModule,
MatButtonToggleModule,
MatTabsModule,
MatAccordion,
MatGridListModule} from '@angular/material';
import { DynamicSelectComponent } from './dynamic-select/dynamic-select.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table'
import { DynamicTablesComponent } from './dynamic-tables/dynamic-tables.component';
import { DynamicReportPopupComponent } from './dynamic-report-popup/dynamic-report-popup.component';
import { DynamicYesNoPopupComponent } from './dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { DynamicTablePopupComponent } from './dynamic-table-popup/dynamic-table-popup.component';
import { DynamicTableEditComponent, KeysPipesModule } from './dynamic-table-edit/dynamic-table-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
     MatCheckboxModule,
     MatFormFieldModule,
     MatAutocompleteModule,
     FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    CdkTableModule,
    MatCardModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatGridListModule
  ],
  declarations: [DynamicSelectComponent, DynamicTablesComponent, DynamicReportPopupComponent, DynamicYesNoPopupComponent, DynamicTablePopupComponent, DynamicTableEditComponent, KeysPipesModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, HttpClientModule, FormsModule,
    ReactiveFormsModule,DynamicSelectComponent, MatInputModule,MatExpansionPanel,MatExpansionPanelHeader,MatExpansionPanelTitle, DynamicTablesComponent,
  MatTableModule, CdkTableModule,MatCardModule,MatRadioModule, MatPaginatorModule,MatSortModule,MatSelectModule,
  MatListModule, MatDialogModule, DynamicReportPopupComponent,MatTabsModule, MatAccordion,MatGridListModule],
  entryComponents: [
    DynamicReportPopupComponent,
    DynamicYesNoPopupComponent,
    DynamicTablePopupComponent,
    DynamicTableEditComponent
]
})
export class SharedModule { }

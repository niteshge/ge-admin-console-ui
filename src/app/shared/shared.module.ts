import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as _ from 'lodash';
import {MatButtonModule, 
  MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatListModule, MatAutocompleteModule, MatInputModule, MatExpansionModule, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatTableModule, MatCardModule, MatRadioModule,MatPaginatorModule,MatSortModule,
   MatSelectModule,
  MatDialogModule,
MatButtonToggleModule,
MatTabsModule,
MatAccordion,
MatGridListModule,
MatTreeModule,
MatBadgeModule,
MatBottomSheetModule,
MatChipsModule,
MatDatepickerModule,
MatDividerModule,
MatNativeDateModule,
MatProgressBarModule,
MatProgressSpinnerModule,
MatRippleModule,
MatSidenavModule,
MatSliderModule,
MatSlideToggleModule,
MatSnackBarModule,
MatTooltipModule} from '@angular/material';
import { DynamicSelectComponent } from './dynamic-select/dynamic-select.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table'
import { DynamicTablesComponent } from './dynamic-tables/dynamic-tables.component';
import { DynamicReportPopupComponent } from './dynamic-report-popup/dynamic-report-popup.component';
import { DynamicYesNoPopupComponent } from './dynamic-yes-no-popup/dynamic-yes-no-popup.component';
import { DynamicTablePopupComponent } from './dynamic-table-popup/dynamic-table-popup.component';
import { DynamicTableEditComponent, KeysPipesModule } from './dynamic-table-edit/dynamic-table-edit.component';
import { DynamicBusinessSolutionClonePopupComponent } from './dynamic-business-solution-clone-popup/dynamic-business-solution-clone-popup.component';
import { DynamicTableAddComponent } from './dynamic-table-add/dynamic-table-add.component';
import { DynamicUiTreeComponent } from './dynamic-ui-tree/dynamic-ui-tree.component';
import { TreeStructureComponent } from './tree-structure/tree-structure.component';

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
    MatGridListModule,
    MatTreeModule,
    MatIconModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [DynamicSelectComponent, DynamicTablesComponent, DynamicReportPopupComponent, DynamicYesNoPopupComponent, DynamicTablePopupComponent, DynamicTableEditComponent, KeysPipesModule, DynamicBusinessSolutionClonePopupComponent, DynamicBusinessSolutionClonePopupComponent, DynamicTableAddComponent, DynamicUiTreeComponent, TreeStructureComponent],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, HttpClientModule, FormsModule,
    ReactiveFormsModule,DynamicSelectComponent, MatInputModule,MatExpansionPanel,MatExpansionPanelHeader,MatExpansionPanelTitle, DynamicTablesComponent,
  MatTableModule, CdkTableModule,MatCardModule,MatRadioModule, MatPaginatorModule,MatSortModule,MatSelectModule,
  MatListModule, MatDialogModule, DynamicReportPopupComponent,MatTabsModule, MatAccordion,MatGridListModule, MatTreeModule,DynamicUiTreeComponent,
  MatBadgeModule,
  MatBottomSheetModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTooltipModule,
  TreeStructureComponent],
  entryComponents: [
    DynamicReportPopupComponent,
    DynamicYesNoPopupComponent,
    DynamicTablePopupComponent,
    DynamicTableEditComponent,
    DynamicBusinessSolutionClonePopupComponent,
    DynamicTableAddComponent
]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatExpansionModule, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatTableModule, MatCardModule, MatRadioModule} from '@angular/material';
import { DynamicSelectComponent } from './dynamic-select/dynamic-select.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table'
import { DynamicTablesComponent } from './dynamic-tables/dynamic-tables.component';

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
    MatRadioModule
  ],
  declarations: [DynamicSelectComponent, DynamicTablesComponent],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, HttpClientModule, FormsModule,
    ReactiveFormsModule,DynamicSelectComponent, MatInputModule,MatExpansionPanel,MatExpansionPanelHeader,MatExpansionPanelTitle, DynamicTablesComponent,
  MatTableModule, CdkTableModule,MatCardModule,MatRadioModule]
})
export class SharedModule { }

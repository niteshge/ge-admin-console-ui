import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule} from '@angular/material';
import { DynamicSelectComponent } from './dynamic-select/dynamic-select.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
  ],
  declarations: [DynamicSelectComponent],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, HttpClientModule, FormsModule,
    ReactiveFormsModule,DynamicSelectComponent, MatInputModule]
})
export class SharedModule { }

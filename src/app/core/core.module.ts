import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MatMenuModule, MatToolbarModule, MatButtonModule } from '../../../node_modules/@angular/material';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, MatMenuModule, MatToolbarModule, MatButtonModule],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class CoreModule {}

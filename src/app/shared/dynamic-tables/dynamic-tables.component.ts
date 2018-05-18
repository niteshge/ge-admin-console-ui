import { Component, OnInit, ViewChild } from '@angular/core';
import {Element, ELEMENT_DATA} from '../element-data';
import {CdkTable} from '@angular/cdk/table';
import {MatRadioChange, MatTable, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';

export type TrackByStrategy = 'position' | 'reference' | 'index';

@Component({
  selector: 'app-dynamic-tables',
  templateUrl: './dynamic-tables.component.html',
  styleUrls: ['./dynamic-tables.component.css']
})
export class DynamicTablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  json:any[] = [{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}];

  // inputType: 'source' | 'stream' | 'array' | null = 'array';
  data = this.json.slice();
  
  matTableDataSource = new MatTableDataSource(this.data);

  trackByStrategy: TrackByStrategy = 'reference';
  trackBy = (index: number, item: Element) => {
    switch (this.trackByStrategy) {
      case 'position': return item.position;
      case 'reference': return item;
      case 'index': return index;
    }
  }

  dataSource: DataSource<Element> | Observable<Element[]> | Element[] | null = this.data;

  onClickTest(value){
    console.log(value);
    console.log(this.data);
  }

  // @ViewChild(CdkTable) cdkTable: CdkTable<Element>;
  // @ViewChild(MatTable) matTable: MatTable<Element>;

  // changeInput(e: MatRadioChange) {
  //   this.inputType = e.value;
  //   switch (this.inputType) {
  //     case 'array': this.dataSource = this.data; break;
  //     case 'stream': this.dataSource = this.matTableDataSource.connect(); break;
  //     case 'source': this.dataSource = this.matTableDataSource; break;
  //   }
  // }

  // addRow() {
  //   this.data.push({
  //     name: 'new',
  //     weight: Math.floor(Math.random() * 25),
  //     symbol: 'New',
  //     position: Math.floor(Math.random() * 25)
  //   });

  //   this.matTableDataSource.data = this.data;
  // }

  // shuffle() {
  //   let dataToShuffle = this.data.slice();
  //   let currentIndex = dataToShuffle.length;
  //   while (0 !== currentIndex) {
  //     let randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // Swap
  //     let temp = dataToShuffle[currentIndex];
  //     dataToShuffle[currentIndex] = dataToShuffle[randomIndex];
  //     dataToShuffle[randomIndex] = temp;
  //   }

  //   this.data = dataToShuffle;
  //   this.matTableDataSource.data = dataToShuffle;
  // }

  // removeRow() {
  //   this.data.pop();
  //   this.matTableDataSource.data = this.data;
  // }

  // reassignDataClone() {
  //   this.data = this.data.slice();

  //   if (this.dataSource instanceof Array) {
  //     this.dataSource = this.data;
  //   }
  //   this.matTableDataSource.data = this.data;
  // }

  // renderRows() {
  //   this.cdkTable.renderRows();
  //   this.matTable.renderRows();
  // }

  // removeDataSource() {
  //   this.dataSource = null;
  //   this.inputType = null;
  // }

  // highlightFirstRow() {
  //   document.querySelector('table tbody tr')!.setAttribute('style', 'background: red');
  // }
}

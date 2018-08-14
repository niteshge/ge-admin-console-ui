import { Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Element, ELEMENT_DATA } from '../element-data';
import { CdkTable } from '@angular/cdk/table';
import { MatRadioChange, MatTable, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { filter } from '../../../../node_modules/rxjs/operators';

export type TrackByStrategy = 'position' | 'reference' | 'index';

@Component({
  selector: 'app-dynamic-tables',
  templateUrl: './dynamic-tables.component.html',
  styleUrls: ['./dynamic-tables.component.css']
})
export class DynamicTablesComponent implements OnInit, OnChanges, AfterViewInit {


 
  @Input() jsonData = [];
  // @Input() columnDefination:string[] = [];
  @Output() rowSelected = new EventEmitter();

  constructor() { }


  // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay = [];
  // json:any[] = [{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'}];


  data;
  dataSource = new MatTableDataSource<Element>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  


  ngOnInit() {
    this.data = this.jsonData.slice();
    this.dataSource = new MatTableDataSource<Element>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    

    for (let i = 0; i < 1; i++) {
      console.log("object:", this.jsonData[i]);
      for (let key in this.jsonData[i]) {
        console.log("      key:", key, "value:", this.jsonData[key]);
        this.columnsToDisplay.push(key)
      }
    }
  }
  ngOnChanges(changes: SimpleChanges) {
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onRowSelected(event) {
    this.rowSelected.emit(event);
  }

  ngAfterViewInit(): void {
  }

}

import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  Pipe,
  PipeTransform
} from '@angular/core';
import { Element, ELEMENT_DATA } from '../element-data';
import { CdkTable } from '@angular/cdk/table';
import {
  MatRadioChange,
  MatTable,
  MatTableDataSource,
  MatPaginator,
  MatSort
} from '@angular/material';
import { Observable } from 'rxjs';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { filter } from '../../../../node_modules/rxjs/operators';
import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';

export type TrackByStrategy = 'position' | 'reference' | 'index';

@Component({
  selector: 'app-dynamic-tables',
  templateUrl: './dynamic-tables.component.html',
  styleUrls: ['./dynamic-tables.component.css']
})
export class DynamicTablesComponent
  implements OnInit, OnChanges, AfterViewInit {
  @Input()
  jsonData = [];
  // @Input() columnDefination:string[] = [];
  @Output()
  rowSelected = new EventEmitter();

  constructor(public datepipe: DatePipe) {}

  // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay = [];
  customToFilter = [];
  // json:any[] = [{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'}];

  data;
  columnFilterName: string = null;
  dataSource = new MatTableDataSource<Element>();
  
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  ngOnInit() {
    for(let i = 0; i<this.jsonData.length ; i++){
        //  this.jsonData[i]['CREATED TIMESTAMP'] = new Date(this.jsonData[i]['CREATED TIMESTAMP']);
        //  this.jsonData[i]['CREATED TIMESTAMP'] = new Date(this.jsonData[i]['CREATED TIMESTAMP']).toLocaleDateString();
        //  this.jsonData[i]['CREATED TIMESTAMP'] = new Date(this.jsonData[i]['CREATED TIMESTAMP'])..toLocaleTimeString();
         this.jsonData[i]['CREATED TIMESTAMP'] = this.datepipe.transform(this.jsonData[i]['CREATED TIMESTAMP'], 'yyyy-MM-dd HH:mm:ss');
        //  this.jsonData[i]['MODIFIED TIMESTAMP'] = new Date(this.jsonData[i]['MODIFIED TIMESTAMP']);
         this.jsonData[i]['MODIFIED TIMESTAMP'] = this.datepipe.transform(this.jsonData[i]['MODIFIED TIMESTAMP'], 'yyyy-MM-dd HH:mm:ss');
    }
    for (let i = 0; i < 1; i++) {
      console.log('object:', this.jsonData[i]);
      for (let key in this.jsonData[i]) {
        console.log('      key:', key, 'value:', this.jsonData[i][key]);
        
        this.columnsToDisplay.push(key);
        if(key!=='ID'){
          this.customToFilter.push(key);
        }

      }
    }
    this.data = this.jsonData.slice();
    this.dataSource = new MatTableDataSource<Element>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnChanges(changes: SimpleChanges) {}

  applyFilter(filterValue: string) {
    // this.dataSource.filterPredicate = (data, filter) => {
    //   return JSON.stringify(data).includes(filter);
    // }
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyCustomFilter(filterValue: string) {
    let filterColumn = this.columnFilterName;
    console.log('THE FILTERING COLUMN IS ', filterColumn);
    
    this.dataSource.filterPredicate = (data: Element, filter: string) =>
    JSON.stringify((data[filterColumn] || '').trim().toLowerCase()).indexOf(filter) != -1;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log("THE COLUMN VALUE IS :",this.data[filterColumn] );
  }

  onRowSelected(event) {
    this.rowSelected.emit(event);
  }

  ngAfterViewInit(): void {}

  onSelectColumnFilterName(value) {
    console.log('THE SELECT COLUMN FOR THE FILTER IS ', value);
    this.columnFilterName = value;
    this.dataSource =new MatTableDataSource<Element>(this.data);
  }
}
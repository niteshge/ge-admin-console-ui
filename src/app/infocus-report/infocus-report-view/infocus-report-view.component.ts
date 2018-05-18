import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { InfocusReportService } from '../../core/infocus-report.service';
import { Observable } from 'rxjs';
import { InfocusMeta } from './infocus-report-view.model';

@Component({
  selector: 'app-infocus-report-view',
  templateUrl: './infocus-report-view.component.html',
  styleUrls: ['./infocus-report-view.component.css']
})
export class InfocusReportViewComponent implements OnInit {
dataSource = new InfocusMetaDataSource(this.infocusService);
displayedColumns = ['id','created_at','created_by','infocus_report_title','report_id','status']
  constructor(private infocusService:InfocusReportService) { }

  ngOnInit() {
  }

  getPDFView(value){
    console.log("pdf view",value)
  }
  deleteReport(value){
    console.log("report deleted",value)
  }
  publishReport(value){
    console.log("Pulbishing report",value)
  }

}
export class InfocusMetaDataSource extends DataSource<any>{
  constructor(private infocusService: InfocusReportService) {
    super();
  }
  connect(): Observable<InfocusMeta[]> {
    return this.infocusService.getAllInfocusMeta();
  }
  disconnect() {}
}
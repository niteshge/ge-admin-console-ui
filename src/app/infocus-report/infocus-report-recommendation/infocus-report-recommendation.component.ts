import { Component, OnInit, Input } from '@angular/core';
import { InfocusReportModel } from '../infocus-report.model';
import { InfocusReportService } from '../../core/infocus-report.service';

@Component({
  selector: 'app-infocus-report-recommendation',
  templateUrl: './infocus-report-recommendation.component.html',
  styleUrls: ['./infocus-report-recommendation.component.css']
})
export class InfocusReportRecommendationComponent implements OnInit {
  @Input() infocusModel: InfocusReportModel;
  @Input() totalRecommendations:number;
  listOfRecommendations:string[];
  constructor(private infocusCoreService: InfocusReportService) { }

  ngOnInit() {
    console.log("The total number of recommendations is",this.totalRecommendations)
    if(this.totalRecommendations!=null){
      this.getRecommendationPlaceHolders(this.totalRecommendations);
    }
  }

  getRecommendationPlaceHolders(totalRecommendations){
    if(totalRecommendations=='1'){
      this.listOfRecommendations = ["RECOMMENDATION 1"]
    }else if(totalRecommendations == '2'){
      this.listOfRecommendations = ["RECOMMENDATION 1", "RECOMMENDATION 2"]
    }
  }


}

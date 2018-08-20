import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getAllIndustriesNames(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/getindustries?ver='+randomValue);
  }
  getIndustriesSubSegment(industryName:string,randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/getsubindustries?industryName='+industryName+'&ver='+randomValue);
  }
  getSubSegmentBusinessPriorityByBusinessPriorityName(businessPriorityName:string,randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/getsubbusinesspriority?businesspriorityname='+businessPriorityName+'&ver='+randomValue);
  }
  getAllBusinessPrioritiesNames(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/getbusinesspriorities?ver='+randomValue);
  }
  getAllBusinessSolution(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/getallbusinesssolutionsearchtext?ver='+randomValue);
  }
  getAllRevenueModel(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/getrevenuemodel?ver='+randomValue);
  }
  getTechnologyNameById(id:number, randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/gettechnologynamebyid?id='+id+'&ver='+randomValue);
  }
}

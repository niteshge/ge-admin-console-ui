import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient, private auth: AuthService) { }
  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  getAllIndustriesNames(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/getindustries?ver='+randomValue,{'params':this.httpParams});
  }
  getIndustriesSubSegment(industryName:string,randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/getsubindustries?industryName='+industryName+'&ver='+randomValue,{'params':this.httpParams});
  }
  getSubSegmentBusinessPriorityByBusinessPriorityName(businessPriorityName:string,randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/getsubbusinesspriority?businesspriorityname='+businessPriorityName+'&ver='+randomValue,{'params':this.httpParams});
  }
  getAllBusinessPrioritiesNames(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/getbusinesspriorities?ver='+randomValue,{'params':this.httpParams});
  }
  getAllBusinessSolution(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/getallbusinesssolutionsearchtext?ver='+randomValue,{'params':this.httpParams});
  }

  getAllBusinessSolutionByTech(randomValue:Number,technology:string){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/getallbusinesssolutionsearchtextbytechnology?ver='+randomValue+'&technology='+technology,{'params':this.httpParams});
  }
  getAllRevenueModel(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/getrevenuemodel?ver='+randomValue,{'params':this.httpParams});
  }
  getTechnologyNameById(id:number, randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/gethorizontalbyid?id='+id+'&ver='+randomValue,{'params':this.httpParams});
  }
}

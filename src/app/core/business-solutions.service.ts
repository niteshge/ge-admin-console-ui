import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import * as myGlobals from '../app-globals';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessSolutionsService{
 options = null;
 
 httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  constructor(private http: HttpClient, private auth: AuthService) {
    
   }
  //  ngOnInit() {
  //   let headers: HttpHeaders = new HttpHeaders();
  //     headers.append('Authorisation','Token ' + sessionStorage.getItem('currentUser'))
  //     console.log("The token id is : ",sessionStorage.getItem('currentUser'));
  // let options = { headers:headers };
  //  }


  getAllBusinessSolutons(randomValue:number) {
    
    console.log("The header is ",this.options);
    let url = 'http://'+myGlobals.server+':8787/api/mastertables/getallbusinesssolutions?randomValue='+randomValue;
    // let url = 'http://'+myGlobals.server+':8787/rest/hello?randomValue='+randomValue;
    return this.http.get(url,{'params':this.httpParams});
  }
  updateBusinessSolution(businessSolutions) {
    // return this.http.post('http://'+myGlobals.server+':8787/mastertables/updatebusinesssolutions', businessSolutions, {
    //   headers: {
    //     'Content-Type': 'application/json; charset=UTF-8',
    //     'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    //   }
    // });
    return this.http.post('http://'+myGlobals.server+':8787/api/mastertables/updatebusinesssolutions', businessSolutions, {'params':this.httpParams});
  }
  saveBusinessSolutions(businessSolutions, randomValue){
    return this.http.post('http://'+myGlobals.server+':8787/api/mastertables/savebusinesssolutions',businessSolutions,{'params':this.httpParams});
  }
  
  deleteBusinessSolutions(id, randomValue){
    return this.http.delete('http://'+myGlobals.server+':8787/api/mastertables/deletebusinesssolutions/'+id, {'params':this.httpParams});
  }
  getTechnologies(randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/gettechnologies?ver='+randomValue, {'params':this.httpParams});
  }
  getTechnologiesSubSegment(technologyName:string,randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/gettechsubsegment?technologyName='+encodeURIComponent(technologyName)+'&ver='+randomValue, {'params':this.httpParams});
  }
  getIndustries(randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/getindustries?ver='+randomValue, {'params':this.httpParams});
  }

  getIndustriesSubSegment(industryName:string,randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/getsubindustries?industryName='+encodeURIComponent(industryName)+'&ver='+randomValue, {'params':this.httpParams});
  }

  checkBusinessSolutionExistsInSolutionPriorityAssociation(businessSolutionName:string, action:number, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/checkbusinessssolutioninsolutionpriorityassocexistence?businessSolutionName='+encodeURIComponent(businessSolutionName)+'&action='+action+'&ver='+randomValue, {'params':this.httpParams});
  }

}

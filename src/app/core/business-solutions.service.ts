import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class BusinessSolutionsService {

  constructor(private http: HttpClient) { }

  getAllBusinessSolutons() {
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/businesssolutions');
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
    return this.http.post('http://'+myGlobals.server+':8787/mastertables/updatebusinesssolutions', businessSolutions);
  }
  saveBusinessSolutions(businessSolutions, randomValue){
    return this.http.post('http://'+myGlobals.server+':8787/mastertables/savebusinesssolutions',businessSolutions);
  }
  
  deleteBusinessSolutions(id, randomValue){
    return this.http.delete('http://'+myGlobals.server+':8787/mastertables/deletebusinesssolutions/'+id);
  }
  getTechnologies(randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/gettechnologies?ver='+randomValue);
  }
  getTechnologiesSubSegment(technologyName:string,randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/gettechsubsegment?technologyName='+technologyName+'&ver='+randomValue);
  }
  getIndustries(randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/getindustries?ver='+randomValue);
  }

  getIndustriesSubSegment(industryName:string,randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/getsubindustries?industryName='+industryName+'&ver='+randomValue);
  }

}

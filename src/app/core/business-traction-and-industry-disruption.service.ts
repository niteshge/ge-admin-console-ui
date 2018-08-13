import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class BusinessTractionAndIndustryDisruptionService {

  constructor(private http: HttpClient) { }

  getAllBusinessTractionAndIndustrySegDisruption(technologyId:number, technologySegmentId:number, randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/businesstractionandindustrydisruption/getbusinesstractionandindustrysegdisruptionbytechidndsegid?technologyId='+technologyId+'&technologySegmentId='+technologySegmentId+'&ver='+randomValue);
  }

  updateBusinessTractionAndIndustrySegDisruption(businessTractionIndustryDisruption:any) {
    return this.http.post('http://'+myGlobals.server+':8787/businesstractionandindustrydisruption/updatebusinesstractionandindustrysegdisruptionbytechidndsegid',businessTractionIndustryDisruption);
  }

  addBusinessTractionAndIndustrySegDisruption(businessTractionIndustryDisruption:any) {
    return this.http.post('http://'+myGlobals.server+':8787/businesstractionandindustrydisruption/addbusinesstractionandindustrysegdisruptionbytechidndsegid',businessTractionIndustryDisruption);
  }
  deleteBusinessTractionAndIndustrySegDisruption(technologyId:number, technologySegmentId:number, randomValue:number) {
    return this.http.delete('http://'+myGlobals.server+':8787/businesstractionandindustrydisruption/deletebusinesstractionndindustrysegdisription?technologyId='+technologyId+'&technologySegmentId='+technologySegmentId+'&ver='+randomValue);
  }
 
}

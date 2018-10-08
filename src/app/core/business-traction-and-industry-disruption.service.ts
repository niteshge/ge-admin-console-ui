import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessTractionAndIndustryDisruptionService {

  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllBusinessTractionAndIndustrySegDisruption(technologyId:number, technologySegmentId:number, randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/api/businesstractionandindustrydisruption/getbusinesstractionandindustrysegdisruptionbytechidndsegid?technologyId='+technologyId+'&technologySegmentId='+technologySegmentId+'&ver='+randomValue, {'params':this.httpParams});
  }

  updateBusinessTractionAndIndustrySegDisruption(businessTractionIndustryDisruption:any) {
    return this.http.post('http://'+myGlobals.server+':8787/api/businesstractionandindustrydisruption/updatebusinesstractionandindustrysegdisruptionbytechidndsegid',businessTractionIndustryDisruption, {'params':this.httpParams});
  }

  addBusinessTractionAndIndustrySegDisruption(businessTractionIndustryDisruption:any) {
    return this.http.post('http://'+myGlobals.server+':8787/api/businesstractionandindustrydisruption/addbusinesstractionandindustrysegdisruptionbytechidndsegid',businessTractionIndustryDisruption, {'params':this.httpParams});
  }
  deleteBusinessTractionAndIndustrySegDisruption(technologyId:number, technologySegmentId:number, randomValue:number) {
    return this.http.delete('http://'+myGlobals.server+':8787/api/businesstractionandindustrydisruption/deletebusinesstractionndindustrysegdisription?technologyId='+technologyId+'&technologySegmentId='+technologySegmentId+'&ver='+randomValue,{'params':this.httpParams});
  }
 
}

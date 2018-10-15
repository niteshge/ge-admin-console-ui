import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { BusinessPriorityMaster } from '../master-tables/business-priority/business-priority.component';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessPriorityService {

  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  constructor(private http: HttpClient,  private auth: AuthService) { }

  getAllBusinessPriorityMaster(randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/api/businesspriority/getallbusinesspriorityfrommaster?ver='+randomValue,{'params':this.httpParams});
  }
  updateBusinessPriorityMaster(businessPriorityMaster:BusinessPriorityMaster){
    return this.http.post('http://'+myGlobals.server+':8787/api/businesspriority/updatebusinessprioritymaster',businessPriorityMaster, {'params':this.httpParams});
  }
  saveBusinessPriorityMaster(businessPriorityMaster:BusinessPriorityMaster){
    return this.http.post('http://'+myGlobals.server+':8787/api/businesspriority/savebusinespriority',businessPriorityMaster, {'params':this.httpParams})
  }
deleteBusinessPriorityMaster(id:number){
  return this.http.delete('http://'+myGlobals.server+':8787/api/businesspriority/deletebusinesspriority/'+id, {'params':this.httpParams});
}
checkBusinessPriorityExistInSolutionPriorityAssoc(
  businessPriorityName: string,
  action: number,
  randomValue: number
) {
  return this.http.get(
    'http://' +
      myGlobals.server +
      ':8787/api/businesspriority/checkbusinessprirityinsolutionpriorityassocexistence?businessPriorityName=' +
      encodeURIComponent(businessPriorityName) +
      '&action=' +
      action +
      '&randomValue=' +
      randomValue, {'params':this.httpParams}
  );
}

}

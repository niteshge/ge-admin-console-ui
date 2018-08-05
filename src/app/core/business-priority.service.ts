import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { BusinessPriorityMaster } from '../master-tables/business-priority/business-priority.component';

@Injectable({
  providedIn: 'root'
})
export class BusinessPriorityService {

  constructor(private http: HttpClient) { }

  getAllBusinessPriorityMaster(randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/businesspriority/getallbusinesspriorityfrommaster?ver='+randomValue);
  }
  updateBusinessPriorityMaster(businessPriorityMaster:BusinessPriorityMaster){
    return this.http.post('http://'+myGlobals.server+':8787/businesspriority/updatebusinessprioritymaster',businessPriorityMaster);
  }
  saveBusinessPriorityMaster(businessPriorityMaster:BusinessPriorityMaster){
    return this.http.post('http://'+myGlobals.server+':8787/businesspriority/savebusinespriority',businessPriorityMaster)
  }
deleteBusinessPriorityMaster(id:number){
  return this.http.delete('http://'+myGlobals.server+':8787/businesspriority/deletebusinesspriority/'+id);
}
checkBusinessPriorityExistInSolutionPriorityAssoc(
  businessPriorityName: string,
  action: number,
  randomValue: number
) {
  return this.http.get(
    'http://' +
      myGlobals.server +
      ':8787/businesspriority/checkbusinessprirityinsolutionpriorityassocexistence?businessPriorityName=' +
      businessPriorityName +
      '&action=' +
      action +
      '&randomValue=' +
      randomValue
  );
}

}

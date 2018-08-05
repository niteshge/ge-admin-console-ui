import { Injectable } from '@angular/core';
import * as myGlobals from '../app-globals';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubBusinessProrityService {

  constructor(private http: HttpClient) { }

  getBusinessPrioritySubSegmentMarketMap(randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/businessprioritysubsegment/fetchbpsubmarketmap?ver='+randomValue);
  }
  addBusinessPrioritySubSegmentMarketMap(node:any){
    return this.http.post('http://'+myGlobals.server+':8787/businessprioritysubsegment/addbpsubmarketmap',node);
  }
  deleteBusinessPrioritySubSegmentMarketMap(id:number){
    return this.http.delete('http://'+myGlobals.server+':8787/businessprioritysubsegment/deletebpsubmarketmap/'+id);
  }
  updateBusinessPrioriytySubSegmentMarketMap(node:any){
    return this.http.post('http://'+myGlobals.server+':8787/businessprioritysubsegment/updatebpsubmarketmap',node);
  }

  checkBusinessPrioritySubSegmentExistInSolutionPriorityAssoc(
    businessPriorityOldSubSegmentId: number,
    businessPriorityId: number,
    action: number,
    randomValue: number
  ) {
    return this.http.get(
      'http://' +
        myGlobals.server +
        ':8787/businessprioritysubsegment/checkbusinessprioritysubsegmentexistence?businessPriorityOldSubSegmentId=' +
        businessPriorityOldSubSegmentId +
        '&businessPriorityId=' +
        businessPriorityId +
        '&action=' +
        action +
        '&randomValue=' +
        randomValue
    );
  }
}
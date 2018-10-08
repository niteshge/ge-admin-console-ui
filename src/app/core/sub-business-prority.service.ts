import { Injectable } from '@angular/core';
import * as myGlobals from '../app-globals';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubBusinessProrityService {

  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  constructor(private http: HttpClient, private auth: AuthService) { }

  getBusinessPrioritySubSegmentMarketMap(randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/api/businessprioritysubsegment/fetchbpsubmarketmap?ver='+randomValue,{'params':this.httpParams});
  }
  addBusinessPrioritySubSegmentMarketMap(node:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/businessprioritysubsegment/addbpsubmarketmap',node,{'params':this.httpParams});
  }
  deleteBusinessPrioritySubSegmentMarketMap(id:number){
    return this.http.delete('http://'+myGlobals.server+':8787/api/businessprioritysubsegment/deletebpsubmarketmap/'+id,{'params':this.httpParams});
  }
  updateBusinessPrioriytySubSegmentMarketMap(node:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/businessprioritysubsegment/updatebpsubmarketmap',node,{'params':this.httpParams});
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
        ':8787/api/businessprioritysubsegment/checkbusinessprioritysubsegmentexistence?businessPriorityOldSubSegmentId=' +
        businessPriorityOldSubSegmentId +
        '&businessPriorityId=' +
        businessPriorityId +
        '&action=' +
        action +
        '&randomValue=' +
        randomValue,{'params':this.httpParams}
    );
  }
}
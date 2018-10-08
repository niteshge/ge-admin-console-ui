import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { TodoItemNode } from '../shared/tree-structure/tree-structure.component';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubTechnologyService {
  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  constructor(private http: HttpClient, private auth: AuthService) {}
  addSubTechnologyNode(node: TodoItemNode) {
    console.log('In the service of sub tech ', node);
    return this.http.post(
      'http://' + myGlobals.server + ':8787/api/subsegment/addnode',
      node,{'params':this.httpParams}
    );
  }
  getTechSubSegmentMarketMap(randomValue) {
    return this.http.get(
      'http://' +
        myGlobals.server +
        ':8787/api/techsubsegment/fetchtechsubmarketmap?ver=' +
        randomValue,{'params':this.httpParams}
    );
  }
  addTechSubSegmentMarketMap(node: any) {
    return this.http.post(
      'http://' + myGlobals.server + ':8787/api/techsubsegment/addtechsubmarketmap',
      node,{'params':this.httpParams}
    );
  }
  deleteTechSubSegmentMarketMap(id: number) {
    return this.http.delete(
      'http://' +
        myGlobals.server +
        ':8787/api/techsubsegment/deletetechsubmarketmap/' +
        id,{'params':this.httpParams}
    );
  }
  updateTechSubSegmentMarketMap(node: any) {
    return this.http.post(
      'http://' +
        myGlobals.server +
        ':8787/api/techsubsegment/updatetechsubmarketmap',
      node,{'params':this.httpParams}
    );
  }
  checkTechnologySubSegmentExistInBusinessSolution(
    technologyOldSubSegmentId: number,
    technologyId: number,
    action: number,
    randomValue: number
  ) {
    return this.http.get(
      'http://' +
        myGlobals.server +
        ':8787/api/techsubsegment/checktechnologysubsegmentexistence?technologyOldSubSegmentId=' +
        technologyOldSubSegmentId +
        '&technologyId=' +
        technologyId +
        '&action=' +
        action +
        '&randomValue=' +
        randomValue,{'params':this.httpParams}
    );
  }

  getTechnologySubSegment1ByHorizontalName(
    horizontalName: string,
    randomValue
  ) {
    return this.http.get(
      'http://' +
        myGlobals.server +
        ':8787/api/techsubsegment/gettechnologysubsegment1byhorizontal?horizontalName=' +
        encodeURIComponent(horizontalName) +
        '&ver=' +
        randomValue,{'params':this.httpParams}
    );
  }

  getTechnologySubSegmentChildByHorizontalNameAndTechnologySegmentName(
    horizontalName: string,
    technologySubSegment: string,
    randomValue: number
  ) {
    return this.http.get(
      'http://' +
        myGlobals.server +
        ':8787/api/techsubsegment/gettechnologysubsegmentchildbytechnologysubsegmentparentandhorizontal?horizontalName=' +
        encodeURIComponent(horizontalName) +
        '&technologySubSegment=' +
        encodeURIComponent(technologySubSegment) +
        '&ver=' +
        randomValue,{'params':this.httpParams}
    );
  }
  getTechnologyNameByTechnologyId(id:number, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/api/techsubsegment/getsubtechnologynamebyid?id='+id+'&ver='+randomValue,{'params':this.httpParams});
  }
  
}

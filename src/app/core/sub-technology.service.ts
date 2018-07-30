import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { TodoItemNode } from '../shared/tree-structure/tree-structure.component';

@Injectable({
  providedIn: 'root'
})
export class SubTechnologyService {

  constructor(private http: HttpClient) { }
  addSubTechnologyNode(node:TodoItemNode) {
    console.log("In the service of sub tech ", node)
    return this.http.post('http://'+myGlobals.server+':8787/subsegment/addnode',node);
  }
  getTechSubSegmentMarketMap(randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/techsubsegment/fetchtechsubmarketmap?ver='+randomValue);
  }
  addTechSubSegmentMarketMap(node:any){
    return this.http.post('http://'+myGlobals.server+':8787/techsubsegment/addtechsubmarketmap',node);
  }
  deleteTechSubSegmentMarketMap(id:number){
    return this.http.delete('http://'+myGlobals.server+':8787/techsubsegment/deletetechsubmarketmap/'+id);
  }
  updateTechSubSegmentMarketMap(node:any){
    return this.http.post('http://'+myGlobals.server+':8787/techsubsegment/updatetechsubmarketmap',node);
  }
}
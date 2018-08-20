import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { TodoItemNode } from '../shared/tree-structure/tree-structure.component';

@Injectable({
  providedIn: 'root'
})
export class SubTechnologyService {
  constructor(private http: HttpClient) {}
  addSubTechnologyNode(node: TodoItemNode) {
    console.log('In the service of sub tech ', node);
    return this.http.post(
      'http://' + myGlobals.server + ':8787/subsegment/addnode',
      node
    );
  }
  getTechSubSegmentMarketMap(randomValue) {
    return this.http.get(
      'http://' +
        myGlobals.server +
        ':8787/techsubsegment/fetchtechsubmarketmap?ver=' +
        randomValue
    );
  }
  addTechSubSegmentMarketMap(node: any) {
    return this.http.post(
      'http://' + myGlobals.server + ':8787/techsubsegment/addtechsubmarketmap',
      node
    );
  }
  deleteTechSubSegmentMarketMap(id: number) {
    return this.http.delete(
      'http://' +
        myGlobals.server +
        ':8787/techsubsegment/deletetechsubmarketmap/' +
        id
    );
  }
  updateTechSubSegmentMarketMap(node: any) {
    return this.http.post(
      'http://' +
        myGlobals.server +
        ':8787/techsubsegment/updatetechsubmarketmap',
      node
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
        ':8787/techsubsegment/checktechnologysubsegmentexistence?technologyOldSubSegmentId=' +
        technologyOldSubSegmentId +
        '&technologyId=' +
        technologyId +
        '&action=' +
        action +
        '&randomValue=' +
        randomValue
    );
  }

  getTechnologySubSegment1ByHorizontalName(
    horizontalName: string,
    randomValue
  ) {
    return this.http.get(
      'http://' +
        myGlobals.server +
        ':8787/techsubsegment/gettechnologysubsegment1byhorizontal?horizontalName=' +
        encodeURIComponent(horizontalName) +
        '&ver=' +
        randomValue
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
        ':8787/techsubsegment/gettechnologysubsegmentchildbytechnologysubsegmentparentandhorizontal?horizontalName=' +
        encodeURIComponent(horizontalName) +
        '&technologySubSegment=' +
        encodeURIComponent(technologySubSegment) +
        '&ver=' +
        randomValue
    );
  }
}

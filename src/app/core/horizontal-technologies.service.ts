import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class HorizontalTechnologyService {
  constructor(private http: HttpClient) {}

  getAllHorizontalTechnology(randomValue: number) {
    return this.http.get(
      'http://' +
        myGlobals.server +
        ':8787/mastertables/getallhorizontaltechnologies?ver=' +
        randomValue
    );
  }

  updateHorizontalTechnology(horizontalTechnology) {
    return this.http.post(
      'http://' +
        myGlobals.server +
        ':8787/mastertables/updatehorizontaltechnology',
      horizontalTechnology
    );
  }

  deleteHorizontalTechnology(id, randomValue) {
    return this.http.delete(
      'http://' +
        myGlobals.server +
        ':8787/mastertables/deletehorizontaltechnology/' +
        id
    );
  }

  saveHorizontalTechnology(horizontalTechnology: any) {
    return this.http.post(
      'http://' +
        myGlobals.server +
        ':8787/mastertables/savehorizontaltechnology',
      horizontalTechnology
    );
  }

  checkTechnologyExistInBusinessSolution(
    technologyName: string,
    action: number,
    randomValue: number
  ) {
    return this.http.get(
      'http://' +
        myGlobals.server +
        ':8787/mastertables/checktechnologyexistence?technologyName=' +
        technologyName +
        '&action=' +
        action +
        '&randomValue=' +
        randomValue
    );
  }
  getTechnologiesNames(randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/mastertables/gettechnologies?ver='+randomValue);
  }
  
}

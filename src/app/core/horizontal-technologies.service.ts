import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HorizontalTechnologyService {
  constructor(private http: HttpClient, private auth: AuthService) {}
  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  getAllHorizontalTechnology(randomValue: number) {
    return this.http.get(
      'http://' +
        myGlobals.server +
        ':8787/api/mastertables/getallhorizontaltechnologies?ver=' +
        randomValue,{'params':this.httpParams}
    );
  }

  updateHorizontalTechnology(horizontalTechnology) {
    return this.http.post(
      'http://' +
        myGlobals.server +
        ':8787/api/mastertables/updatehorizontaltechnology',
      horizontalTechnology,{'params':this.httpParams}
    );
  }

  deleteHorizontalTechnology(id, randomValue) {
    return this.http.delete(
      'http://' +
        myGlobals.server +
        ':8787/api/mastertables/deletehorizontaltechnology/' +
        id,{'params':this.httpParams}
    );
  }

  saveHorizontalTechnology(horizontalTechnology: any) {
    return this.http.post(
      'http://' +
        myGlobals.server +
        ':8787/api/mastertables/savehorizontaltechnology',
      horizontalTechnology,{'params':this.httpParams}
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
        ':8787/mastertables/api/checktechnologyexistence?technologyName=' +
        technologyName +
        '&action=' +
        action +
        '&randomValue=' +
        randomValue,{'params':this.httpParams}
    );
  }
  getTechnologiesNames(randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/gettechnologies?ver='+randomValue,{'params':this.httpParams});
  }

  getHorizontalNameByHorizontalId(id:number, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/api/mastertables/gethorizontalbyid?id='+id+'&ver='+randomValue,{'params':this.httpParams});
  }
  checkTechnologyExistInConditionOneToFour(
    technologyName: string,
    action: number,
    randomValue: number
  ) {
    return this.http.get(
      'http://' +
        myGlobals.server +
        ':8787/api/mastertables/checktechnologyexistenceinconditions?technologyName=' +
        technologyName +
        '&action=' +
        action +
        '&randomValue=' +
        randomValue,{'params':this.httpParams}
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class HorizontalTechnologyService {

    constructor(private http: HttpClient) { }

    getAllHorizontalTechnology(){
        return this.http.get('http://'+myGlobals.server+':8787/mastertables/getallhorizontaltechnologies');
    }

    updateHorizontalTechnology(horizontalTechnology){
        return this.http.put('http://'+myGlobals.server+':8787/mastertables/updatehorizontaltechnology',horizontalTechnology);
    }

    deleteHorizontalTechnology(id,randomValue){
        return this.http.delete('http://'+myGlobals.server+':8787/mastertables/deletehorizontaltechnology/'+id);
    }

}
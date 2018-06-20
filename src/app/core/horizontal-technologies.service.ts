import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HorizontalTechnologyService {

    constructor(private http: HttpClient) { }

    getAllHorizontalTechnology(){
        return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/mastertables/getallhorizontaltechnologies');
    }

    updateHorizontalTechnology(horizontalTechnology){
        return this.http.put('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/mastertables/updatehorizontaltechnology',horizontalTechnology);
    }

    deleteHorizontalTechnology(id,randomValue){
        return this.http.delete('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/mastertables/deletehorizontaltechnology/'+id);
    }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessSolutionsService {

  constructor(private http: HttpClient) { }

  getAllBusinessSolutons() {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/mastertables/businesssolutions');
  }
  updateBusinessSolution(businessSolutions) {
    // return this.http.post('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/mastertables/updatebusinesssolutions', businessSolutions, {
    //   headers: {
    //     'Content-Type': 'application/json; charset=UTF-8',
    //     'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    //   }
    // });
    return this.http.put('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/mastertables/updatebusinesssolutions', businessSolutions)
  }
  saveBusinessSolutions(businessSolutions, randomValue){
    return this.http.post('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/mastertables/savebusinesssolutions',businessSolutions);
  }
  
  deleteBusinessSolutions(id, randomValue){
    return this.http.delete('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/mastertables/deletebusinesssolutions/'+id);
  }

}

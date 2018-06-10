import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessSolutionsService {

  constructor(private http: HttpClient) { }

  getAllBusinessSolutons(){
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/mastertables/businesssolutions')
  }
}

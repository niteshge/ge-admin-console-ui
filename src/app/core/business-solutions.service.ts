import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessSolutionsService {

  constructor(private http: HttpClient) { }

  getAllBusinessSolutons(){
    return this.http.get('http://localhost:8787/mastertables/businesssolutions')
  }
}

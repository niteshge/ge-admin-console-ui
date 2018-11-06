import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IndustrySubSegmentService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  getIndustrySubSegment1(industryName:string, randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/api/industrysubsegment/getindustrysubsegment1byindustry?industry='+encodeURIComponent(industryName)+'&ver='+randomValue,{'params':this.httpParams});
  }

  getIndustrySubSegmentChild(industryName:string, industrySubSegment:string, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/api/industrysubsegment/getindustrysubsegmentchildbyindustrysubsegmentparentandindustry?industry='+encodeURIComponent(industryName)+'&industrySubSegment='+encodeURIComponent(industrySubSegment)+'&ver='+randomValue,{'params':this.httpParams});
  }

  // getIndustrySubSegmentById(id:Number, randomValue:Number){
  //   return this.http.get('http://'+myGlobals.server+':8787/industrysubsegment/getsubtechnologynamebyid?id='+id+'&ver='+randomValue);
  // }


  deleteConditionFourFromIndustrySubSegment(industryId:number, industrySegmentId:number, randomValue:number) {
    return this.http.delete('http://'+myGlobals.server+':8787/api/industrysubsegment/deleteconditionfour?industryId='+industryId+'&industrySegmentId='+industrySegmentId+'&ver='+randomValue,{'params':this.httpParams});
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
      
  };
}

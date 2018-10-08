import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MatDialog } from '../../../node_modules/@angular/material';
import { AuthService } from './auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class SolutionPriorityAssociationService {

  constructor(private http: HttpClient, public dialog: MatDialog, private auth: AuthService) { }
  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  getAllSolutionPriorityAssociation(randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/api/analystconsole/spa/fetchsolutionpriorityasso?ver='+randomValue,{'params':this.httpParams});
  }

  updateSolutionPriorityAssociation(solutionPriorityAssociation:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/analystconsole/spa/updatesolutionpriorityassoc',solutionPriorityAssociation,{'params':this.httpParams})
    .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  deleteSolutionPriorityAssociationById(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/api/analystconsole/spa/deletesolutionpriorityassoc/'+id, {'params':this.httpParams});
  }

  saveSolutionPriorityAssociation(solutionPriorityAssociation:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/analystconsole/spa/savesolutionpriorityassoc',solutionPriorityAssociation,{'params':this.httpParams})
  }


  getIndustrySubSegment1(industryName:string, randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/api/industrysubsegment/getindustrysubsegment1byindustry?industry='+encodeURIComponent(industryName)+'&ver='+randomValue,{'params':this.httpParams});
  }

  getIndustrySubSegmentChild(industryName:string, industrySubSegment:string, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/api/industrysubsegment/getindustrysubsegmentchildbyindustrysubsegmentparentandindustry?industry='+encodeURIComponent(industryName)+'&industrySubSegment='+encodeURIComponent(industrySubSegment)+'&ver='+randomValue,{'params':this.httpParams});
  }

  getBusinessPrioritySubSegment1(businessPriorityName:string, randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/api/businessprioritysubsegment/getbusinesssubsegment1bybusinespriority?businessPriority='+encodeURIComponent(businessPriorityName)+'&ver='+randomValue,{'params':this.httpParams});
  }

  getBusinessPrioritySubSegmentChild(businessPriorityName:string, businessPrioritySubSegment:string, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/api/businessprioritysubsegment/getbusinessprioritysubsegmentchildbybusinessprioritysubsegmentparentandbusinesspriority?businessPriority='+encodeURIComponent(businessPriorityName)+'&businessPrioritySubSegment='+encodeURIComponent(businessPrioritySubSegment)+'&ver='+randomValue,{'params':this.httpParams});
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


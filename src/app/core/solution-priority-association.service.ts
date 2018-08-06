import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MatDialog } from '../../../node_modules/@angular/material';
@Injectable({
  providedIn: 'root'
})
export class SolutionPriorityAssociationService {

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  getAllSolutionPriorityAssociation(randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/analystconsole/spa/fetchsolutionpriorityasso?ver='+randomValue);
  }

  updateSolutionPriorityAssociation(solutionPriorityAssociation:any){
    return this.http.post('http://'+myGlobals.server+':8787/analystconsole/spa/updatesolutionpriorityassoc',solutionPriorityAssociation)
    .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  deleteSolutionPriorityAssociationById(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/analystconsole/spa/deletesolutionpriorityassoc/'+id);
  }

  saveSolutionPriorityAssociation(solutionPriorityAssociation:any){
    return this.http.post('http://'+myGlobals.server+':8787/analystconsole/spa/savesolutionpriorityassoc',solutionPriorityAssociation)
  }


  getIndustrySubSegment1(industryName:string, randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/industrysubsegment/getindustrysubsegment1byindustry?industry='+industryName+'&ver='+randomValue);
  }

  getIndustrySubSegmentChild(industryName:string, industrySubSegment:string, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/industrysubsegment/getindustrysubsegmentchildbyindustrysubsegmentparentandindustry?industry='+industryName+'&industrySubSegment='+industrySubSegment+'&ver='+randomValue);
  }

  getBusinessPrioritySubSegment1(businessPriorityName:string, randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/businessprioritysubsegment/getbusinesssubsegment1bybusinespriority?businessPriority='+businessPriorityName+'&ver='+randomValue);
  }

  getBusinessPrioritySubSegmentChild(businessPriorityName:string, businessPrioritySubSegment:string, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/businessprioritysubsegment/getbusinessprioritysubsegmentchildbybusinessprioritysubsegmentparentandbusinesspriority?businessPriority='+businessPriorityName+'&businessPrioritySubSegment='+businessPrioritySubSegment+'&ver='+randomValue);
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


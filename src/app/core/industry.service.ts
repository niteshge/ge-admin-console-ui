import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor(private http: HttpClient) { }

  getIndustries(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/industry/getallindustries?ver='+randomValue);
  }

  getIndustriesNames(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/industry/getindustrynames?ver='+randomValue);
  }

  getIndustryById(id:Number, randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/industry/getindustrybyid?id='+id+'&ver='+randomValue);
  }

  getIndustriesSubNamesByListOfIndutriesNames(industryNames:string[], randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/industrysubsegment/getlistofindustrysubbylistofindustrynames?industryNames='+industryNames+'&ver='+randomValue);
  }


  updateIndustry(industry:any){
    return this.http.post('http://'+myGlobals.server+':8787/industry/updateindustry',industry)
    .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  deleteIndustryById(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/industry/deleteindustry/'+id);
  }

  saveIndustry(industry:any){
    return this.http.post('http://'+myGlobals.server+':8787/industry/saveindustry',industry)
  }


  getIndustrySubSegmentMarketMap(randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/industrysubsegment/fetchsubindustrymarketmap?ver='+randomValue);
  }
  addIndustrySubSegmentMarketMap(node:any){
    return this.http.post('http://'+myGlobals.server+':8787/industrysubsegment/addindustrysubmarketmap',node);
  }
  deleteIndustrySubSegmentMarketMap(id:number){
    return this.http.delete('http://'+myGlobals.server+':8787/industrysubsegment/deleteindustrysubmarketmap/'+id);
  }
  updateIndustrySubSegmentMarketMap(node:any){
    return this.http.post('http://'+myGlobals.server+':8787/industrysubsegment/updateindustrysubmarketmap',node);
  }
  checkIndustryExistInBusinessSolution(industryName:string,action:number, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/industry/checkindustryinbusinesssolutionexistence?industryName='+industryName+'&action='+action+'&randomValue='+randomValue);
  }

  checkIndustryExistInSolutionPriorityAssociation(industryName:string,action:number, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/industry/checkindustryinsolutionpriorityassocexistence?industryName='+industryName+'&action='+action+'&randomValue='+randomValue);
  }

  checkIndustrySubSegmentExistInBusinessSolution(industryOldSubSegmentId:number,industryId:number, action:number, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/industrysubsegment/checkindustrysubsegmentexistenceinbusinesssolution?industryOldSubSegmentId='+industryOldSubSegmentId+'&industryId='+industryId+'&action='+action+'&randomValue='+randomValue);
  }

  checkIndustrySubSegmentExistInSolutionPriorityAssociation(industryOldSubSegmentId:number,industryId:number, action:number, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/industrysubsegment/checkindustrysubsegmentexistenceinsolutionpriorityassoc?industryOldSubSegmentId='+industryOldSubSegmentId+'&industryId='+industryId+'&action='+action+'&randomValue='+randomValue);
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

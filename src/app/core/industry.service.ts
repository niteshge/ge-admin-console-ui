import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor(private http: HttpClient, private auth: AuthService) { }
  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  getIndustries(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/industry/getallindustries?ver='+randomValue,{'params':this.httpParams});
  }

  getIndustriesNames(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/industry/getindustrynames?ver='+randomValue,{'params':this.httpParams});
  }

  getIndustryById(id:Number, randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/industry/getindustrybyid?id='+id+'&ver='+randomValue,{'params':this.httpParams});
  }

  getIndustriesSubNamesByListOfIndutriesNames(industryNames:string[], randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/industrysubsegment/getlistofindustrysubbylistofindustrynames?industryNames='+industryNames+'&ver='+randomValue,{'params':this.httpParams});
  }


  updateIndustry(industry:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/industry/updateindustry',industry,{'params':this.httpParams})
    .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  deleteIndustryById(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/api/industry/deleteindustry/'+id,{'params':this.httpParams});
  }

  saveIndustry(industry:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/industry/saveindustry',industry,{'params':this.httpParams})
  }


  getIndustrySubSegmentMarketMap(randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/api/industrysubsegment/fetchsubindustrymarketmap?ver='+randomValue,{'params':this.httpParams});
  }
  addIndustrySubSegmentMarketMap(node:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/industrysubsegment/addindustrysubmarketmap',node,{'params':this.httpParams});
  }
  deleteIndustrySubSegmentMarketMap(id:number){
    return this.http.delete('http://'+myGlobals.server+':8787/api/industrysubsegment/deleteindustrysubmarketmap/'+id,{'params':this.httpParams});
  }
  updateIndustrySubSegmentMarketMap(node:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/industrysubsegment/updateindustrysubmarketmap',node,{'params':this.httpParams});
  }
  checkIndustryExistInBusinessSolution(industryName:string,action:number, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/api/industry/checkindustryinbusinesssolutionexistence?industryName='+encodeURIComponent(industryName)+'&action='+action+'&randomValue='+randomValue,{'params':this.httpParams});
  }

  checkIndustryExistInSolutionPriorityAssociation(industryName:string,action:number, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/api/industry/checkindustryinsolutionpriorityassocexistence?industryName='+encodeURIComponent(industryName)+'&action='+action+'&randomValue='+randomValue,{'params':this.httpParams});
  }

  checkIndustrySubSegmentExistInBusinessSolution(industryOldSubSegmentId:number,industryId:number, action:number, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/api/industrysubsegment/checkindustrysubsegmentexistenceinbusinesssolution?industryOldSubSegmentId='+industryOldSubSegmentId+'&industryId='+industryId+'&action='+action+'&randomValue='+randomValue,{'params':this.httpParams});
  }

  checkIndustrySubSegmentExistInSolutionPriorityAssociation(industryOldSubSegmentId:number,industryId:number, action:number, randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/api/industrysubsegment/checkindustrysubsegmentexistenceinsolutionpriorityassoc?industryOldSubSegmentId='+industryOldSubSegmentId+'&industryId='+industryId+'&action='+action+'&randomValue='+randomValue,{'params':this.httpParams});
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

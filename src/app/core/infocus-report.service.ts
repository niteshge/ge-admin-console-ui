import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { InfocusReportModel } from '../infocus-report/infocus-report.model';
import { Observable } from 'rxjs';
import { InfocusMeta } from '../infocus-report/infocus-report-view/infocus-report-view.model';
import * as myGlobals from '../app-globals';
import { AuthService } from './auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class InfocusReportService {
  // opts = new RequestOptions();
  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  constructor(private http: HttpClient, private auth: AuthService) {
    // const headers: any = new Headers();
    // headers.append('Content-Type', 'application/json');
    // this.opts = new RequestOptions({ headers: headers });
  }

  getInfocusReportRoles(randomValue) {
    console.log(randomValue);
    return this.http.get('http://'+myGlobals.server+':8787/api/getroles?ver='+randomValue,{'params':this.httpParams})
  }

  getInfocusIndustriesByRole(role: string,randomValue) {
    console.log(randomValue);
    return this.http.get('http://'+myGlobals.server+':8787/api/getindustriesbyrole/?role=' + encodeURIComponent(role)+'&ver='+randomValue,{'params':this.httpParams})
  }

  getInfocusIndustrySegment1ByRolendIndustry(role: string, industry: string, randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getindustryseg1byindustryndrole/?role=' + encodeURIComponent(role) + '&industry=' +encodeURIComponent(industry)+'&ver='+randomValue,{'params':this.httpParams})
  }

  getInfocusIndustrySegment2ByIndustryndIndustrySegment1(industry: string, industrySegment1: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getindustryseg2byindustryndindseg1/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1)+'&ver='+randomValue,{'params':this.httpParams})
  }

  getInfocusBusinessPriority1(role: string, industry: string, industrySegment1: string, industrySegment2: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getbp1/?industry=' + encodeURIComponent(industry) +
      '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' +encodeURIComponent(industrySegment2)+'&ver='+randomValue,{'params':this.httpParams})

  }

  getInfocusBusinessPriority2(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getbp2/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) + '&bp1=' + encodeURIComponent(businessPriority1)+'&ver='+randomValue,{'params':this.httpParams})
  }

  getInfocusBusinessPriority2ByIndustry(role: string, industry: string, industrySegment1: string, industrySegment2: string, randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getbp2byindustry/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) +'&ver='+randomValue,{'params':this.httpParams})
  }


  getInfocusBusinessPriority3(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getbp3/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) + '&bp1=' + encodeURIComponent(businessPriority1) + '&bp2=' + encodeURIComponent(businessPriority2) +'&ver='+randomValue, {'params':this.httpParams})
  }

  getInfocusBusinessPriority3ByBp2(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority2: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getbp3bybp2/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) + '&bp2=' + encodeURIComponent(businessPriority2) +'&ver='+randomValue, {'params':this.httpParams})
  }


  getInfocusBusinessPriority3Solution1(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getsolution1/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) + '&bp1=' + encodeURIComponent(businessPriority1) + '&bp2=' + encodeURIComponent(businessPriority2) + '&bp3=' + encodeURIComponent(businessPriority3)+'&ver='+randomValue, {'params':this.httpParams})
  }

  getInfocusBusinessPriority2Solution1(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getsolution1bybp2/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) + '&bp1=' + encodeURIComponent(businessPriority1) + '&bp2=' + encodeURIComponent(businessPriority2) + '&ver='+randomValue, {'params':this.httpParams})
  }

  getInfocusBusinessPriority3Solution1ByBp2NdBp3(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getsolution1bybp2ndbp3/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) + '&bp2=' + encodeURIComponent(businessPriority1) + '&bp3=' + encodeURIComponent(businessPriority2) + '&ver='+randomValue, {'params':this.httpParams})
  }

  getInfocusBusinessPriority3Solution2(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getsolution2/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) + '&bp1=' + encodeURIComponent(businessPriority1) + '&bp2=' + encodeURIComponent(businessPriority2) + '&bp3=' + encodeURIComponent(businessPriority3)+'&ver='+randomValue,{'params':this.httpParams})

  }

  getInfocusBusinessPriority2Solution2(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getsolution2bybp2/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) + '&bp1=' + encodeURIComponent(businessPriority1) + '&bp2=' + encodeURIComponent(businessPriority2) + '&bp3=' + '&ver='+randomValue,{'params':this.httpParams})
  }

  getInfocusBusinessPriority2Solution2ByBp2NdBp3(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getsolution2bybp2ndbp3/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) + '&bp2=' + encodeURIComponent(businessPriority1) + '&bp3=' + encodeURIComponent(businessPriority2) + '&bp3=' + '&ver='+randomValue,{'params':this.httpParams})
  }

  getInfocusBusinessPriority3Solution3(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getsolution3/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) + '&bp1=' + encodeURIComponent(businessPriority1) + '&bp2=' + encodeURIComponent(businessPriority2) + '&bp3=' + encodeURIComponent(businessPriority3)+'&ver='+randomValue,{'params':this.httpParams})
  }
  getInfocusBusinessPriority3Solution4(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getsolution4/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) + '&bp1=' + encodeURIComponent(businessPriority1) + '&bp2=' + encodeURIComponent(businessPriority2) + '&bp3=' + encodeURIComponent(businessPriority3)+'&ver='+randomValue,{'params':this.httpParams})
  }
  getInfocusBusinessPriority3Solution5(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getsolution5/?industry=' + encodeURIComponent(industry) + '&industryseg1=' + encodeURIComponent(industrySegment1) + '&role=' + encodeURIComponent(role) + '&industryseg2=' + encodeURIComponent(industrySegment2) + '&bp1=' + encodeURIComponent(businessPriority1) + '&bp2=' + encodeURIComponent(businessPriority2) + '&bp3=' + encodeURIComponent(businessPriority3)+'&ver='+randomValue,{'params':this.httpParams})
  }
  getInfocusCompanyDetails(solutionCode: string,randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getcompanydetialsbycode/?solutioncode=' + solutionCode+'&ver='+randomValue,{'params':this.httpParams})
  }

  getTechnologies(randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/api/gettechnologies?ver='+randomValue,{'params':this.httpParams});
  }
  getTechnologiesSubSegment(technologyName:string,randomValue){
    return this.http.get('http://'+myGlobals.server+':8787/api/gettechsubsegment?technologyName='+encodeURIComponent(technologyName)+'&ver='+randomValue,{'params':this.httpParams});
  }

  postInfocusReportDetails(infocus: InfocusReportModel) {
    // const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     const options = new RequestOptions({headers: headers});

    console.log("Infocus Report Details service layer", infocus);
    return this.http.post('http://'+myGlobals.server+':8787/api/saveinfocusreport/', infocus,{'params':this.httpParams});
  }

  getInfocusPDFbyId(id) {
    console.log(id.id)
    // const headers = new HttpHeaders({ 'Content-Type': 'application/pdf; charset=utf-8','Access-Control-Allow-Origin': 'http://'+myGlobals.server+':8787'});
    // return this.http.get('http://'+myGlobals.server+':8787/api/viewinfocuspdf/' + id.id + '.pdf', { headers });
    return this.http.get('http://'+myGlobals.server+':8787/api/viewinfocuspdf/' + id.id + '.pdf', {'params':this.httpParams});
  }

  getAllInfocusMeta(randomValue) {
    return this.http.get('http://'+myGlobals.server+':8787/api/getallinfocusmetalist?ver='+randomValue,{'params':this.httpParams});
  }

deleteInfocusReportById(id){
  return this.http.delete('http://'+myGlobals.server+':8787/api/deleteinfocusreport/'+id,{'params':this.httpParams})
}

publishPdfById(id, randomValue) {
  console.log(id)
  return this.http.get('http://'+myGlobals.server+':8787/api/publishinfocus/?infocusmetaid=' + id+'&ver='+randomValue,{'params':this.httpParams});
}

}


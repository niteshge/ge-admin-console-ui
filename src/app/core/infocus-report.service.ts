import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { InfocusReportModel } from '../infocus-report/infocus-report.model';
import { Observable } from 'rxjs';
import { InfocusMeta } from '../infocus-report/infocus-report-view/infocus-report-view.model';
@Injectable({
  providedIn: 'root'
})
export class InfocusReportService {
  // opts = new RequestOptions();

  constructor(private http: HttpClient) {
    // const headers: any = new Headers();
    // headers.append('Content-Type', 'application/json');
    // this.opts = new RequestOptions({ headers: headers });
  }

  getInfocusReportRoles(randomValue) {
    console.log(randomValue);
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getroles?ver='+randomValue)
  }

  getInfocusIndustriesByRole(role: string,randomValue) {
    console.log(randomValue);
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getindustriesbyrole/?role=' + role+'&ver='+randomValue)
  }

  getInfocusIndustrySegment1ByRolendIndustry(role: string, industry: string, randomValue) {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getindustryseg1byindustryndrole/?role=' + role + '&industry=' + industry+'&ver='+randomValue)
  }

  getInfocusIndustrySegment2ByIndustryndIndustrySegment1(industry: string, industrySegment1: string,randomValue) {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getindustryseg2byindustryndindseg1/?industry=' + industry + '&industryseg1=' + industrySegment1+'&ver='+randomValue)
  }

  getInfocusBusinessPriority1(role: string, industry: string, industrySegment1: string, industrySegment2: string,randomValue) {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getbp1/?industry=' + industry +
      '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2+'&ver='+randomValue)

  }

  getInfocusBusinessPriority2(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string,randomValue) {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getbp2/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1+'&ver='+randomValue)
  }


  getInfocusBusinessPriority3(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string,randomValue) {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getbp3/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1 + '&bp2=' + businessPriority2 +'&ver='+randomValue)
  }

  getInfocusBusinessPriority3Solution1(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3: string,randomValue) {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getsolution1/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1 + '&bp2=' + businessPriority2 + '&bp3=' + businessPriority3+'&ver='+randomValue)

  }
  getInfocusBusinessPriority3Solution2(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3: string,randomValue) {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getsolution2/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1 + '&bp2=' + businessPriority2 + '&bp3=' + businessPriority3+'&ver='+randomValue)

  }
  getInfocusBusinessPriority3Solution3(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3: string,randomValue) {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getsolution3/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1 + '&bp2=' + businessPriority2 + '&bp3=' + businessPriority3+'&ver='+randomValue)
  }
  getInfocusBusinessPriority3Solution4(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3: string,randomValue) {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getsolution4/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1 + '&bp2=' + businessPriority2 + '&bp3=' + businessPriority3+'&ver='+randomValue)
  }
  getInfocusBusinessPriority3Solution5(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3: string,randomValue) {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getsolution5/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1 + '&bp2=' + businessPriority2 + '&bp3=' + businessPriority3+'&ver='+randomValue)
  }
  getInfocusCompanyDetails(solutionCode: string,randomValue) {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getcompanydetialsbycode/?solutioncode=' + solutionCode+'&ver='+randomValue)
  }

  postInfocusReportDetails(infocus: InfocusReportModel) {
    // const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     const options = new RequestOptions({headers: headers});

    console.log("Infocus Report Details service layer", infocus);
    return this.http.post("http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/saveinfocusreport/", infocus);
  }

  getInfocusPDFbyId(id) {
    console.log(id.id)
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf; charset=utf-8' });
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/viewinfocuspdf/' + id.id + '.pdf', { headers });
  }

  getAllInfocusMeta() {
    return this.http.get('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/getallinfocusmetalist');
  }

deleteInfocusReportById(id){
  return this.http.delete('http://ge-staging-vm2.eastus.cloudapp.azure.com:8787/api/deleteinfocusreport/'+id)
}

}


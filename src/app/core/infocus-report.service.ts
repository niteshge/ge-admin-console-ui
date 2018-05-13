import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { InfocusReportModel } from '../infocus-report/infocus-report.model';
@Injectable({
  providedIn: 'root'
})
export class InfocusReportService {

  constructor(private http: HttpClient) { }

  getInfocusReportRoles() {
    return this.http.get('http://localhost:8787/api/getroles')
  }

  getInfocusIndustriesByRole(role: string) {
    return this.http.get('http://localhost:8787/api/getindustriesbyrole/?role=' + role)
  }

  getInfocusIndustrySegment1ByRolendIndustry(role: string, industry: string) {
    return this.http.get('http://localhost:8787/api/getindustryseg1byindustryndrole/?role=' + role + '&industry=' + industry)
  }

  getInfocusIndustrySegment2ByIndustryndIndustrySegment1(industry: string, industrySegment1: string) {
    return this.http.get('http://localhost:8787/api/getindustryseg2byindustryndindseg1/?industry=' + industry + '&industryseg1=' + industrySegment1)
  }

  getInfocusBusinessPriority1(role: string, industry: string, industrySegment1: string, industrySegment2: string) {
    return this.http.get('http://localhost:8787/api/getbp1/?industry=' + industry +
      '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2)

  }

  getInfocusBusinessPriority2(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string) {
    return this.http.get('http://localhost:8787/api/getbp2/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1)
  }


  getInfocusBusinessPriority3(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string) {
    return this.http.get('http://localhost:8787/api/getbp3/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1+ '&bp2='+businessPriority2)
  }

  getInfocusBusinessPriority3Solution1(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3:string) {
    return this.http.get('http://localhost:8787/api/getsolution1/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1+ '&bp2='+businessPriority2+ '&bp3='+businessPriority3)

  }
  getInfocusBusinessPriority3Solution2(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3:string) {
    return this.http.get('http://localhost:8787/api/getsolution2/?industry='+industry+'&industryseg1='+industrySegment1+'&role='+role+'&industryseg2='+industrySegment2+'&bp1='+businessPriority1+'&bp2='+businessPriority2+'&bp3='+businessPriority3)
    
  }
  getInfocusBusinessPriority3Solution3(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3:string) {
    return this.http.get('http://localhost:8787/api/getsolution3/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1+ '&bp2='+businessPriority2+ '&bp3='+businessPriority3)
  }
  getInfocusBusinessPriority3Solution4(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3:string) {
    return this.http.get('http://localhost:8787/api/getsolution4/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1+ '&bp2='+businessPriority2+ '&bp3='+businessPriority3)
  }
  getInfocusBusinessPriority3Solution5(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string, businessPriority2: string, businessPriority3:string) {
    return this.http.get('http://localhost:8787/api/getsolution5/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1+ '&bp2='+businessPriority2+ '&bp3='+businessPriority3)
  }
  getInfocusCompanyDetails(solutionCode:string){
    return this.http.get('http://localhost:8787/api/getcompanydetialsbycode/?solutioncode='+solutionCode)
  }

  postInfocusReportDetails(infocus:InfocusReportModel){
    console.log("Infocus Report Details service layer", infocus);
    return this.http.post('http://localhost:8787/api/generateinfocusreport/',infocus);
  }
}

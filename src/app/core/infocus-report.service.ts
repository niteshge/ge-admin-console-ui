import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
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
    console.log("Inside the service layer")
    return this.http.get('http://localhost:8787/api/getindustryseg1byindustryndrole/?role=' + role + '&industry=' + industry)
  }

  getInfocusIndustrySegment2ByIndustryndIndustrySegment1(industry: string, industrySegment1: string) {
    console.log("Inside the industry seg2 service layer", industry, industrySegment1)
    return this.http.get('http://localhost:8787/api/getindustryseg2byindustryndindseg1/?industry=' + industry + '&industryseg1=' + industrySegment1)
  }

  getInfocusBusinessPriority1(role: string, industry: string, industrySegment1: string, industrySegment2: string) {
    console.log("Inside the business priority 1 service layer", industry, industrySegment1, industrySegment2, role)
    return this.http.get('http://localhost:8787/api/getbp1/?industry=' + industry +
      '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2)

  }

  getInfocusBusinessPriority2(role: string, industry: string, industrySegment1: string, industrySegment2: string, businessPriority1: string) {
    console.log("Inside the business priority 2 service layer", industry, industrySegment1, industrySegment2, role, businessPriority1)
    return this.http.get('http://localhost:8787/api/getbp2/?industry=' + industry + '&industryseg1=' + industrySegment1 + '&role=' + role + '&industryseg2=' + industrySegment2 + '&bp1=' + businessPriority1)
  }
  
}

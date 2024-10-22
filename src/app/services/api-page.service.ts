import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPageService {

  constructor(private http:HttpClient) { }

  getApis(){
    // const params:HttpParams = new HttpParams().set('apprId',id);
    //const printApprisal_url = `https://services-test.keyassure.live/appraisal/apprFormPdf?${params.toString()}`;
    const url = "https://localhost:9443/api/am/devportal/v3/apis?limit=25&offset=0";
    return this.http.get(url);
  }
}

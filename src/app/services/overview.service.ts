import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private http:HttpClient) { }

  getApiDetails(id:any){
    const url=`https://localhost:9443/api/am/devportal/v3/apis/${id}`;
    return this.http.get(url);
  }

}

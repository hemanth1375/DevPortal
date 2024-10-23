import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  public getOauthKeys(){
    const url = "https://localhost:9443/api/am/devportal/v3/applications/b719cc6e-0fe9-4fc0-b89e-e455109c0623/oauth-keys";

    const headers  = new HttpHeaders({
      accept:"application/json",
      Authorization: "Bearer 462827c7-9790-3589-9633-64d1602bc5b2" 
    })
    return this.http.get(url, {headers})
  }

  public getAccesstoken(consumerSecret:any){
    const url = "https://localhost:9443/api/am/devportal/v3/applications/b719cc6e-0fe9-4fc0-b89e-e455109c0623/oauth-keys/b5caa0fb-16f1-46b3-a47d-e5e06f6eafeb/generate-token";

        const body = {
          "consumerSecret":consumerSecret ,
          "validityPeriod": 3600,
          "revokeToken": null,
          "scopes": [],
          "additionalProperties": {
              "id_token_expiry_time": 3600,
              "application_access_token_expiry_time": 3600,
              "user_access_token_expiry_time": 3600,
              "bypassClientCredentials": false,
              "pkceMandatory": false,
              "pkceSupportPlain": false,
              "refresh_token_expiry_time": 86400
          }
      }

      const headers  = new HttpHeaders({
        accept:"application/json",
        Authorization: "Bearer 462827c7-9790-3589-9633-64d1602bc5b2" 
      })

      return this.http.post(url, body, {headers})


  }

}

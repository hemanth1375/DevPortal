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
      Authorization: "Bearer 564b2fef-8a55-35e8-887a-28bfa927e963" 
    })
    return this.http.get(url, {headers})
  }

  public getAccesstoken(consumerSecret:any,keyMapId:any){
    const url = `https://localhost:9443/api/am/devportal/v3/applications/b719cc6e-0fe9-4fc0-b89e-e455109c0623/oauth-keys/${keyMapId}/generate-token`;

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
        Authorization: "Bearer 564b2fef-8a55-35e8-887a-28bfa927e963" 
      })

      return this.http.post(url, body, {headers})


  }

}

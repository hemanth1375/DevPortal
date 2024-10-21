import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  

  constructor(private http: HttpClient) {}

  getToken( ): Observable<string> {
    const url = 'https://localhost:9443/oauth2/token';
    const headers = {
      Authorization: 'Basic ZmlQZjdmS3pyS2UxUVpnTWh4cGh0azdBbzBNYTp2OWtfcnppaVl1TE9jcFJDbHZ5M0dmUzhaVmdh',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', 'admin');
    body.set('password', 'admin');
    body.set('scope', 'apim:subscribe apim:api_key');

    return this.http.post<any>(url, body.toString(), { headers }).pipe(
      map(response => response.access_token)
    );
  }
  getLogin( username:any, password:any): Observable<string> {
    const url = 'https://localhost:9443/oauth2/token';
    const headers = {
      Authorization: 'Basic ZmlQZjdmS3pyS2UxUVpnTWh4cGh0azdBbzBNYTp2OWtfcnppaVl1TE9jcFJDbHZ5M0dmUzhaVmdh',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', username);
    body.set('password', password);
    body.set('scope', 'apim:subscribe apim:api_key');

    return this.http.post<any>(url, body.toString(), { headers }).pipe(
      map(response => response.access_token)
    );
  }
}
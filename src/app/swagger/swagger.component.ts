import { Component, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';
import { AuthService } from '../auth.service';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrl: './swagger.component.css'
})
export class SwaggerComponent implements OnInit{
  

  constructor(private authService:AuthService){

  }

  ngOnInit(): void {

    this.authService.getOauthKeys().pipe(
      switchMap((res:any)=>{
        if(res?.list && Array.isArray(res.list)){
          const productionKey = res.list.find((item:any)=> item.keyType ==="SANDBOX")
          if(productionKey){
            const consumerSecret = productionKey.consumerSecret;
            console.log('consumer Secret for Production:', consumerSecret);
            return this.authService.getAccesstoken(consumerSecret);
          }else{
            throw new Error('No PRODUCTION keyType found in the response');
          }
        }else{
          throw new Error('Invalid response format');
        }
      }
      )).subscribe({
        next:(tokenResponse:any)=>{
          console.log('access Token Response', tokenResponse);
          SwaggerUI({
            dom_id: '#swagger-ui',
            url: '../../assets/openapi-spec.json',
            deepLinking: true,
            requestInterceptor:(request:any)=>{
              request.headers['Authorization'] = `Bearer ${tokenResponse.accessToken}`  
              return request
            }
          });
        },
        error:(error:any)=>{
          console.error('Error', error)
        }
      });

 
  }
  
}

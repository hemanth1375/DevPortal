import { Component, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';


@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrl: './swagger.component.css'
})
export class SwaggerComponent implements OnInit{
  
  ngOnInit(): void {
    SwaggerUI({
      dom_id: '#swagger-ui',
      url: '../../assets/openapi-spec.json',
      deepLinking: true,
    });
  }
  
}

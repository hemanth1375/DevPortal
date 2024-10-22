import { Component, HostListener } from '@angular/core';
import { ApiPageService } from '../services/api-page.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrl: './api-page.component.css'
})
export class ApiPageComponent {

  constructor(private apiPageService:ApiPageService, private router:Router,private route:ActivatedRoute){}
apiList:any=[];
showParent:any=true;
  ngOnInit(){
    this.apiPageService.getApis().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.apiList=res.list;
        
      },
      error:(err)=>{

      }
    })

  }
  goToViewPage(){
    this.showParent=false;
    this.router.navigate(['viewapi/overview'],{relativeTo:this.route})
  }
  @HostListener('window:popstate', ['$event']) toggelOpen( event:Event){
    
    
    this.router.events.subscribe((event) => {
     
      if (event instanceof NavigationEnd) {
        console.log(this.router.url );
        
         // Check if the current route is 'recipe'
        if (this.router.url === '/apis') {
          this.showParent=true;
          
          
      }else if(this.router.url === '/apis/viewapi'){
this.showParent=false;
      }
    }});

  }
  @HostListener('window:click', ['$event']) open( event:Event){
    
    
    this.router.events.subscribe((event) => {
     
      if (event instanceof NavigationEnd) {
        console.log(this.router.url );
        
         // Check if the current route is 'recipe'
        if (this.router.url === '/apis') {
          this.showParent=true;
          
          
      }else if(this.router.url === '/apis/viewapi'){
this.showParent=false;
      }
    }});

  }
//   fetching(){
//     const body = new URLSearchParams();
//     body.set('grant_type', 'password');
//     body.set('username', 'admin');
//     body.set('password', 'admin');
//     body.set('scope', 'apim:subscribe apim:api_key');

//     fetch("https://localhost:9443/oauth2/token",{
// method:"POST",
// headers:{
// 'Authorization':'Bearer caf82440-3743-33d8-a28a-185c156f3561',
// 'content-type':'application/x-www-form-urlencoded'
// },
// body:body
//     })
//     .then(res=>{console.log(res);
//     })
//   }
//   fetching2(){
//     const body = new URLSearchParams();
//     body.set('grant_type', 'password');
//     body.set('username', 'admin');
//     body.set('password', 'admin');
//     body.set('scope', 'apim:subscribe apim:api_key');

//     fetch("https://localhost:9443/api/am/devportal/v3/subscriptions",{
// method:"POST",
// headers:{
// 'Authorization':'Bearer caf82440-3743-33d8-a28a-185c156f3561',
// 'content-type':'application/json'
// },
// body:JSON.stringify({
//   "applicationId": "b719cc6e-0fe9-4fc0-b89e-e455109c0623",
//   "apiId": "25a1e059-f93c-47b4-87fb-6a71a7b549e0",
//   "throttlingPolicy": ""
// })
//     })
//     .then(res=>{console.log(res);
//     })
//   }
}

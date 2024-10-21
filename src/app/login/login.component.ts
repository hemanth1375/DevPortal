import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonutilServiceService } from '../services/commonutil-service.service';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isloading=false;
  showparent=false;

login() {
  this.isloading=true;
  //this.router.navigate(['viewVehicle'], { state: { id: apprCard.id, vin: apprCard.vinNumber, comp: 'inventory' }, relativeTo: this.route });
this.authService.getLogin(this.loginDetails.get('username')?.value,this.loginDetails.get('password')?.value).subscribe({
  next:(response:any)=>{
    if(response){
        
      this.showparent=true;

     }


     this.isloading=false;
  },
  error:(error:any)=>{console.log(error);
   this.showparent=false;
   this.isloading=false;
  }  
});


}

logout(){

  this.showparent=false;
}

  constructor( private fb:FormBuilder,private router:Router,private route:ActivatedRoute, private util:CommonutilServiceService ,private authService:AuthServiceService){
    
    this.showparent=util.islogin;
  }
 
  loginDetails = this.fb.group({
    username:[null],
    password:[null]
  });
}

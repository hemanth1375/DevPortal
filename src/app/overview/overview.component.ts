import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  receivedData:any;
  apiData:any;
  paramId:any;
  constructor(private router: Router, private overviewService:OverviewService, private route:ActivatedRoute) {
    console.log(history);
    const state: RouterState = router.routerState;
    console.log(state);
   
    const snapshot: RouterStateSnapshot = state.snapshot;
    console.log(snapshot)
    const root: ActivatedRouteSnapshot = snapshot.root;
    console.log(root);
 
    const child = root.firstChild;
   
    console.log(root.children.slice()[0].children.slice()[0].paramMap.get('id'));
 
 
    this.paramId=root.children.slice()[0].children.slice()[0].paramMap.get('id');

    
    this.receivedData=history.state
  }
  ngOnInit(){
    this.overviewService.getApiDetails(this.paramId).subscribe({
      next:(res:any)=>{
    console.log(res);
    this.apiData=res;
    
      }
    })
  }
}

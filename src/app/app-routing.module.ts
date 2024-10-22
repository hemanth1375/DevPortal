import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiPageComponent } from './api-page/api-page.component';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { ViewApiPageComponent } from './view-api-page/view-api-page.component';
import { OverviewComponent } from './overview/overview.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {path:"apis",component:ApiPageComponent,children:[
    {path:"viewapi",component:ViewApiPageComponent,children:[
      {path:"overview",component:OverviewComponent},
      {path:"subscriptions",component:SubscriptionComponent}
    ]}
  ]},
  {path:"applications",component:ApplicationPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

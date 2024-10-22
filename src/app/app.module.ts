import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { ApiPageComponent } from './api-page/api-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewApiPageComponent } from './view-api-page/view-api-page.component';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { OverviewComponent } from './overview/overview.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LoginComponent } from './login/login.component';
import { MaterailModule } from './material/material.module';
import { ProgressLoaderComponent } from './progress-loader/progress-loader.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavbarComponent,
    ApiPageComponent,
    ViewApiPageComponent,
    ApplicationPageComponent,
    OverviewComponent,
    SubscriptionComponent,
    LoginComponent,
    ProgressLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,MatProgressBarModule,MaterailModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

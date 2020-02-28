import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnboardingModule } from './components/onboarding/onboarding.module';
import  { Loader } from './utilities/services/loaderService/loaderService.service';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AuthGuardService } from './utilities/guards/auth-guard.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginGuardService } from './utilities/guards/login-guard.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { ViewSiteComponent } from './components/dashboard/components/view-site/view-site.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    // ViewSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OnboardingModule,
    DashboardModule,
    MatProgressSpinnerModule
  ],
  providers: [
    Loader,
    AuthGuardService,
    LoginGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

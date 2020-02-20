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

@NgModule({
  declarations: [
    AppComponent
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

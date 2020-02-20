import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  AuthGuardService } from './utilities/guards/auth-guard.service';
import { LoginGuardService  } from './utilities/guards/login-guard.service';''

const routes: Routes = [

  {
    path: 'onboarding',
    loadChildren: './components/onboarding/onboarding.module#OnboardingModule',
    canActivate:[LoginGuardService],
  },
  {
    path: 'dashboard',
    loadChildren: './components/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuardService]
  },

  {
    path: '',
   redirectTo:'/onboarding',
   pathMatch:'full'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

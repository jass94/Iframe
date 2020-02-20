
import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';
import { LoginComponent } from './components/login/login.component';

const onboardingRoutes: Routes = [
        {
            path: '',
            component: OnboardingComponent,
            children: [ 
                // { path: '', redirectTo: '/login-component', pathMatch: 'full' },
                {   path:'', component: LoginComponent  },
            ]
        }
    ];
    

@NgModule({
    imports: [RouterModule.forChild(onboardingRoutes)],
    exports: [RouterModule]
  })
  export class OnboardingRoutingModule { }
  




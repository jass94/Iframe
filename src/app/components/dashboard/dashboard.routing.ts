
import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesListComponent } from './components/challengeList/challengeList.component';
import { dashboardComponent } from './dashboard.component';

const  dashboardRoutes: Routes = [
        {
            path: '',
            component: dashboardComponent,
            children: [ 
                {   path:'', component: ChallengesListComponent  },
            ]
        }
    ];
    

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
  })
  export class  dashboardRoutingModule { }
  




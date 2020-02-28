import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardComponent } from './dashboard.component';
import { DashBoardService } from './dashboard.service';
import { HeaderComponent } from './components/header/header.component';
import { ViewSiteComponent  } from './components/view-site/view-site.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      component: dashboardComponent,
    
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
   
  ],
  declarations: [
    ViewSiteComponent,
    dashboardComponent,
    HeaderComponent,
    
    ],
  providers: [
    DashBoardService
    ]

})
export class DashboardModule { }

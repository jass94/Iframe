import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from './onboarding.routing'
import { LoginService } from './components/login/login.service';
import { LoginComponent  } from './components/login/login.component';
import { OnboardingComponent } from './onboarding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatSnackBarModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    HttpClientModule

  ],
  declarations: [
    LoginComponent,
    OnboardingComponent
    ],
  providers: [
      LoginService,
    ]
})
export class OnboardingModule { }

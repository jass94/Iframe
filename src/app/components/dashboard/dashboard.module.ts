import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardRoutingModule } from './dashboard.routing';
import { dashboardComponent } from './dashboard.component';
import { ChallengesListComponent } from './components/challengeList/challengeList.component';
import { DashBoardService } from './dashboard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatSnackBarModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { ChallengeAcceptedComponent  } from './components/challengeAcceptedPopUp/challengeAcceptesPopUp.component';
import { BidChallengeComponent  } from './components/bidChallenge/bidChallenge.component';

@NgModule({
  imports: [
    CommonModule,
    dashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
  ],
  declarations: [
    dashboardComponent,
    ChallengesListComponent,
    HeaderComponent,
    ChallengeAcceptedComponent,
    BidChallengeComponent
    ],
  providers: [
    DashBoardService
    ],
    entryComponents:[
        ChallengeAcceptedComponent ,
        BidChallengeComponent
    ]

})
export class DashboardModule { }

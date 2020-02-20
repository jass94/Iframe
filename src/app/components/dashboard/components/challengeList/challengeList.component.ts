import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Subscription } from "rxjs";
import { CommonValidator } from "../../../../utilities/validators/common.validators";
import { Loader } from "../../../../utilities/services/loaderService/loaderService.service";
import { MatDialog, MatSnackBar } from "@angular/material";
import { ChallengeAcceptedComponent } from "../challengeAcceptedPopUp/challengeAcceptesPopUp.component";
import { BidChallengeComponent } from "../bidChallenge/bidChallenge.component";

import { DashBoardService } from "../../dashboard.service";
import { HttpResponse } from "@angular/common/http";
@Component({
  selector: "challenge-list",
  templateUrl: "./challengeList.component.html",
  styleUrls: ["./challengeList.component.scss"]
})
export class ChallengesListComponent implements OnInit {
  displayedColumns: string[];
  dataSource;
   elementData;

  constructor(
    private loader: Loader,
    public dialog: MatDialog,
    private dashBoardService: DashBoardService,
    private matSnackBar: MatSnackBar,
  ) {
  
  }

  ngOnInit() {
    this.dashBoardService.getChallenges().subscribe(
      response => {
        this.elementData = response;
        this.setTableData();
      },
      error=>{
       
        this.loader.hide();
        this.matSnackBar.open(error.message, error.code, {
          duration: 2000,
        });
      }
    );
  }
  setTableData() {
    this.displayedColumns = ["id", "startTime", "endTime", "status", "action"];
    this.dataSource = this.elementData;
  }

  challengeAccepted(row) {
    if (row.status == "Pending") {
this.loader.show();
      this.dashBoardService.updateChallengeStatus(row).subscribe((data)=>{
  row.status = "Accepted";
  this.loader.hide();
      this.dialog.open(ChallengeAcceptedComponent, {
        width: "400px",
      });
      })
    
    }
  }
  bidChallenge(row) {

    if(row.status != 'Pending'){
    this.loader.show();
 
    this.dashBoardService.getBidData(row).subscribe(response=>{
let userBidData;
if(response)
userBidData = response[localStorage.getItem('accessToken')];
this.loader.hide();
    this.dialog.open(BidChallengeComponent, {
      width: "60%",
      // minWidth: "300px",
      data: {
        totalBids:userBidData ?  Object.keys(response).length-1 : 0,
       
        bidPrice: userBidData?  userBidData.bidPrice : 0,
        ...row
      }
    });

    },
    error=>{
    
      this.loader.hide();
      this.matSnackBar.open(error.message, error.code, {
        duration: 2000,
      });
    })

  }
}
}

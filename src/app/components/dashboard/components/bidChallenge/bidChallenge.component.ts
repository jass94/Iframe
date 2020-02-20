import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DashBoardService } from '../../dashboard.service';
import { MatSnackBar } from '@angular/material';
import { Loader } from '../../../../utilities/services/loaderService/loaderService.service';


@Component({
  selector: 'bid-challenge-popup',
  templateUrl: './bidChallenge.component.html',
  styleUrls: ['./bidChallenge.component.scss']
})
export class BidChallengeComponent{

  constructor(@Inject(MAT_DIALOG_DATA) public data,private dashBoardService:DashBoardService,
  private matSnackBar: MatSnackBar,
  private dialogRef: MatDialogRef<BidChallengeComponent>,
  private loader: Loader) {

}

onSubmit(){
  if(this.data.bidPrice< this.data.item.basePrice){
    this.matSnackBar.open("Bid price must be greater than  base fare", 'Error', {
      duration: 2000,
    });
    return;
  }
  else{
    // this.loader.show();
this.dashBoardService.submitBid(this.data).subscribe(response=>{
 
  this.dialogRef.close();
  // this.loader.hide();
})
  }
}

}

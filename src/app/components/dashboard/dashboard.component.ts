import { Component, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DashBoardService } from './dashboard.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class  dashboardComponent implements OnDestroy {

  public  url1:any;
  public  url2:any;
  private subscription: Subscription;
  private subscription1: Subscription;

 constructor(public sanitizer: DomSanitizer, private dashBoardService:DashBoardService ) {
    this.subscription = this.dashBoardService.getUrl1().subscribe(
      response => {
        this.url1 = this.sanitizer.bypassSecurityTrustResourceUrl(response);
      });

      this.subscription1 = this.dashBoardService.getUrl2().subscribe(
        response => {
          this.url2 = this.sanitizer.bypassSecurityTrustResourceUrl(response);
        });

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
   }
 

}




 





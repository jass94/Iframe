import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashBoardService } from '../../dashboard.service'




@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor(private router:Router, private dashBoardService: DashBoardService) {

}

logoutClicked(){
    localStorage.clear();
    this.router.navigate(['/onboarding']);
}
 

onUrlChange(e,type){
  this.dashBoardService.setUrl(e.target.value,type);
}



}

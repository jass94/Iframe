import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-site',
  templateUrl: './view-site.component.html',
  styleUrls: ['./view-site.component.scss']
})
export class ViewSiteComponent  {
   @Input() siteUrl;

 
   

  constructor() { 
  

  }
  

}

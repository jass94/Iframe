import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Loader } from './utilities/services/loaderService/loaderService.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.loader.hide();
  }


  constructor(private loader:Loader){


  }
  ngOnInit(){
 
firebase.initializeApp({
  apiKey: "AIzaSyCfgZdU_VCcUaRTY8AXvTnK8X4LSAA1YvI",
  authDomain: "twoiframe.firebaseapp.com",
})


  }
  title = 'SDNATech';
}

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
  apiKey: "AIzaSyBFqpcirqWrGJS4IE1kFePZgBDBcV04m5U",
  authDomain: "assignmenttask1-eff9b.firebaseapp.com",
})


  }
  title = 'SDNATech';
}

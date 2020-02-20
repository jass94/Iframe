import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Loader } from '../../../../utilities/services/loaderService/loaderService.service';



@Injectable()
export class LoginService {
    constructor(private http: HttpClient, private matSnackBar: MatSnackBar, private router:Router,  private loader: Loader) { }
    login(payload) {
      
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(response=>{
      
        this.loader.hide();
      
        localStorage.setItem('accessToken', response.user.uid);//,response.user.uid);
        setTimeout(()=>{
          this.router.navigate(['/dashboard']);
        },100)
        
      },
      error=>{
     
        this.loader.hide();
        this.matSnackBar.open(error.message, error.code, {
          duration: 2000,
        });
      })
  
    }




}
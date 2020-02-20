import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements  CanActivate {



  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
   
    if (localStorage.getItem('accessToken')? false : true) {

      this.router.navigate(['onboarding']);
      return false;
    }
    else 
    return true;
  }

  constructor(public router: Router) { }




}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private route:Router){

  }

  token = localStorage.getItem('token')

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.token==null){
        this.route.navigate(['/'])
        return false;
      }else{
        if (this.tokenExpired(this.token)) {
          this.route.navigate(['/'])
          return false;
        } else {
          return true;
        }
      }

  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(window.atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

}



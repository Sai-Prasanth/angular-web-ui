import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {
  constructor(private authService: AuthserviceService, private router: Router) {}

  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean | UrlTree {
     let url: string = state.url;

         return this.checkLogin(url);
     }

  checkLogin(url: string): true | UrlTree {
    console.log("Url: " + url)
    let val: any = localStorage.getItem('isUserLoggedIn');

    if (val != null && val == "true") {
      if (url == "/login")
        this.router.parseUrl('');
      else
        return true;
    } 
      return this.router.parseUrl('/login');
    
  }
  
}

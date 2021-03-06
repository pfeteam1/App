import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from "rxjs/operators";
import { AuthService } from './auth.service';
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.user.pipe(
        take(1),
        map(user=>{
          if(!user){
            console.log('not allowed');
            this.router.navigateByUrl('/login');
            return false;
          } else {
            //testing role function manually //TODO implement RBAC here or create another guard just for roles
            if(this.authService.getUser().role_id!=0 && this.location.path().endsWith("Dashboard")){
              this.router.navigateByUrl('/home/email');//for testing purposes
              return false;
            }            
            return true;
          }
        })
      );
    }
  
}

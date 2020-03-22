import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Observable, BehaviorSubject, from } from 'rxjs';
import { switchMap, map, take } from 'rxjs/operators';
import { AuthResponse } from "./auth-response";
import { User } from './user';
import { JwtHelperService } from '@auth0/angular-jwt';



const helper = new JwtHelperService();
const TOKEN_KEY = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';
  public user: Observable<any>;
  private userData = new BehaviorSubject(null);

  constructor(
    private httpClient:HttpClient, 
    private storage: Storage,
    private plt: Platform,
    private router: Router) {
      this.loadStoredToken();
  }

  loadStoredToken(){
    let platformObs = from(this.plt.ready());

    this.user = platformObs.pipe(
      switchMap(()=>{
        return from(this.storage.get(TOKEN_KEY));
      }),
      map(token=>{
        if (token && !helper.isTokenExpired(token)) {
          let decoded = helper.decodeToken(token);
          this.userData.next(decoded);
          return true;
        } else {
          return null;
        }
      })
    );
  }

  login(credentials: User) {    
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/login`, credentials).pipe(
      take(1),
      map((res) => {
        return res.access_token;
      }),
      switchMap(token => {
        let decoded = helper.decodeToken(token);
        this.userData.next(decoded);

        let storageObs = from(this.storage.set(TOKEN_KEY, token));
        return storageObs;
      })
    );
  }

  register(user: User) {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/register`,user).pipe(
      take(1),
      map((res: AuthResponse) => {
        return res.access_token;
      }),
      switchMap(token => {
        let decoded = helper.decodeToken(token);
        this.userData.next(decoded);

        let storageObs = from(this.storage.set(TOKEN_KEY, token));
        return storageObs;
      })
    );
  }

  logout(){
    this.storage.remove(TOKEN_KEY).then(()=>{
      this.router.navigateByUrl('/home');
      this.userData.next(null);
    });
  }

  getUser(){
    return this.userData.getValue();
  }

}

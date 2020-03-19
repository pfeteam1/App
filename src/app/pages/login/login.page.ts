import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      if (res) {
        this.router.navigateByUrl('/home');
      } else {
        console.log("login failed");
      }
    })
  }

  ngOnInit() {
    this.authService.user.subscribe((res)=>{
      if(res) this.router.navigateByUrl('/home');
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', '../../app.component.scss'],
})
export class HomePage implements OnInit {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/home/Dashboard'
    },
    {
      title: 'email',
      url: '/home/Email'
    }
  ];
  
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("inited");
  }

}

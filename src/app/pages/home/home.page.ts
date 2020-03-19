import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', '../../app.component.scss'],
})
export class HomePage implements OnInit {
  public feature: string;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/home/Dashboard'
    },
    {
      title: 'emails',
      url: '/home/email'
    }
  ];
  
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.feature = this.activatedRoute.snapshot.paramMap.get('id');    
    if(this.feature !== undefined){
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === this.feature.toLowerCase());
    }
  }

}

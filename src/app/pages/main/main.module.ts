import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { DashboardComponent } from 'src/app/components/main/dashboard/dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  entryComponents:[DashboardComponent],
  declarations: [MainPage,DashboardComponent]
})
export class MainPageModule {}

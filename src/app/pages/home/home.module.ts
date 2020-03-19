import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ProfileMenuComponent } from "../../components/home/profile-menu/profile-menu.component";
import { MainPageModule } from "../main/main.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MainPageModule
  ],
  entryComponents: [ProfileMenuComponent],
  declarations: [HomePage, ProfileMenuComponent]
})
export class HomePageModule {}

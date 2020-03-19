import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';


@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent  {


  constructor( public popovercontroller: PopoverController) { }

  async presentPopOver(ev:any){
    const popover = await this.popovercontroller.create({
      component : PopoverComponent ,
      event:ev,
      translucent: true
    });
    return await popover.present();
  }




}

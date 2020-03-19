import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public popovercontroller: PopoverController) { }

  ngOnInit() {}

   doc(){
     window.open('https://www.google.com','_blank');
    this.popovercontroller.dismiss();
   }
   close(){
    this.popovercontroller.dismiss();
   }
}

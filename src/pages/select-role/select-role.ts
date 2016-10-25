import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyerSelectCourse } from '../buyer-select-course/buyer-select-course';
import { SellerChooseFunctionality } from '../seller-choose-functionality/seller-choose-functionality';


@Component({
  templateUrl: 'select-role.html'
})
export class SelectRole {
  constructor(private navCtrl: NavController) {
  }

  openPage(page) {
    this.navCtrl.push(page, {});
  }

  openBuyerPage() {
    this.navCtrl.push(BuyerSelectCourse, {});
  }

  openSellerPage() {
    this.navCtrl.push(SellerChooseFunctionality, {});
  }
}

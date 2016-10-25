import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SellerClassInfo } from '../seller-class-info/seller-class-info';
import { SellerHistory } from '../seller-history/seller-history';


@Component({
  templateUrl: 'seller-choose-functionality.html'
})
export class SellerChooseFunctionality {
  constructor(private navCtrl: NavController) {
  }

  openPage(page) {
    this.navCtrl.push(page, {});
  }

  sellBook() {
    this.navCtrl.push(SellerClassInfo, {});
  }

  viewHistory() {
    this.navCtrl.push(SellerHistory, {});
  }
}

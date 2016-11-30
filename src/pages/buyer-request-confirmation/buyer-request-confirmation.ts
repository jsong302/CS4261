import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'buyer-request-confirmation.html'
})
export class BuyerRequestConfirmation {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  popRoot() {
    this.navCtrl.popToRoot();
  }


}

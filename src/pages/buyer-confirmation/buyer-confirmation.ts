import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Utils } from '../utils/utils';


@Component({
  templateUrl: 'buyer-confirmation.html'
})
export class BuyerConfirmation {
  book: {title: string, author: string, edition: string, isbn: string};
  seller: {name: string, price: number};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book = this.navParams.get('book');
    this.seller = this.navParams.get('seller');
  }

  popRoot() {
    this.navCtrl.popToRoot();
  }

}

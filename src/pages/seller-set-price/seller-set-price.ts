import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SellerConfirmation } from '../seller-confirmation/seller-confirmation';


@Component({
  templateUrl: 'seller-set-price.html'
})
export class SellerSetPrice {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit(formData) {
    this.navCtrl.push(SellerConfirmation, {
      book: this.navParams.get('book'),
      price: formData.price,
      course: this.navParams.get('course'),
      instructor: this.navParams.get('instructor'),
      semester: this.navParams.get('semester')});
  }
}

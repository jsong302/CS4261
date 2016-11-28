import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SellerConfirmation } from '../seller-confirmation/seller-confirmation';
import {ListService} from '../../providers/list-service';


@Component({
  templateUrl: 'seller-set-price.html',
  providers: [ListService]
})
export class SellerSetPrice {
<<<<<<< HEAD
  form = {price: ''};
=======
  form = {
    condition: '',
    markings: '',
    price: ''
  };
>>>>>>> refs/remotes/origin/master

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService) {
  }

  onSubmit() {
    this.listService.sell(this.form.price, this.navParams.get('book').isbn);
    this.navCtrl.push(SellerConfirmation, {
      book: this.navParams.get('book'),
      course: this.navParams.get('course'),
      instructor: this.navParams.get('instructor'),
      semester: this.navParams.get('semester'),
      priceForm: this.form});
  }
}

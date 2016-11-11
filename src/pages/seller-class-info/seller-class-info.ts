import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SellerSuggestedBooks } from '../seller-suggested-books/seller-suggested-books';


@Component({
  templateUrl: 'seller-class-info.html'
})
export class SellerClassInfo {
  form = {
    semester: '',
    course: '',
    instructor: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit() {
    this.navCtrl.push(SellerSuggestedBooks, {
      classForm: this.form});
  }
}

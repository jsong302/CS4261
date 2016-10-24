import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SellerSuggestedBooks } from '../seller-suggested-books/seller-suggested-books';


@Component({
  templateUrl: 'seller-class-info.html'
})
export class SellerClassInfo {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit(formData) {
    this.navCtrl.push(SellerSuggestedBooks, {
      course: formData.name,
      instructor: formData.instructor,
      semester: formData.semester});
  }
}

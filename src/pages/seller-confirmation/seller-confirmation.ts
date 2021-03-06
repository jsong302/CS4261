import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { Utils } from '../utils/utils';


@Component({
  templateUrl: 'seller-confirmation.html'
})
export class SellerConfirmation {
  course: string;
  instructor: string;
  semester: string;
  book: {title: string, author: string, edition: string, publisher: string, isbn: string};
  price: number;
  condition: string;
  markings: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book = this.navParams.get('book');
    let priceForm = this.navParams.get('priceForm');
    this.price = priceForm.price;
    this.condition = priceForm.condition;
    this.markings = priceForm.markings;
    this.course = this.navParams.get('course');
    this.instructor = this.navParams.get('instructor');
    this.semester = this.navParams.get('semester');
    
    // Push to database
  }
}

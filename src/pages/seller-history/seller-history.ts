import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'seller-history.html'
})
export class SellerHistory {
  soldBooks: Array<{title: string, author: string, price: number}>;
  pendingBooks: Array<{title: string, author: string, price: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.soldBooks = [
      {title: 'Mobile Services Textbook',
      author: 'John Smith, Steve Jones',
      price: 100.50},
      {title: 'Guide to the BMC',
      author: 'John Jacboson',
      price: 200.75}
    ];

    this.pendingBooks = [
      {title: 'Information in the New Age',
      author: 'John Jones, Joseph Park',
      price: 55.25},
      {title: 'The Study of Mobile Apps',
      author: 'John Jones, Robert Paulson',
      price: 98.75}
    ];
  }
}

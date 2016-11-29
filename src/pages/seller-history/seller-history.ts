import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'seller-history.html'
})
export class SellerHistory {
  soldBooks: Array<{title: string, author: string, buyer: string, price: number}>;
  pendingBooks: Array<{title: string, author: string, price: number}>;
  requests: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // Pull from database
    this.soldBooks = [
      {title: 'Mobile Services Textbook',
      author: 'John Smith, Steve Jones',
      buyer: 'Yvonne Shi',
      price: 100.50},
      {title: 'Guide to the BMC',
      author: 'John Jacboson',
      buyer: 'Josh Song',
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

    this.requests = [
      'Josh Song',
      'Kelly In',
      'Alex Kim',
      'Yvonne Shi'
    ]
  }

  remove(book) {
    this.pendingBooks.splice(this.pendingBooks.indexOf(book), 1);
    // Update database
  }

  sold(book, name) {
    this.pendingBooks.splice(this.pendingBooks.indexOf(book), 1);
    book['buyer'] = name
    this.soldBooks.push(book);
    // Update database
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'buyer-history.html'
})
export class BuyerHistory {
  requestedBooks: Array<{title: string, author: string, seller: string, contact: string, price: number}>;
  boughtBooks: Array<{title: string, author: string, seller: string, contact: string, price: number}>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // Pull info from database
    this.requestedBooks = [
      {title: 'Mobile Services Textbook',
      author: 'John Smith, Steve Jones',
      seller: 'Josh Song',
      contact: 'jsong302@gatech.edu',
      price: 100.50},
      {title: 'Guide to the BMC',
      author: 'John Jacboson',
      seller: 'Yvonne Shi',
      contact: 'jshi74@gatech.edu',
      price: 200.75}
    ];

    this.boughtBooks = [
      {title: 'Information in the New Age',
      author: 'John Jones, Joseph Park',
      seller: 'Kelly in',
      contact: 'kin3@gatech.edu',
      price: 55.25},
      {title: 'The Study of Mobile Apps',
      author: 'John Jones, Robert Paulson',
      seller: 'Alex Kim',
      contact: 'akim316@gatech.edu',
      price: 98.75}
    ];
  }

  cancel(book) {
    this.requestedBooks.splice(this.requestedBooks.indexOf(book), 1);
    // Update database
  }
}

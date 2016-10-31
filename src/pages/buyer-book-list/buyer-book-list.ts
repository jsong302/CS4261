import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyerConfirmation } from '../buyer-confirmation/buyer-confirmation';
import {BookService} from '../../providers/book-service';


@Component({
  templateUrl: 'buyer-book-list.html'
})
export class BuyerBookList {
  sellers: Array<{name: string, price: number}>
  book: {title: string, author: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book = navParams.get('book');
    this.sellers = [
      {name: 'kin3',
      price: 100.50},
      {name: 'akim58',
      price: 200.75},
      {name: 'asmith600',
      price: 55.25}
    ];
  }

  openPage(seller) {
    this.navCtrl.push(BuyerConfirmation, {
      book: this.book,
      seller: seller});
  }
}

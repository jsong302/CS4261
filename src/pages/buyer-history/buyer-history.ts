import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListService} from '../../providers/list-service';


@Component({
  templateUrl: 'buyer-history.html',
  providers: [ListService]
})
export class BuyerHistory {
  requestedBooks: Array<{title: string, author: string, seller: string, price: string, id: number}>;
  boughtBooks: Array<{title: string, author: string, seller: string, price: string, id: number}>;
  public list: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService) {
    // Pull info from database
    this.requestedBooks = [];
    this.boughtBooks = [];
    this.loadBuyerHistory();
  }

  cancel(book) {
    this.requestedBooks.splice(this.requestedBooks.indexOf(book), 1);
    this.listService.cancelBuyer(book.id);
  }

  loadBuyerHistory() {
    this.listService.buyerHistory()
    .then(data => {
      this.list = data;
      for(let l of this.list['pending']) {
        this.requestedBooks.push({title: l.title, author: l.author, seller: l.seller, price: l.cost, id: l.listing_id});
      }
      for(let m of this.list['bought']) {
        this.requestedBooks.push({title: m.title, author: m.author, seller: m.seller, price: m.cost, id: m.listing_id});
      }
    });
  }
}

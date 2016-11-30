import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListService} from '../../providers/list-service';


@Component({
  templateUrl: 'seller-history.html',
  providers: [ListService]
})
export class SellerHistory {
  soldBooks: Array<{title: string, author: string, seller: string, price: string, id: number}>;
  pendingBooks: Array<{title: string, author: string, seller: string, price: string, id: number}>;
  requests: Array<string>;
  public list: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService) {
    this.soldBooks = [];
    this.pendingBooks = [];
    this.loadSellerHistory();
    // Pull from database
    /* this.soldBooks = [
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
    ] */
  }

  remove(book) {
    this.pendingBooks.splice(this.pendingBooks.indexOf(book), 1);
    this.listService.cancelSeller(book.id);
  }

  sold(book, name) {
    this.pendingBooks.splice(this.pendingBooks.indexOf(book), 1);
    book['buyer'] = name
    this.soldBooks.push(book);
    // Update database
  }

  loadSellerHistory() {
    this.listService.sellerHistory()
    .then(data => {
      this.list = data;
      for(let l of this.list['pending']) {
        console.log(l);
        this.pendingBooks.push({title: l.title, author: l.author, seller: l.seller, price: l.cost, id: l.listing_id});
      }
      for(let m of this.list['sold']) {
        this.soldBooks.push({title: m.title, author: m.author, seller: m.seller, price: m.cost, id: m.listing_id});
      }
    });
  }
}

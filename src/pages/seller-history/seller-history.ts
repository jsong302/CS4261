import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListService} from '../../providers/list-service';


@Component({
  templateUrl: 'seller-history.html',
  providers: [ListService]
})
export class SellerHistory {
  soldBooks: Array<{title: string, buyer: string, author: string, seller: string, price: string, id: number}>;
  pendingBooks: Array<{title: string, author: string, seller: string, price: string, id: number, requests: Array<string>}>;
  public list: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService) {
    this.soldBooks = [];
    this.pendingBooks = [];
    this.loadSellerHistory();
    // Pull from database
  }

  remove(book) {
    this.pendingBooks.splice(this.pendingBooks.indexOf(book), 1);
    this.listService.cancelSeller(book.id);
  }

  sold(book, name) {
    if(typeof name == "string") {
      this.pendingBooks.splice(this.pendingBooks.indexOf(book), 1);
      book['buyer'] = name;
      this.soldBooks.push(book);
      this.listService.soldConfirm(book.id, name);
    }
    
    // Update database
  }

  loadSellerHistory() {
    this.listService.sellerHistory()
    .then(data => {
      this.list = data;
      for(let l of this.list['pending']) {
        let r: Array<string> = [];
        if(l['buyer'] != null) {
          for(let x of l['buyer']) {
            r.push(x);
          }
        }
        this.pendingBooks.push({title: l.title, author: l.author, seller: l.seller, price: l.cost, id: l.listing_id, requests: r});

      }
      for(let m of this.list['sold']) {
        this.soldBooks.push({title: m.title, buyer: m.buyer, author: m.author, seller: m.seller, price: m.cost, id: m.listing_id});
      }
    });
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyerConfirmation } from '../buyer-confirmation/buyer-confirmation';
import {ListService} from '../../providers/list-service';


@Component({
  templateUrl: 'buyer-book-list.html',
  providers: [ListService]
})
export class BuyerBookList {
  sellers: Array<{name: string, price: number}>
  public list: any;
  book: {title: string, author: string, isbn: string};
  isbn: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService) {
    this.book = navParams.get('book');
    this.sellers = [];
    this.loadList();
  }

  openPage(seller) {
    this.navCtrl.push(BuyerConfirmation, {
      book: this.book,
      seller: seller});
  }

  loadList(){
    this.listService.load(this.book.isbn)
    .then(data => {
      this.list = data;
      for(let l of this.list) {
        this.sellers.push({name: l.seller, price: l.cost});
      }
    });
    console.log(this.sellers);
  }
}

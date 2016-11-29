import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyerConfirmation } from '../buyer-confirmation/buyer-confirmation';
import { BuyerRequestConfirmation } from '../buyer-request-confirmation/buyer-request-confirmation';
import {ListService} from '../../providers/list-service';


@Component({
  templateUrl: 'buyer-book-list.html',
  providers: [ListService]
})
export class BuyerBookList {
  sellers: Array<{name: string, price: number, id: number}>
  public list: any;
  book: {title: string, author: string, isbn: string};
  isbn: string;
  form = {price: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService) {
    this.book = navParams.get('book');
    this.sellers = [];
    this.loadList();
  }

  openPage(seller) {
    this.listService.purchase(seller.id);
    this.navCtrl.push(BuyerConfirmation, {
      book: this.book,
      seller: seller});
    
  }

  onSubmit() {
    this.listService.request(this.form.price, this.book.isbn);
    this.navCtrl.push(BuyerRequestConfirmation, {});
  }

  loadList(){
    this.listService.load(this.book.isbn)
    .then(data => {
      this.list = data;
      console.log(this.list);
      for(let l of this.list) {
        this.sellers.push({name: l.seller, price: l.cost, id: l.listing_id});
      }
    });
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BuyerConfirmation } from '../buyer-confirmation/buyer-confirmation';
import {ListService} from '../../providers/list-service';


@Component({
  templateUrl: 'buyer-book-list.html',
  providers: [ListService]
})
export class BuyerBookList {
  sellers: Array<{name: string, price: number, btnText: string}>
  public list: any;
  book: {title: string, author: string, edition: string, publisher: string, isbn: string};
  btnText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService, public alertCtrl: AlertController) {
    this.book = navParams.get('book');
    this.sellers = [];
    this.loadList();
  }

  request(seller) {
    if (seller.btnText !== 'Requested') {
      seller.btnText = 'Requested'
      let alert = this.alertCtrl.create({
        title: 'We have notified seller ' + seller.name + '! ' + seller.name + ' will contact you soon.',
        buttons: ['OK']
      })
      alert.present();
    }
    // Send email to seller
    // Update database
  }

  loadList(){
    this.listService.load(this.book.isbn)
    .then(data => {
      this.list = data;
      for(let l of this.list) {
        this.sellers.push({name: l.seller, price: l.cost, btnText: 'Request'});
      }
    });
    console.log(this.sellers);
  }
}

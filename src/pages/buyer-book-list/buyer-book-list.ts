import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BuyerConfirmation } from '../buyer-confirmation/buyer-confirmation';
import { BuyerRequestConfirmation } from '../buyer-request-confirmation/buyer-request-confirmation';
import {ListService} from '../../providers/list-service';


@Component({
  templateUrl: 'buyer-book-list.html',
  providers: [ListService]
})
export class BuyerBookList {
<<<<<<< HEAD
  sellers: Array<{name: string, price: number, id: number}>
  public list: any;
  book: {title: string, author: string, isbn: string};
  isbn: string;
  form = {price: ''};
=======
  sellers: Array<{name: string, price: number, btnText: string}>
  public list: any;
  book: {title: string, author: string, edition: string, publisher: string, isbn: string};
  btnText: string;
>>>>>>> refs/remotes/origin/master

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService, public alertCtrl: AlertController) {
    this.book = navParams.get('book');
    this.sellers = [];
    this.loadList();
  }

<<<<<<< HEAD
  openPage(seller) {
    this.listService.purchase(seller.id);
    this.navCtrl.push(BuyerConfirmation, {
      book: this.book,
      seller: seller});
    
  }

  onSubmit() {
    this.listService.request(this.form.price, this.book.isbn);
    this.navCtrl.push(BuyerRequestConfirmation, {});
=======
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
>>>>>>> refs/remotes/origin/master
  }

  loadList(){
    this.listService.load(this.book.isbn)
    .then(data => {
      this.list = data;
      console.log(this.list);
      for(let l of this.list) {
<<<<<<< HEAD
        this.sellers.push({name: l.seller, price: l.cost, id: l.listing_id});
=======
        this.sellers.push({name: l.seller, price: l.cost, btnText: 'Request'});
>>>>>>> refs/remotes/origin/master
      }
    });
  }

}

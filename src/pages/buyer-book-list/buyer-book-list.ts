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
  sellers: Array<{name: string, price: number, btnText: string, listing_id: number}>
  public list: any;
  book: {title: string, author: string, edition: string, publisher: string, isbn: string};
  form = {
    author: '',
    edition: '',
    publisher: '',
    isbn: '',
    seller: '',
    condition: '',
    markings: '',
    price: ''
    };
  btnText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService, public alertCtrl: AlertController) {
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
  request(seller) {
    if (seller.btnText !== 'Requested') {
      seller.btnText = 'Requested'
      let alert = this.alertCtrl.create({
        title: 'We have notified seller ' + seller.name + '! ' + seller.name + ' will contact you soon.',
        buttons: ['OK']
      })
      alert.present();
      this.listService.purchase(seller.listing_id);
      this.popRoot();
    }
    // Send email to seller
    // Update database
  }

  loadList(){
    this.listService.load(this.book.isbn)
    .then(data => {
      this.list = data;
      console.log(this.list);
      for(let l of this.list) {
        this.sellers.push({name: l.seller, price: l.cost, btnText: 'Request', listing_id: l.listing_id});
      }
    });
  }

  popRoot() {
    this.navCtrl.popToRoot();
  }

  

}

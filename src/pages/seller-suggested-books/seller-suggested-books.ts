import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SellerSetPrice } from '../seller-set-price/seller-set-price';


@Component({
  templateUrl: 'seller-suggested-books.html'
})
export class SellerSuggestedBooks {
  suggestedBooks: Array<{title: string, author: string}>;
  form = {
    title: '',
    author: '',
    edition: '',
    isbn: ''};

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.suggestedBooks = [
      {title: 'Mobile Services Textbook',
      author: 'John Smith, Steve Jones'},
      {title: 'Guide to the BMC',
      author: 'John Jacboson'},
      {title: 'Information in the New Age',
      author: 'John Jones, Joseph Park'},
      {title: 'The Study of Mobile Apps',
      author: 'John Jones, Robert Paulson'}
    ];
  }

  openPage(suggestedBook) {
    let classForm = this.navParams.get('classForm');
    this.navCtrl.push(SellerSetPrice, {
      book: suggestedBook,
      course: classForm.course,
      instructor: classForm.instructor,
      semester: classForm.semester});
  }

  onSubmit() {
    this.openPage(this.form);
  }
}

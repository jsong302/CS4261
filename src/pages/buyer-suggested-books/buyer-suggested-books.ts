import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyerBookList } from '../buyer-book-list/buyer-book-list';


@Component({
  templateUrl: 'buyer-suggested-books.html'
})
export class BuyerSuggestedBooks {
  suggestedBooks: Array<{title: string, author: string}>;
  course: string;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.course = navParams.get('course');
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
    this.navCtrl.push(BuyerBookList, {book: suggestedBook});
  }

  onSubmit(formData) {
    this.openPage({title: formData.name, author: formData.author});
  }
}

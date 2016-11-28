import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyerBookList } from '../buyer-book-list/buyer-book-list';
import { BookService } from '../../providers/book-service';

@Component({
  templateUrl: 'buyer-suggested-books.html',
  providers: [BookService]
})
export class BuyerSuggestedBooks {
  suggestedBooks: Array<{title: string, edition: string, author: string, publisher: string, isbn: string}>;
  course: string;
  professor: string;
  public list: any;
  form = {
    title: '',
    edition: '',
    author: '',
    publisher: '',
    isbn: ''};

  constructor(private navCtrl: NavController, private navParams: NavParams, public bookService: BookService) {
    this.list = null;
    this.suggestedBooks = [];
    this.course = navParams.get('course');
    this.professor = navParams.get('professor');
    this.loadList();
  }

  openPage(suggestedBook) {
    this.navCtrl.push(BuyerBookList, {book: suggestedBook});
  }

  onSubmit() {
    console.log(this.form);
    this.bookService.add(this.course, this.form.isbn, this.form.title, this.form.author, this.form.publisher, this.form.edition);
    this.openPage(this.form);
  }

  loadList(){
    this.bookService.load(this.course, this.professor)
    .then(data => {
      this.list = data;
      for(let l of this.list) {
        this.suggestedBooks.push({title: l.title, author: l.author, publisher: l.publisher, isbn: l.isbn});
      }
    });
    
  }
}

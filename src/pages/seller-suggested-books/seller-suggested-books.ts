import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SellerSetPrice } from '../seller-set-price/seller-set-price';
import { BookService } from '../../providers/book-service';


@Component({
  templateUrl: 'seller-suggested-books.html',
  providers: [BookService]
})
export class SellerSuggestedBooks {
  suggestedBooks: Array<{title: string, author: string, publisher: string, isbn: string}>;
  course: string;
  professor: string;
  semester: string;
  public list: any;
  form = {
    title: '',
    author: '',
    edition: '',
    publisher: '',
    isbn: ''};

  constructor(private navCtrl: NavController, private navParams: NavParams, public bookService: BookService) {
    this.list = null;
    this.suggestedBooks = [];

    let classForm = this.navParams.get('classForm');
    this.course = classForm.course;
    this.professor = classForm.instructor;
    this.semester = classForm.semester;
    this.loadList();
  }

  loadList(){
    this.bookService.load(this.course, this.professor)
    .then(data => {
      this.list = data;
      for(let l of this.list) {
        this.suggestedBooks.push({title: l.title, author: l.author, edition: l.edition, publisher: l.publisher, isbn: l.isbn});
      }
    });
  }

  openPage(suggestedBook) {
    this.navCtrl.push(SellerSetPrice, {
      book: suggestedBook,
      course: this.course,
      instructor: this.professor,
      semester: this.semester});
  }

  onSubmit() {
    this.openPage(this.form);
  }
}

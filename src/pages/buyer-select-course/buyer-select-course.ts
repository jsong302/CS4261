import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyerSuggestedBooks } from '../buyer-suggested-books/buyer-suggested-books';


@Component({
  templateUrl: 'buyer-select-course.html'
})
export class BuyerSelectCourse {
  courses: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.courses = [
      'EAS 1601',
      'ECE 2031',
      'CS 3251',
      'ISYE 3770',
      'CS 4261',
      'CS 4699'
    ];
  }

  openPage(course) {
    this.navCtrl.push(BuyerSuggestedBooks, {course: course});
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyerSelectCourse } from '../buyer-select-course/buyer-select-course';
import { BuyerHistory } from '../buyer-history/buyer-history';


@Component({
  templateUrl: 'buyer-choose-functionality.html'
})
export class BuyerChooseFunctionality {
  constructor(private navCtrl: NavController) {
  }

  buyBook() {
    this.navCtrl.push(BuyerSelectCourse, {});
  }

  viewHistory() {
    this.navCtrl.push(BuyerHistory, {});
  }
}

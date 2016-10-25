import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyerSuggestedBooks } from '../buyer-suggested-books/buyer-suggested-books';
import {CourseService} from '../../providers/course-service';


@Component({
  templateUrl: 'buyer-select-course.html',
  providers: [CourseService]
})
export class BuyerSelectCourse {
  public courses: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public courseService: CourseService) {
    this.loadCourses();
  }

  openPage(course) {
    this.navCtrl.push(BuyerSuggestedBooks, {course: course});
  }

  loadCourses(){
    this.courseService.load()
    .then(data => {
      this.courses = data;
    });
  }

}

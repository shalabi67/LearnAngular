import { Component, OnInit } from '@angular/core';
import {Lesson} from "../models/lesson";
import {AngularFireDatabase} from "@angular/fire/database";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../models/Course";
import {map} from 'rxjs/operators';
import {CoursesService} from "../services/courses.service";
import {NewsletterService} from "../services/newsletter.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'course-detail-component',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;
  lessons: Lesson[];

  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService,
              private newsletterService: NewsletterService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe( params => {

        const courseUrl = params['id'];

        this.coursesService.findCourseByUrl(courseUrl)
          .subscribe(data => {
            this.course = data;

            this.coursesService.findCourseLessons(this.course.id)
              .subscribe(lessons => this.lessons = lessons);
          });

      });

  }

  onSubscribe(email:string) {
    this.newsletterService.subscribeToNewsletter(email)
      .subscribe(
        () => {
          alert('Subscription successful ...');
        },
        console.error
      );
  }

}

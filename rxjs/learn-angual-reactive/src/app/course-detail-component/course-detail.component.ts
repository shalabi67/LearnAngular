import { Component, OnInit } from '@angular/core';
import {Lesson} from "../models/lesson";
import {AngularFireDatabase} from "@angular/fire/database";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../models/Course";
import {map} from 'rxjs/operators';
import {CoursesService} from "../services/courses.service";

@Component({
  selector: 'course-detail-component',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;
  lessons: Lesson[];

  constructor(private route: ActivatedRoute,
              private coursesService : CoursesService) {


    route.params
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

  ngOnInit() {

  }

}

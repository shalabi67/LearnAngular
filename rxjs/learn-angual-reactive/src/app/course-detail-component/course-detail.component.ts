import { Component, OnInit } from '@angular/core';
import {Lesson} from "../models/lesson";
import {AngularFireDatabase} from "@angular/fire/database";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../models/Course";
import {map} from 'rxjs/operators';

@Component({
  selector: 'course-detail-component',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;
  lessons: Lesson[];

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {


    route.params
      .subscribe( params => {

        const courseUrl = params['id'];

        this.db.list('courses', ref => ref.orderByChild('url').equalTo(courseUrl))
          .snapshotChanges()
          .pipe(
            map( data => data[0])
          )
          .subscribe(data => {
            this.course = <Course>{
              id: data.payload.key,
              ...data.payload.val()
            };

            this.db.list('lessons', ref => ref.orderByChild('courseId').equalTo(data.payload.key))
              .snapshotChanges()
              .subscribe(lessons => {
                this.lessons = lessons.map(data => {
                  return <Lesson>{
                    id: data.payload.key,
                    ...data.payload.val()
                  }
                });
              });
          });

      });

  }

  ngOnInit() {

  }

}

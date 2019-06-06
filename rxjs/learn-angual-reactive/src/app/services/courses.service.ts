import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Course} from "../models/Course";
import {Observable} from "rxjs";
import {Lesson} from "../models/lesson";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  findAllCourses() : Observable<Course[]> {
    // @ts-ignore
    return this.db.list('courses')
      .valueChanges();
  }

  findLatestLessons() : Observable<Lesson[]>  {
    // @ts-ignore
    return this.db.list('lessons', ref => ref.orderByKey().limitToLast(10))
      .valueChanges();
  }

  findCourseByUrl(courseUrl: string) : Observable<Course> {

    // @ts-ignore
    return this.db.list('courses', ref => ref.orderByChild('url').equalTo(courseUrl))
      .snapshotChanges()
      .pipe(
        map( changes => {

          const snap = changes[0];

          return <Course> {
            id:snap.payload.key,
            ...snap.payload.val()
          };

        })
      )
  }

  findCourseLessons(courseId: String) : Observable<Lesson[]>{

    // @ts-ignore
    return this.db.list('lessons', ref => ref.orderByChild('courseId').equalTo(courseId))
      .valueChanges();
  }
}

import { Component, OnInit } from '@angular/core';
import {Lesson} from "../models/lesson";
import {lessonsStore} from "../datalayer/lessons-store";
import {Observer} from "rxjs";

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer<Lesson[]> {
  private lessons: Lesson[] = [];

  constructor() {
    this.lessons = [];
  }

  ngOnInit() {
    lessonsStore.lessonsList$.subscribe(this);
  }

  next = (data: Lesson[]) => {
    console.log('Lessons list component received data ..');
    this.lessons = data;
  }
  /*
  next(data: Lesson[]) {
    console.log('Lessons list component received data ..');
    this.lessons = data;
  }
  */

  toggleLessonViewed(lesson:Lesson) {
    console.log('toggling lesson ...');
    lessonsStore.toggleLessonViewed(lesson);
  }

  delete(deleted:Lesson) {
    lessonsStore.deleteLesson(deleted);
  }

  closed: boolean;
  complete = () => {
    console.log("getting lessons completed.")
  };
  error =  (err: any) => {
    console.log("LessonsListComponent: error while getting lessons " + err);
  };
}

import { Component, OnInit } from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE, Observer} from "../event-bus-experiments/event-bus";
import {Lesson} from "../models/lesson";
import * as _ from 'lodash';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {
  lessons: Lesson[] = [];

  constructor() {
    console.log('LessonsListComponent register itself.')
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.random(),
          description: lessonText
        })
      }
    });
  }

  ngOnInit() {

  }

  notify(data: Lesson[]) {
    console.log('LessonsListComponent notified');
    this.lessons = data.slice(0);
  }


  toggleLessonViewed(lesson: Lesson) {
    console.log('LessonsListComponent toggling lesson');
    lesson.completed = !lesson.completed;

  }

  delete(lessonToDelete: Lesson) {
    _.remove(this.lessons, lesson => lesson.id === lessonToDelete.id);
  }
}

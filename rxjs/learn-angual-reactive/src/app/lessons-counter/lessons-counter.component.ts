import { Component, OnInit } from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE, Observer} from "../event-bus-experiments/event-bus";
import {Lesson} from "../models/lesson";

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit, Observer {
  lessonsCounter = 0;

  constructor() {
    console.log('LessonsCounterComponent register to receive events');

    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => this.lessonsCounter += 1
    });
  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {
    console.log('LessonsCounterComponent had a notification.');

    this.lessonsCounter = data.length;
  }

}

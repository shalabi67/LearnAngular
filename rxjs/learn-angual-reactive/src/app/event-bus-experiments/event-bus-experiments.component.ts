import { Component, OnInit } from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE} from "./event-bus";
import {lessonsData} from "../models/lessons-data";
import {Lesson} from "../models/lesson";

@Component({
  selector: 'event-bus-experements',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  lessons: Lesson[] = [];

  constructor() { }

  ngOnInit() {
    console.log('EventBusExperimentsComponent broadcasts.');

    this.lessons = lessonsData.slice(0);

    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE,
      this.lessons);

    //simulate dding new events
    setTimeout(() => {
      this.lessons.push({
        id: Math.random(),
        description: 'New lesson from backend.'
      });

      globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons);

    }, 10000);
  }

  addLesson(lessonText: string) {
    console.log("EventBusExperimentsComponent lesson added event");
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }

}

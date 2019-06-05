import { Component, OnInit } from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE} from "./event-bus";
import {lessonsData} from "../models/lessons-data";
import {Lesson} from "../models/lesson";
import {lessonsStore} from "../datalayer/lessons-store";

@Component({
  selector: 'event-bus-experements',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  lessons: Lesson[] = [];

  constructor() { }

  ngOnInit() {

    console.log('Top level component broadcasted all lessons ...');

    lessonsStore.initializeLessonsList(lessonsData.slice(0));

    setTimeout(() => {

      const newLesson = {
        id: Math.random(),
        description: 'New lesson arriving from the backend'
      };

      lessonsStore.addLesson(newLesson);

    }, 10000);

  }

  addLesson(lessonText: string) {
    const newLesson = {
      id: Math.random(),
      description: lessonText
    };

    lessonsStore.addLesson(newLesson);
  }

}

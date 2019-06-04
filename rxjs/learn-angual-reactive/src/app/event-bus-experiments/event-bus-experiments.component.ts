import { Component, OnInit } from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE} from "./event-bus";
import {lessonsData} from "../models/lessons-data";

@Component({
  selector: 'event-bus-experements',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('EventBusExperimentsComponent broadcasts.');
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE,
      lessonsData.slice(0));
  }

  addLesson(lessonText: string) {
    console.log("EventBusExperimentsComponent lesson added event");
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }

}

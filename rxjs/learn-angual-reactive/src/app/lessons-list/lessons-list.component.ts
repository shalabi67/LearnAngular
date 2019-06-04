import { Component, OnInit } from '@angular/core';
import {globalEventBus, Observer} from "../event-bus-experiments/event-bus";
import {Lesson} from "../models/lesson";

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {
  lessons: Lesson[] = [];

  constructor() {
    console.log('LessonsListComponent register itself.')
    globalEventBus.registerObserver(this);
  }

  ngOnInit() {

  }

  notify(data: Lesson[]) {
    console.log('LessonsListComponent notified');
    this.lessons = data;
  }

}

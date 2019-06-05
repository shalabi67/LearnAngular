import { Component, OnInit } from '@angular/core';
import {Lesson} from "../models/lesson";
import {Observer} from "rxjs";
import {lessonsStore} from "../datalayer/lessons-store";

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements Observer<Lesson[]>, OnInit {
  private lessonsCounter : number = 0;

  ngOnInit() {
    console.log('lesson list component is registered as observer ..');
    lessonsStore.lessonsList$.subscribe(this);

  }

  next = (data: Lesson[]) =>{
    console.log('counter component received data ..');
    this.lessonsCounter = data.length;
  }

  closed: boolean;
  complete = () => {
    console.log("getting lessons count completed.")
  };
  error=(err: any) => {
    console.log("LessonsCounterComponent: error while getting lessons count " + err);
  };

}

import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Lesson} from "../models/lesson";
import {Course} from "../models/Course";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: Course[];
  latestLessons: Lesson[];

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {

    this.db.list('courses')
      .valueChanges()
      //.do(console.log)
      .subscribe(
        (data:Course[]) => this.courses = data
      );

    this.db.list('lessons', ref => ref.orderByKey().limitToLast(10))
      .valueChanges()
      //.do(console.log)
      .subscribe(
        (data:Lesson[]) => this.latestLessons = data
      );
  }

}

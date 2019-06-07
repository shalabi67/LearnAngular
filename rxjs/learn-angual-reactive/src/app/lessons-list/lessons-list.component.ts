import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from "../models/lesson";
import {lessonsStore} from "../datalayer/lessons-store";
import {Observer} from "rxjs";

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit{
  @Input()
  lessons: Lesson[];

  ngOnInit(): void {
  }

}

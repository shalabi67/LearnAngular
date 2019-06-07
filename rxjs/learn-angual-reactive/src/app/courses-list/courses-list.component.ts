import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../models/Course";

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @Input()
  courses : Course[];

  constructor() { }

  ngOnInit() {
  }

}
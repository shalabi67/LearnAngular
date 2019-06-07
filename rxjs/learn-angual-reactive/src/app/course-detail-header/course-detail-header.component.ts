import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Lesson} from "../models/lesson";
import {Course} from "../models/Course";

@Component({
  selector: 'course-detail-header',
  templateUrl: './course-detail-header.component.html',
  styleUrls: ['./course-detail-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailHeaderComponent {

  @Input()
  course: Course;

  @Input()
  lessons: Lesson[];

  @Input()
  firstName: string;

  @Output()
  subscribe = new EventEmitter();

  onSubscribe(email:string) {
    this.subscribe.emit(email);
  }

}

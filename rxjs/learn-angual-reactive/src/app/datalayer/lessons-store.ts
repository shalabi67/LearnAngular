import {Lesson} from "../models/lesson";
import {Observable, Subject, Observer, BehaviorSubject} from "rxjs";
import * as _ from 'lodash';

class LessonsStore {
  private lessonsListSubject : BehaviorSubject<Lesson[]> = new BehaviorSubject([]);

  //$ means it is an observable
  public lessonsList$: Observable<Lesson[]> = this.lessonsListSubject.asObservable();

  initializeLessonsList(newList: Lesson[]) {
    this.lessonsListSubject.next(_.cloneDeep(newList));
  }

  addLesson(newLesson: Lesson) {
    const lessons = this.cloneLessons();
    lessons.push(_.cloneDeep(newLesson));

    //broadcast
    this.lessonsListSubject.next(lessons);
  }

  deleteLesson(deleted:Lesson) {
    const lessons = this.cloneLessons();
    _.remove(lessons,
      lesson => lesson.id === deleted.id );

    //broadcast
    this.lessonsListSubject.next(lessons);
  }

  toggleLessonViewed(toggled:Lesson) {
    const lessons = this.cloneLessons();
    const lesson = _.find(lessons, lesson => lesson.id === toggled.id);

    lesson.completed = ! lesson.completed;

    //broadcast
    this.lessonsListSubject.next(lessons);
  }

  broadcast() {
    this.lessonsListSubject.next(this.cloneLessons());
  }

  private cloneLessons() {
    return _.cloneDeep(this.lessonsListSubject.getValue())
  }
}

export const lessonsStore = new LessonsStore();

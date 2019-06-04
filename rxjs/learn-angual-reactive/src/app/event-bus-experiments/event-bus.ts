import * as _ from 'lodash';

export const LESSONS_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE';

export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';


export interface Observer {
  notify(data:any);
}

interface Subject {
  registerObserver(obs:Observer);
  unregisterObserver(obs:Observer);
  notifyObservers(data:any);
}

class EventBus implements Subject {
  private observers: Observer[] = [];

  notifyObservers(data: any) {
    this.observers.forEach(obs => obs.notify(data));
  }

  registerObserver(obs: Observer) {
    this.observers.push(obs);
  }

  unregisterObserver(obs: Observer) {
    _.remove(this.observers, el => el == obs);
  }

}

export const globalEventBus = new EventBus();

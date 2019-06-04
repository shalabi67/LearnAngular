import { Component, OnInit } from '@angular/core';
import {globalEventBus} from "./event-bus";
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
    globalEventBus.notifyObservers(lessonsData);
  }

}

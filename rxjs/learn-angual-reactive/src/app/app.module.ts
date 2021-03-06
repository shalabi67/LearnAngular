import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { HomeComponent } from './home-component/home.component';
import { CourseDetailComponent } from './course-detail-component/course-detail.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {routerConfig} from "./router.config";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {firebaseConfig} from "../environments/firebase.config";
import {CoursesService} from "./services/courses.service";
import { CoursesListComponent } from './courses-list/courses-list.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CourseDetailHeaderComponent } from './course-detail-header/course-detail-header.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent,
    EventBusExperimentsComponent,
    LessonsListComponent,
    LessonsCounterComponent,
    HomeComponent,
    CourseDetailComponent,
    CoursesListComponent,
    TopMenuComponent,
    CourseDetailHeaderComponent,
    NewsletterComponent,

    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

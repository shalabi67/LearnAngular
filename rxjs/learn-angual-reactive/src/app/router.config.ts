import {Routes} from '@angular/router';
import {CourseDetailComponent} from "./course-detail-component/course-detail.component";
import {HomeComponent} from "./home-component/home.component";



export const routerConfig : Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'course/:id',
    component: CourseDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

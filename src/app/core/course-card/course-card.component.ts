import { Component } from '@angular/core';
import { COURSES } from '../model/db.data';


@Component({
  selector: 'app-course-card',
  imports: [ ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  coreCourse = COURSES[0];

  rxjxCourse = COURSES[1];

  ngrxCourse = COURSES[2];
}

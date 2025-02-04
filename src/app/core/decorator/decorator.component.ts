import { Component } from '@angular/core';
import { COURSES } from '../model/db.data';

@Component({
  selector: 'app-decorator',
  imports: [],
  templateUrl: './decorator.component.html',
  styleUrl: './decorator.component.css'
})
export class DecoratorComponent {
 
  coreCourse = COURSES[0];

  rxjxCourse = COURSES[1];

  ngrxCourse = COURSES[2];
}

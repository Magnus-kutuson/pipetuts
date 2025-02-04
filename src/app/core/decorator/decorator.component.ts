import { Component } from '@angular/core';
import { COURSES } from '../public/db-data.ts';

@Component({
  selector: 'app-decorator',
  imports: [],
  templateUrl: './decorator.component.html',
  styleUrl: './decorator.component.css'
})
export class DecoratorComponent {
 
  coreCourse = COURSES[0];

}

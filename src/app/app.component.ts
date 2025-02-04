import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransformComponent } from './transform/transform.component';
import { FormsComponent } from './forms/forms.component';
import { DecoratorComponent } from './core/decorator/decorator.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TransformComponent, FormsComponent, DecoratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipetuts';
}

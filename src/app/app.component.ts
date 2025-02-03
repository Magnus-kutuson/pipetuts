import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransformComponent } from './transform/transform.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TransformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipetuts';
}

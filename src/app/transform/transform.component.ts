import { Component } from '@angular/core';
import { MycustompipePipe } from '../core/pipe/mycustompipe.pipe';

@Component({
  selector: 'app-transform',
  imports: [MycustompipePipe],
  templateUrl: './transform.component.html',
  styleUrl: './transform.component.css'
})
export class TransformComponent {

}

import { Component, OnInit } from '@angular/core';
import { MycustompipePipe } from '../core/pipe/mycustompipe.pipe';
import { KebabCasePipe } from '../core/pipe/kebab-case.pipe';

@Component({
  selector: 'app-transform',
  imports: [MycustompipePipe, KebabCasePipe],
  templateUrl: './transform.component.html',
  styleUrl: './transform.component.css'
})
export class TransformComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

}

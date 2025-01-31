import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-pipe',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  company = 'Angular';
  purchaseDate = new Date();
  purchaseAmount = 1000;
}

import { Component } from '@angular/core';
import {
  CurrencyPipe, DatePipe, TitleCasePipe,
  UpperCasePipe
} from '@angular/common';
@Component({
  selector: 'app-pipe',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe, UpperCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  company = 'acme corporation';
  purchaseDate = new Date();
  purchaseAmount = 1000;
  firstName = 'john';
  lastName = 'doe';
  isAdmin = false;
}

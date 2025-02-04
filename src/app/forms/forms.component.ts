import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {



  userData = {
    name: '',
    email: '',
    password: ''
  }

onSubmit(form: any) {
  console.log('Form submitted', form.value);
}
}

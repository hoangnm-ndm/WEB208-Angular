import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('Registration submitted:', this.user);
    // Goi API
  }
}

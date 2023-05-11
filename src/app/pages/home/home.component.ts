import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user = {
    id: '1',
    name: 'John Doe',
    age: 32,
    address: 'VN',
  };
}

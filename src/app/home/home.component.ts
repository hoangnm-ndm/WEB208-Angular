import { Component } from '@angular/core';
import { User } from '../common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user: User = {
    name: 'Hoang Teo',
    age: 33,
    address: 'Vietnam',
  };
}

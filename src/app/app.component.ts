import { Component } from '@angular/core';
import { User } from './common/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: User = {
    name: 'Hoang Teo',
    age: 33,
    address: 'Vietnam',
  };
}

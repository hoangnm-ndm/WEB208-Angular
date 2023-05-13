import { Component } from '@angular/core';
import { product } from 'src/app/datas/mockData';

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
  products = product;
}

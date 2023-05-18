import { Component } from '@angular/core';
import { product } from 'src/app/datas/mockData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products = product;
}

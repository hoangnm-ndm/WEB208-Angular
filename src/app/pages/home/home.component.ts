import { Component } from '@angular/core';
import products from 'src/app/datas/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products = products;
}

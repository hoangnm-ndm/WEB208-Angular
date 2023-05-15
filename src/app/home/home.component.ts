import { Component } from '@angular/core';
import { Product } from '../common/product';
import { User } from '../common/user';
import products from '../datas/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products = products;
}

import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  product: Product = {
    id: '1',
    name: 'Product 1',
    price: 100,
    description: 'Product 1 description',
  };
}

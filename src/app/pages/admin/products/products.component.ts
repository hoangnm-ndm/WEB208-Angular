import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductService } from 'src/app/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products!: IProduct[];
  myName: string = '';

  status: boolean = false;
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  updateProduct(id: string, product: IProduct): void {
    this.productService.updateProduct(id, product).subscribe();
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((p) => p.id !== id);
    });
  }
}

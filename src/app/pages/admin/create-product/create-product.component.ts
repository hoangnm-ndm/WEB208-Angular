import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductService } from 'src/app/product-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  product: IProduct = {
    id: '',
    name: '',
    price: 0,
    desc: '',
  };
  products!: IProduct[];

  constructor(private productService: ProductService) {}

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(
      (response) => {
        console.log('Product created successfully');
        // Thực hiện các xử lý khác sau khi tạo sản phẩm thành công
      },
      (error) => {
        console.log('An error occurred while creating product:', error);
        // Xử lý lỗi nếu có
      }
    );
  }
}

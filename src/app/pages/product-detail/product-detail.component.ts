import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productId: string | undefined;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      return this.getProduct();
    });
  }

  getProduct() {
    if (this.productId !== undefined && this.productId !== null) {
      if (this.productId) {
        this.productService.getProduct(this.productId).subscribe(
          (response) => {
            this.product = response;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }
}

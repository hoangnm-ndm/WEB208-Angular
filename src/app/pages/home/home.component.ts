import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/datas/datas';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any[] | undefined;
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToDetail(productId: string) {
    this.router.navigate(['/product/', productId]);
  }
}

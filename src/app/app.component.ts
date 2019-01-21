import { Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'auction-app';
  products: Array<Product> = [];
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

}

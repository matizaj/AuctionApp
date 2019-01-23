import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { Review } from 'src/app/model/review';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  product: Product;
  reviews: Review[];
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.params['prodId'];
    this.product = this.productService.getProductById(this.productId);
    this.reviews = this.productService.getReviewsForProduct(this.productId);
  }

}

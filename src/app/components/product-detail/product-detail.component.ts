import { Component, OnInit, ɵConsole } from '@angular/core';
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

  newComment: string;
  newRating: number;
  isReviewHidden = true;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.params['prodId'];
    this.product = this.productService.getProductById(this.productId);
    this.reviews = this.productService.getReviewsForProduct(this.productId);
  }

  addReview() {
    const review = new Review(0, this.product.id, new Date(), 'Anonymous', this.newRating, this.newComment);
    console.log('dodawanie opinii...' + JSON.stringify(review));
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);
  }

  averageRating(reviews: Review[]) {
    const sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }
}

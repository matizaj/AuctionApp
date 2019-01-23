import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Review } from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Array<Product> {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number): Product {
    return products.find( p => p.id === productId);
  }

  getReviewsForProduct(productId: number): Review[] {
    // tslint:disable-next-line:max-line-length
    return reviews.filter(r => r.productId === productId).map(r => new Review(r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment));
  }
}

const products = [
  {
    '_id': 0,
    get 'id_1'() {
      return this['_id'];
    },
    set 'id_1'(value) {
      this['_id'] = value;
    },
    get 'id'() {
      return this['_id'];
    },
    set 'id'(value) {
      this['_id'] = value;
    },
    'title': 'Pierwszy produkt',
    'price': 24.99,
    'rating': 4.3,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Drugi produkt',
    'price': 64.99,
    'rating': 3.5,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },
  {
    'id': 2,
    'title': 'Trzeci produkt',
    'price': 74.99,
    'rating': 4.2,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics']
  },
  {
    'id': 3,
    'title': 'Czwarty produkt',
    'price': 84.99,
    'rating': 3.9,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['hardware']
  },
  {
    'id': 4,
    'title': 'Piąty produkt',
    'price': 94.99,
    'rating': 5,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 5,
    'title': 'Szósty produkt',
    'price': 54.99,
    'rating': 4.6,
    'description': 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  }
];

const reviews = [
  {'id' : 0, 'productId': 0, 'timestamp': '2019-01-05', 'user': 'uzytkownik 1', 'rating': 5, 'comment': 'asdn shgfd isiskdksjsj'},
  {'id' : 1, 'productId': 0, 'timestamp': '2019-01-23', 'user': 'uzytkownik 2', 'rating': 4, 'comment': 'test comment'}
];


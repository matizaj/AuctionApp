import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SearchComponent } from './components/search/search.component';
import { StarsComponent } from './components/stars/stars.component';
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

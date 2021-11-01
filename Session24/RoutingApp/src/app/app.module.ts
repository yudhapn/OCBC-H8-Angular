import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './presentation/home/home.component';
import { AboutComponent } from './presentation/about/about.component';
import { ProductsComponent } from './presentation/products/products.component';
import { ProductDetailComponent } from './presentation/product-detail/product-detail.component';
import { NoPageFoundComponent } from './presentation/no-page-found/no-page-found.component';
import { NavbarComponent } from './presentation/navbar/navbar.component';
import { ProductsViewModel } from './presentation/products/products-view-model';
import { GetAllProductsUsecase } from './domain/usecase/get-all-products-usecase';
import { GetProductByIdUsecase } from './domain/usecase/get-product-by-id-usecase';
import { ProductRepositoryToken } from './domain/repository/product-repository';
import { ProductRepositoryImpl } from './data/repository/product-repository-impl';
import { ProductDetailViewModel } from './presentation/product-detail/product-detail-view-model';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailComponent,
    NoPageFoundComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: ProductsViewModel, useClass: ProductsViewModel },
    { provide: ProductDetailViewModel, useClass: ProductDetailViewModel },
    { provide: GetAllProductsUsecase, useClass: GetAllProductsUsecase },
    { provide: GetProductByIdUsecase, useClass: GetProductByIdUsecase },
    { provide: ProductRepositoryToken, useClass: ProductRepositoryImpl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

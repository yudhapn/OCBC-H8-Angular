import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/model/product';
import { ProductsViewModel } from './products-view-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  private productsViewModel: ProductsViewModel;
  products: Product[] = [];

  constructor(productsViewModel: ProductsViewModel) {
    this.productsViewModel = productsViewModel;
  }

  ngOnInit(): void {
    this.products = this.productsViewModel.getAllProducts();
  }
}

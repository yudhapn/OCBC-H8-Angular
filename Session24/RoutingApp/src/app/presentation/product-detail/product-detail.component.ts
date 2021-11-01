import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/domain/model/product';
import { ProductDetailViewModel } from './product-detail-view-model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  private productDetailViewModel: ProductDetailViewModel;
  product_id: string;
  product: Product = {} as Product

  constructor(
    activatedRoute: ActivatedRoute,
    productDetailViewModel: ProductDetailViewModel
  ) {
    this.product_id = activatedRoute.snapshot.params.id;
    this.productDetailViewModel = productDetailViewModel;
  }

  ngOnInit(): void {
    this.product = this.productDetailViewModel.getProductById(this.product_id);
  }
}

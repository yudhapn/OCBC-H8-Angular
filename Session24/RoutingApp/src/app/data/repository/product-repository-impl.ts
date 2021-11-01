import { Injectable } from '@angular/core';
import { ProductRepository } from 'src/app/domain/repository/product-repository';
import { Product } from '../../domain/model/product';
import { mapDtosToDomain, mapDtoToDomain } from '../datasource/dto/product-dto';
import { ProductService } from '../service/product.service';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  private productService: ProductService;
  private products: Product[];
  private product: Product;

  constructor(productService: ProductService) {
    this.productService = productService;
    this.products = [];
    this.product = {
      id: '',
      name: '',
      description: '',
      imageUrl: '',
    };
  }

  getAllProducts(): Product[] {
    this.productService
      .getAllProducts()
      .subscribe((products) => (this.products = mapDtosToDomain(products)));
    return this.products;
  }

  getProductById(id: string): Product {
    this.productService
      .getProductById(id)
      .subscribe((productDTO) => (this.product = mapDtoToDomain(productDTO)));
    return this.product;
  }
}

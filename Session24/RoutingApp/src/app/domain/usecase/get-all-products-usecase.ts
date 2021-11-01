import { Inject, Injectable } from '@angular/core';
import { Product } from '../model/product';
import {
  ProductRepository,
  ProductRepositoryToken,
} from '../repository/product-repository';

@Injectable()
export class GetAllProductsUsecase {
  private productRepository: ProductRepository;

  constructor(
    @Inject(ProductRepositoryToken) productRepository: ProductRepository
  ) {
    this.productRepository = productRepository;
  }

  execute(): Product[] {
    return this.productRepository.getAllProducts();
  }
}

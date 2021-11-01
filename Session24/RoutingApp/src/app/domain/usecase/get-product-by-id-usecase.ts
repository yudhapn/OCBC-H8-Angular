import { Inject, Injectable } from '@angular/core';
import { Product } from '../model/product';
import {
  ProductRepository,
  ProductRepositoryToken,
} from '../repository/product-repository';

@Injectable()
export class GetProductByIdUsecase {
  private productRepository: ProductRepository;

  constructor(
    @Inject(ProductRepositoryToken) productRepository: ProductRepository
  ) {
    this.productRepository = productRepository;
  }

  execute(id: string): Product {
    return this.productRepository.getProductById(id);
  }
}

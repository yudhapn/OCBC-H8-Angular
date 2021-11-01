import { InjectionToken } from '@angular/core';
import { Product } from '../../domain/model/product';

export interface ProductRepository {
  getAllProducts(): Product[];
  getProductById(id: string): Product;
}

export const ProductRepositoryToken = new InjectionToken<ProductRepository>(
  'ProductRepositoryToken'
);

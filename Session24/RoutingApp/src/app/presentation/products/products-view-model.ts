import { Injectable } from '@angular/core';
import { GetAllProductsUsecase } from 'src/app/domain/usecase/get-all-products-usecase';

@Injectable()
export class ProductsViewModel {
  private getAllProductsUsecase: GetAllProductsUsecase;

  constructor(getAllProductsUsecase: GetAllProductsUsecase) {
    this.getAllProductsUsecase = getAllProductsUsecase;
  }

  getAllProducts() {
    return this.getAllProductsUsecase.execute();
  }
}

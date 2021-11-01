import { Injectable } from '@angular/core';
import { GetProductByIdUsecase } from 'src/app/domain/usecase/get-product-by-id-usecase';

@Injectable()
export class ProductDetailViewModel {
  private getProductByIdUsecase: GetProductByIdUsecase;

  constructor(getProductByIdUsecase: GetProductByIdUsecase) {
    this.getProductByIdUsecase = getProductByIdUsecase;
  }

  getProductById(id: string) {
    return this.getProductByIdUsecase.execute(id);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductDTO } from '../datasource/dto/product-dto';
import { getAllProducts, getProducById } from '../datasource/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllProducts(): Observable<ProductDTO[]> {
    const products = of(getAllProducts())
    return products;
  }

  getProductById(id: string): Observable<ProductDTO> {
    const productDTO = of(getProducById(id))
    return productDTO;
  }
}

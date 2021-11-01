import { Product } from 'src/app/domain/model/product';

export interface ProductDTO {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export function mapDtosToDomain(productsDTO: ProductDTO[]): Product[] {
  return productsDTO.map((productDTO) => {
    return {
      id: productDTO.id,
      name: productDTO.name,
      description: productDTO.description,
      imageUrl: productDTO.imageUrl,
    };
  });
}

export function mapDtoToDomain(productDTO: ProductDTO): Product {
  return {
    id: productDTO.id,
    name: productDTO.name,
    description: productDTO.description,
    imageUrl: productDTO.imageUrl,
  };
}

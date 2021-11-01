import { ProductDTO } from './dto/product-dto';

const ALL_PRODUCTS: ProductDTO[] = [
  {
    id: 'ABC23468214',
    name: 'Tshirt',
    imageUrl: 'https://cf.shopee.co.id/file/961a6f878033fa9ed7dd3ec001ae2989',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 'D3C23468986',
    name: 'Shoes',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b89cb68c-2da6-4dac-9e64-b9c2ce7df166/wearallday-shoe-NpvSP5.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 'HGC23467634',
    name: 'Handbags',
    imageUrl: 'https://fossil.scene7.com/is/image/FossilPartners/ZB1563762_main-nogoogle?$sfcc_fos_hi-res$',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

export function getAllProducts(): ProductDTO[] {
  return ALL_PRODUCTS;
}

export function getProducById(id: string): ProductDTO {
  const productDTO = ALL_PRODUCTS.find((productDTO) => productDTO.id == id);
  if (productDTO == undefined) {
    return {} as ProductDTO;
  } else {
    return productDTO;
  }
}

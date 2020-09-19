import { Product } from './../model/produtcs-model';
export class MockData {
  public static Product: Product[] = [
    {
      id: 10,
      title: 'Handbag',
      modelName: 'Swaggy',
      color: 'purple',
      productType: 'Women',
      brand: 'LV',
      price: 2000,
    },
    {
      id: 15,
      title: 'OPPO F5 Youth (Gold, 32 GB)',
      modelName: 'SUMSUNG',
      color: 'Gold',
      productType: 'Mobile',
      brand: 'OPPO',
      price: 16990,
    },
    {
      id: 101,
      title: 'Handbag',
      modelName: 'Swaggy',
      color: 'purple',
      productType: 'Women',
      brand: 'LV',
      price: 2000,
    },
  ];
}

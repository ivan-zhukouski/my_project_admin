import { Product } from './product.model';

export interface ShoppingCart {
  id: string;
  status: string;
  cartNumber: number;
  products: Array<Product>;
  owner: object;
  updatedAt: string;
  totalCount: number;
  totalPrice: number;
  store: string;
  isAgeRestricted: boolean;
  refundStatus: string;
}


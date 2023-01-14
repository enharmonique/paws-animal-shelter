import {Product} from "./product";

export class CartItem {
  id: number;
  productId: number;
  productName: string;
  productImageUrl: string;

  constructor(product: Product) {
    this.productId=product.id;
    this.id=product.id;
    this.productName=product.name;
    this.productImageUrl=product.imageUrl;
  }
}

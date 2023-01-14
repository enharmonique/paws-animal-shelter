import { Injectable } from '@angular/core';
import {CartItem} from "src/app/model/cart-item";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from 'rxjs';
import {cartUrl} from "src/app/config/api";
import {Product} from "src/app/model/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }


  getCartItems(): Observable<CartItem[]> {
    //TODO: mapping the obtained result to our cart props
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              productExists = true
              break;
            }
          }
          if (!productExists) {
            cartItems.push(new CartItem(item.product));
            //this.http.post(cartUrl, {id: item.product.id})
          }
        }

        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any>{
    //id must be product id !!!!! do not change that
    return this.http.post(cartUrl,{id: product.id,product});
  }


  removeProductFromCart(product: Product): Observable<any> {
    return this.http.delete(cartUrl + '/'+product.id)

  }
}


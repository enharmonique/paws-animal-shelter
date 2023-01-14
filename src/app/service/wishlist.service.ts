import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {wishlistUrl} from "../config/api";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist(): Observable<any[]> {

    return this.http.get<any[]>(wishlistUrl).pipe(
      map((result: any[]) =>{
        let productsIds: number[]=[];
        result.forEach(item => productsIds.push(item.id))
        return productsIds;
      })

    );

  }

  addToWishlist(productId: any){
    return this.http.post(wishlistUrl, {id: productId})
  }

  removeFromWishlist(productId: any){
    return this.http.delete(wishlistUrl + '/' + productId)

  }
}

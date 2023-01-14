import { Injectable } from '@angular/core';
import {Product} from "src/app/model/product";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
 import { productsUrl} from "src/app/config/api";
// const apiUrl='http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productsUrl);
  }

  public search = new BehaviorSubject<string>("");



}

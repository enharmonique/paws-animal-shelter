import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service'
import {Product} from "src/app/model/product";
import {WishlistService} from "src/app/service/wishlist.service";

@Component({
  selector: 'app-adoptionpage-list',
  templateUrl: './adoptionpage-list.component.html',
  styleUrls: ['./adoptionpage-list.component.css']
})
export class AdoptionpageListComponent implements OnInit {

  productList: Product[] = []
  wishlist: number[]=[]

  constructor(private productService: ProductService,
              private whistlistService: WishlistService) { }

  ngOnInit(){
    this.loadProducts()
    this.loadWishlist()
  }

  loadProducts(){
    this.productService.getProducts().subscribe((products)  =>{
      this.productList=products;
    })

    //
    this.productService.search.subscribe((val: any)=>{
      this.searchKey=val;
    })

  }

  loadWishlist(){
    this.whistlistService.getWishlist().subscribe(productIds => {
      this.wishlist=productIds
    })
  }

  searchKey:string="";




}

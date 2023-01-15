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
      this.filterCategory=products;
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

  public filterCategory:any;

  filter(category:string){
    this.filterCategory=this.productList
      .filter((a:any)=>{
        if(a.category == category || category==''){
          return a;
        }
      })
  }

  public searchTerm: string = '';

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    //console.log(this.searchTerm);
    this.productService.search.next(this.searchTerm);
  }





}

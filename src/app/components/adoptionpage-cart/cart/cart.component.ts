import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service'
import {Product} from "src/app/model/product";
import {CartService} from "src/app/service/cart.service";
import {CartItem} from "../../../model/cart-item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : any[]=[];

  constructor(private msg: MessengerService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product: Product) => {
      //this.addProductToCart(product)
      this.loadCartItems();

    })

  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems=items;
    })

  }

  // addProductToCart(product: Product){
  //
  //   let productExists=false
  //
  //   for(let i in this.cartItems) {
  //     if (this.cartItems[i].productId === product.id) {
  //       //poate un mesaj aici
  //       productExists=true
  //       break;
  //     }
  //   }
  //
  //   if(!productExists){
  //     this.cartItems.push({
  //            productId: product.id,
  //            productName: product.name,
  //          })
  //   }
  //
  // }

}

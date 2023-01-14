import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../model/product";
import {MessengerService} from "../../../../service/messenger.service";
import {CartService} from "../../../../service/cart.service";
import {WishlistService} from "../../../../service/wishlist.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any
  //
  // @Input() productItem: Product;
  @Input() addedToWishlist: boolean = false;
  show=false;

  remove(product:Product){
    this.cartService.removeProductFromCart(product).subscribe()
    this.msg.sendMsg(product)
    this.wishlistService.removeFromWishlist(product.id).subscribe(()=> {
      this.addedToWishlist=false;
      this.msg.sendMsg(product)
    })
    window.location.reload();
  }

  constructor(private msg: MessengerService,
              private cartService: CartService,
              private wishlistService: WishlistService) {
    // this.productItem=new Product() ///
  }

  ngOnInit() {

  }


}

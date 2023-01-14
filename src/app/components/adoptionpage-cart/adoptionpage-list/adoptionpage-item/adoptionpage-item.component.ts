import { Component, OnInit, Input } from '@angular/core';
import {Product} from "src/app/model/product";
import { MessengerService} from "src/app/service/messenger.service";
import { CartService} from "src/app/service/cart.service";
import {WishlistService} from "src/app/service/wishlist.service";

@Component({
  selector: 'app-adoptionpage-item',
  templateUrl: './adoptionpage-item.component.html',
  styleUrls: ['./adoptionpage-item.component.css']
})
export class AdoptionpageItemComponent implements OnInit {

  @Input() productItem: Product;
  @Input() addedToWishlist: boolean = false;
  show=false;

  openpopup(){
    this.show=true
  }
  closepopup(){
    this.show=false
  }

  constructor(private msg: MessengerService,
              private cartService: CartService,
              private wishlistService: WishlistService) {
    this.productItem=new Product() ///
  }

  ngOnInit() {

  }
  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() =>{
      this.msg.sendMsg(this.productItem)
      this.handleAddToWishlist()
    })
  }

  handleAddToWishlist(){
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true;
      this.msg.sendMsg(this.productItem)
    })

  }

  handleRemoveFromWishlist(){
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(()=> {
      this.addedToWishlist=false;
      this.msg.sendMsg(this.productItem)
    })

  }

  removeProductFromCart() {
    this.cartService.removeProductFromCart(this.productItem).subscribe()
    this.msg.sendMsg(this.productItem)
    this.handleRemoveFromWishlist()
  }

}

import { Component, OnInit } from '@angular/core';
import {Animal} from "../../model/animal.model";
import {AnimalService} from "../../service/animal.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WishlistService} from "../../service/wishlist.service";
import {User} from "../../model/user.model";
import {WishlistEntry} from "../../model/wishlistEntry.model";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  user!: User;
  id!: string | null;
  wishlist: WishlistEntry[] = [];

  constructor(private wishlistService: WishlistService,
              private userService: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.id = localStorage.getItem('loggedInUserId');
    this.userService.getUserById(this.id!).subscribe(
      user => {
        this.user = user;
      }
    );
    this.wishlistService.getWishlistByUserId(this.id!).subscribe(
      wishlistEntries => {
        this.wishlist = wishlistEntries;
      }
    );
  }
}

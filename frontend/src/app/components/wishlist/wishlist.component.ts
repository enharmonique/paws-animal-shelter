import {Component, OnInit} from '@angular/core';
import {WishlistService} from "../../service/wishlist.service";
import {User} from "../../model/user.model";
import {WishlistEntry} from "../../model/wishlistEntry.model";
import {UserService} from "../../service/user.service";
import {Animal} from "../../model/animal.model";
import {AnimalService} from "../../service/animal.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  user!: User;
  id!: string | null;
  wishlist: WishlistEntry[] = [];
  animals: Animal[] = [];
  wishlistEmpty = true;

  constructor(private wishlistService: WishlistService,
              private userService: UserService,
              private animalService: AnimalService) {
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
        if (this.wishlist.length > 0) {
          this.wishlistEmpty = false;
        }
        for (let wishlistEntry of this.wishlist) {
          this.animalService
            .getAnimalById(wishlistEntry.idAnimal)
            .subscribe(
              animal => {
                this.animals.push(animal);
              }
            );
        }
      }
    );
  }

  getWishlistEntryByAnimalId(id: String) {
    for (let wishlistEntry of this.wishlist) {
      if (wishlistEntry.idAnimal == id) {
        return wishlistEntry.id;
      }
    }
    return null;
  }

  removeFromWishlist(animal: Animal) {
    if (this.getWishlistEntryByAnimalId(animal.id!)) {
      let id = this.getWishlistEntryByAnimalId(animal.id!);
      if (id != null) {
        this.wishlistService.deleteWishlistEntry(id).subscribe();
        window.location.reload()
      }
    }
  }
}
